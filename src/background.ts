// Background script for handling API communication and storage
chrome.runtime.onInstalled.addListener(() => {
  console.log('LeetAssist extension installed');
});

// Handle messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'ANALYZE_PROBLEM') {
    handleProblemAnalysis(request.data, sendResponse);
    return true; // Keep message channel open for async response
  }
  
  if (request.type === 'GET_API_KEY') {
    chrome.storage.sync.get(['geminiApiKey'], (result) => {
      sendResponse({ apiKey: result.geminiApiKey });
    });
    return true;
  }
});

async function handleProblemAnalysis(data: any, sendResponse: (response: any) => void) {
  try {
    // Get API key from storage
    const result = await chrome.storage.sync.get(['geminiApiKey']);
    
    if (!result.geminiApiKey) {
      sendResponse({ error: 'API key not configured' });
      return;
    }

    // Call Gemini API
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=' + result.geminiApiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Analyze this LeetCode problem and provide comprehensive assistance:
            
Problem Title: ${data.title}
Problem Description: ${data.description}
User's Code: ${data.code || 'No code provided yet'}

Please provide:
1. Simplified problem explanation
2. Optimal approach and algorithm
3. Time and space complexity analysis
4. Step-by-step solution walkthrough
5. Common edge cases to consider
6. Debugging tips if code is provided

Format your response in a clear, structured manner.`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      })
    });

    const aiResponse = await response.json();
    
    if (aiResponse.candidates && aiResponse.candidates[0]) {
      sendResponse({ 
        success: true, 
        analysis: aiResponse.candidates[0].content.parts[0].text 
      });
    } else {
      sendResponse({ error: 'Failed to get AI response' });
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    sendResponse({ error: 'Failed to analyze problem' });
  }
}