# LeetAssist - AI-Powered Chrome Extension for LeetCode

LeetAssist is an intelligent Chrome extension that supercharges your LeetCode experience with AI-powered assistance directly within the browser.

## Features

- **AI-Powered Analysis**: Get simplified problem explanations, optimal approaches, and step-by-step solutions
- **Intelligent Debugging**: Debug your code with AI assistance and identify potential issues
- **Complexity Analysis**: Understand time and space complexity with detailed breakdowns
- **Follow-up Questions**: Ask clarifying questions for deeper insights
- **Video Recommendations**: Get curated YouTube content related to the problem
- **Dark Theme**: Beautiful, modern interface that matches LeetCode's design

## Technology Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Build Tool**: Vite + crxJS for Chrome extension bundling
- **AI**: Google Gemini 1.5 Pro API
- **Extension API**: Chrome Extensions Manifest V3

## Installation

1. Clone this repository
2. Install dependencies: `npm install`
3. Build the extension: `npm run build`
4. Open Chrome and go to `chrome://extensions/`
5. Enable "Developer mode"
6. Click "Load unpacked" and select the `dist` folder

## Setup

1. Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click the LeetAssist extension icon in Chrome
3. Enter your API key and save
4. Visit any LeetCode problem page to start using LeetAssist!

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## How It Works

1. **Content Script**: Injected into LeetCode problem pages to extract problem data
2. **Background Script**: Handles secure API communication with Gemini
3. **Popup Interface**: Settings page for API key configuration
4. **Floating UI**: Interactive panel for AI assistance while solving problems

## Privacy & Security

- API keys are stored securely using Chrome's storage API
- All AI processing happens through secure HTTPS requests to Google's servers
- No user code or personal data is stored or transmitted beyond what's necessary for AI analysis

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

MIT License - see LICENSE file for details.