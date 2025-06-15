import React from 'react';
import { createRoot } from 'react-dom/client';
import { Brain, MessageCircle, Play, Clock, Youtube, Lightbulb } from 'lucide-react';
import './content.css';

// Main content script component
const LeetAssistFloat = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const [analysis, setAnalysis] = React.useState<string>('');
  const [followUpQuestion, setFollowUpQuestion] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('analysis');

  const extractProblemData = () => {
    const titleElement = document.querySelector('[data-cy="question-title"]');
    const descriptionElement = document.querySelector('[data-track-load="description_content"]');
    const codeElement = document.querySelector('.monaco-editor textarea') as HTMLTextAreaElement;
    
    return {
      title: titleElement?.textContent || 'Unknown Problem',
      description: descriptionElement?.textContent || 'No description found',
      code: codeElement?.value || ''
    };
  };

  const handleAnalyzeProblem = async () => {
    setIsAnalyzing(true);
    setActiveTab('analysis');
    
    const problemData = extractProblemData();
    
    chrome.runtime.sendMessage({
      type: 'ANALYZE_PROBLEM',
      data: problemData
    }, (response) => {
      setIsAnalyzing(false);
      if (response.success) {
        setAnalysis(response.analysis);
      } else {
        setAnalysis(`Error: ${response.error}`);
      }
    });
  };

  const handleFollowUp = async () => {
    if (!followUpQuestion.trim()) return;
    
    setIsAnalyzing(true);
    const problemData = extractProblemData();
    
    chrome.runtime.sendMessage({
      type: 'ANALYZE_PROBLEM',
      data: {
        ...problemData,
        followUp: followUpQuestion,
        previousAnalysis: analysis
      }
    }, (response) => {
      setIsAnalyzing(false);
      if (response.success) {
        setAnalysis(prev => prev + '\n\n--- Follow-up Response ---\n' + response.analysis);
      }
      setFollowUpQuestion('');
    });
  };

  if (!isOpen) {
    return (
      <div className="leetassist-float-button" onClick={() => setIsOpen(true)}>
        <Brain className="w-6 h-6" />
        <span className="leetassist-tooltip">LeetAssist</span>
      </div>
    );
  }

  return (
    <div className="leetassist-panel">
      <div className="leetassist-header">
        <div className="flex items-center gap-3">
          <div className="leetassist-logo">
            <Brain className="w-6 h-6 text-orange-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">LeetAssist</h3>
            <p className="text-xs text-gray-400">Your Ultimate Guide to Acing LeetCode!</p>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>

      <div className="leetassist-tabs">
        <button 
          className={`leetassist-tab ${activeTab === 'analysis' ? 'active' : ''}`}
          onClick={() => setActiveTab('analysis')}
        >
          <Lightbulb className="w-4 h-4" />
          Analysis
        </button>
        <button 
          className={`leetassist-tab ${activeTab === 'debug' ? 'active' : ''}`}
          onClick={() => setActiveTab('debug')}
        >
          <Play className="w-4 h-4" />
          Debug
        </button>
        <button 
          className={`leetassist-tab ${activeTab === 'complexity' ? 'active' : ''}`}
          onClick={() => setActiveTab('complexity')}
        >
          <Clock className="w-4 h-4" />
          Complexity
        </button>
        <button 
          className={`leetassist-tab ${activeTab === 'videos' ? 'active' : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          <Youtube className="w-4 h-4" />
          Videos
        </button>
      </div>

      <div className="leetassist-content">
        {activeTab === 'analysis' && (
          <div>
            <button 
              onClick={handleAnalyzeProblem}
              disabled={isAnalyzing}
              className="leetassist-analyze-btn"
            >
              {isAnalyzing ? (
                <div className="leetassist-spinner"></div>
              ) : (
                <Brain className="w-4 h-4" />
              )}
              {isAnalyzing ? 'Analyzing...' : 'Analyze Problem'}
            </button>

            {analysis && (
              <div className="leetassist-analysis">
                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                  {analysis}
                </div>
                
                <div className="leetassist-followup">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-white">Follow-up Question</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={followUpQuestion}
                      onChange={(e) => setFollowUpQuestion(e.target.value)}
                      placeholder="Ask for clarification or deeper insights..."
                      className="leetassist-input flex-1"
                      onKeyPress={(e) => e.key === 'Enter' && handleFollowUp()}
                    />
                    <button 
                      onClick={handleFollowUp}
                      disabled={!followUpQuestion.trim() || isAnalyzing}
                      className="leetassist-send-btn"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'debug' && (
          <div className="text-center py-8 text-gray-400">
            <Play className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Debug features coming soon!</p>
            <p className="text-xs mt-2">Step-by-step code execution and error detection</p>
          </div>
        )}

        {activeTab === 'complexity' && (
          <div className="text-center py-8 text-gray-400">
            <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Complexity analysis coming soon!</p>
            <p className="text-xs mt-2">Detailed time and space complexity breakdown</p>
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="text-center py-8 text-gray-400">
            <Youtube className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Video recommendations coming soon!</p>
            <p className="text-xs mt-2">Curated YouTube content for this problem</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Wait for page to load, then inject the component
const init = () => {
  // Check if we're on a LeetCode problem page
  if (!window.location.href.includes('/problems/')) return;
  
  // Create container for our React component
  const container = document.createElement('div');
  container.id = 'leetassist-root';
  document.body.appendChild(container);
  
  // Render our component
  const root = createRoot(container);
  root.render(<LeetAssistFloat />);
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}