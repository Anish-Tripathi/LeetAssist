import React from 'react';
import { createRoot } from 'react-dom/client';
import { Brain, Key, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import './index.css';

const PopupApp = () => {
  const [apiKey, setApiKey] = React.useState('');
  const [savedKey, setSavedKey] = React.useState('');
  const [isSaving, setIsSaving] = React.useState(false);
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    // Load existing API key
    chrome.storage.sync.get(['geminiApiKey'], (result) => {
      if (result.geminiApiKey) {
        setSavedKey(result.geminiApiKey);
        // Show masked version
        setApiKey('*'.repeat(result.geminiApiKey.length));
      }
    });
  }, []);

  const handleSaveApiKey = async () => {
    if (!apiKey || apiKey.startsWith('*')) return;
    
    setIsSaving(true);
    
    try {
      await chrome.storage.sync.set({ geminiApiKey: apiKey });
      setSavedKey(apiKey);
      setApiKey('*'.repeat(apiKey.length));
      setMessage('API key saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to save API key');
      setTimeout(() => setMessage(''), 3000);
    }
    
    setIsSaving(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.startsWith('*')) {
      // If user starts typing over masked key, clear it
      if (value.length <= savedKey.length) {
        setApiKey('');
      } else {
        setApiKey(value.substring(savedKey.length));
      }
    } else {
      setApiKey(value);
    }
  };

  const openGeminiConsole = () => {
    chrome.tabs.create({ url: 'https://aistudio.google.com/app/apikey' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-4">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">LeetAssist</h1>
          <p className="text-gray-400 text-sm">Your Ultimate Guide to Acing LeetCode!</p>
        </div>

        {/* API Key Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Key className="w-5 h-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-white">API Configuration</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                API Key for Gemini 1.5 Pro (Latest)
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={apiKey}
                  onChange={handleInputChange}
                  placeholder="Enter your Gemini API key..."
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                {savedKey && (
                  <div className="absolute right-3 top-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={handleSaveApiKey}
              disabled={isSaving || !apiKey || apiKey.startsWith('*')}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-700 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              {isSaving ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Key className="w-5 h-5" />
              )}
              {isSaving ? 'Saving...' : 'Save API Key'}
            </button>

            {message && (
              <div className={`flex items-center gap-2 p-3 rounded-lg text-sm ${
                message.includes('successfully') 
                  ? 'bg-green-900/50 text-green-400 border border-green-800/50' 
                  : 'bg-red-900/50 text-red-400 border border-red-800/50'
              }`}>
                {message.includes('successfully') ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
                {message}
              </div>
            )}
          </div>
        </div>

        {/* Get API Key Help */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 p-6 mb-6">
          <h3 className="text-white font-semibold mb-3">Need an API Key?</h3>
          <p className="text-gray-400 text-sm mb-4">
            Get your free Gemini API key from Google AI Studio to start using LeetAssist's AI-powered features.
          </p>
          <button
            onClick={openGeminiConsole}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Get API Key from Google AI Studio
          </button>
        </div>

        {/* Usage Instructions */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 p-6">
          <h3 className="text-white font-semibold mb-3">How to Use</h3>
          <div className="space-y-2 text-gray-400 text-sm">
            <p>1. Get your Gemini API key and save it above</p>
            <p>2. Visit any LeetCode problem page</p>
            <p>3. Look for the floating LeetAssist button</p>
            <p>4. Click to get AI-powered assistance!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Render the popup
const container = document.getElementById('popup-root');
if (container) {
  const root = createRoot(container);
  root.render(<PopupApp />);
}