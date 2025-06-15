# LeetAssist: AI-Powered Chrome Extension for LeetCode

<div align="center">
  <img src="/screenshots/logo.png" alt="LeetAssist Logo" width="300" height="200">
  <h3>AI-Powered Chrome Extension for LeetCode Problem Solving</h3>
  <p>Enhance your coding practice with intelligent assistance, debugging, and optimization suggestions</p>
</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Configuration](#api-configuration)
- [Preview](#preview)
- [Future Roadmap](#future-roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## 🎯 Overview

LeetAssist is an intelligent Chrome extension designed to revolutionize your LeetCode problem-solving experience. Powered by advanced AI models including OpenAI GPT and Google Gemini, it provides comprehensive assistance for coding interviews and competitive programming preparation.

### Key Capabilities
- **Problem Analysis**: Deep understanding of problem statements and requirements
- **Edge Case Identification**: Automatic detection of potential edge cases
- **Code Debugging**: Real-time error detection and resolution suggestions  
- **Solution Optimization**: Performance and complexity analysis
- **Community Insights**: Access to top-rated community solutions
- **Test Case Explanation**: Detailed breakdown of test scenarios

---

## ✨ Features

### 🤖 AI-Powered Assistance
- **Multi-Model Support**: Choose between OpenAI GPT and Google Gemini
- **Contextual Understanding**: Smart analysis of LeetCode problems
- **Real-time Guidance**: Instant help while coding

### 🔧 Problem Solving Tools
- **Problem Statement Explanation**: Clear breakdown of requirements
- **Edge Case Detection**: Identify corner cases automatically
- **Code Debugging**: Step-by-step error resolution
- **Complexity Analysis**: Time and space complexity evaluation
- **Solution Generation**: Complete, optimized code solutions

### 📚 Learning Enhancement
- **Test Case Explanation**: Understand why tests pass or fail
- **Video Solutions**: Explore top-rated youtube video approaches
- **Interactive Q&A**: Ask specific questions about problems

---

---

## 🖼️ Preview

<details>
<summary><strong>📸 Click to view the extension</strong></summary>

<table>
  <tr>
    <td align="center" style="padding: 20px;">
      <img src="/screenshots/Preview2.jpg" alt="Main Interface" width="400" style="border: 2px solid #ddd; border-radius: 8px; margin: 10px;">
      <br>
      <strong>Main Interface</strong>
    </td>
    <td align="center" style="padding: 20px;">
      <img src="/screenshots/Preview3.jpg" alt="API Configuration" width="400" style="border: 2px solid #ddd; border-radius: 8px; margin: 10px;">
      <br>
      <strong>API Configuration</strong>
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 20px;">
      <img src="/screenshots/Preview1.jpg" alt="Problem Explanation" width="400" style="border: 2px solid #ddd; border-radius: 8px; margin: 10px;">
      <br>
      <strong>Problem Explanation</strong>
    </td>
    <td align="center" style="padding: 20px;">
      <img src="/screenshots/Preview4.jpg" alt="Code Debugging" width="400" style="border: 2px solid #ddd; border-radius: 8px; margin: 10px;">
      <br>
      <strong>Code Debugging</strong>
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 20px;">
      <img src="/screenshots/Preview5.jpg" alt="Solution Analysis" width="400" style="border: 2px solid #ddd; border-radius: 8px; margin: 10px;">
      <br>
      <strong>Solution Analysis</strong>
    </td>
    <td align="center" style="padding: 20px;">
      <img src="/screenshots/Preview6.jpg" alt="Complexity Insights" width="400" style="border: 2px solid #ddd; border-radius: 8px; margin: 10px;">
      <br>
      <strong>Complexity Insights</strong>
    </td>
  </tr>
 
</table>

</details>

---

## 🚀 Installation

### Prerequisites
- Google Chrome browser (version 88+)
- API key for OpenAI GPT or Google Gemini

### Steps
1. **Download Extension**
   ```bash
   git clone https://github.com/Anish-Tripathi/LeetAssist.git
   cd leetassist
   ```

2. **Build the Extension**
   ```bash
   npm install
   npm run build
   ```

3. **Load in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (top-right toggle)
   - Click "Load unpacked" and select the `dist` folder
   - Pin the extension to your toolbar for easy access

4. **Configure API**
   - Click the LeetAssist icon in your browser toolbar
   - Select your preferred AI model (OpenAI GPT or Google Gemini)
   - Enter your API key and save

---

## 📖 Usage

### Getting Started
1. **Navigate to LeetCode**: Open any LeetCode problem page
2. **Activate Extension**: Click the LeetAssist icon in your toolbar
3. **Select Model**: Choose between OpenAI GPT or Google Gemini
4. **Start Solving**: Use the various assistance features as needed

### Core Functions

#### 📝 Problem Analysis
- Click **"Explain Problem"** to get a detailed breakdown of the problem statement
- Understand requirements, constraints, and expected outputs

#### 💡 Solution Guidance  
- Use **"Best Approach"** to discover optimal solution strategies
- Get step-by-step algorithmic guidance

#### 🐛 Code Debugging
- Paste your code and click **"Debug Code"** for error analysis
- Receive specific suggestions for fixing issues

#### ⚡ Complexity Analysis
- Click **"Complexity"** to understand time and space complexity
- Learn about optimization opportunities

#### 🎥 Learning Resources (Not Live)
- Access **"Video Tutorials"** for visual explanations
- Get curated learning content for similar problems

#### 🏃‍♂️ Quick Solutions
- Use **"Dry Run"** to trace through your algorithm
- Validate logic before submitting

### Tips for Best Results
- Be specific when asking questions
- Provide context about your current approach
- Use the debugging feature iteratively
- Explore multiple solution approaches

---

## 📁 Project Structure

```
LeetAssist/
├── 📂 dist/                    # Built extension files
├── 📂 node_modules/            # Dependencies
├── 📂 public/                  # Public assets
├── 📂 src/                     # Source code
│   ├── 📂 assets/              # Static assets (images, icons)
│   ├── 📂 components/          # React components
│   ├── 📂 constants/           # App constants and configurations
│   ├── 📂 content/             # Content scripts for web pages
│   ├── 📂 hooks/               # Custom React hooks
│   ├── 📂 interface/           # TypeScript interfaces
│   ├── 📂 lib/                 # Utility libraries
│   ├── 📂 modals/              # Modal components
│   ├── 📂 providers/           # React context providers
│   ├── 📂 schema/              # Data validation schemas
│   ├── 📂 services/            # API and external services
│   ├── 📄 App.tsx              # Main React component
│   ├── 📄 background.js        # Chrome extension background script
│   ├── 📄 content.tsx          # Content script entry point
│   ├── 📄 index.css            # Global styles
│   ├── 📄 main.tsx             # React app entry point
│   └── 📄 vite-env.d.ts        # Vite environment types
├── 📄 .gitignore               # Git ignore rules
├── 📄 manifest.json            # Chrome extension manifest
├── 📄 package.json             # Node.js dependencies
├── 📄 README.md                # Project documentation
└── 📄 vite.config.ts           # Vite build configuration
```

### Key Directories Explained

- **`src/components/`**: Reusable UI components
- **`src/content/`**: Scripts injected into LeetCode pages
- **`src/services/`**: API integration and external service handlers
- **`src/providers/`**: State management and context providers
- **`src/interface/`**: TypeScript type definitions
- **`dist/`**: Production-ready extension files

---

## 🔑 API Configuration

### Supported Models

#### OpenAI GPT
1. Visit [OpenAI API Platform](https://platform.openai.com/api-keys)
2. Create a new API key
3. Copy the key to LeetAssist settings
4. Select GPT model variant

#### Google Gemini
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Generate a new API key
3. Paste key in LeetAssist configuration
4. Choose Gemini model version

### Security Notes
- API keys are stored locally in Chrome storage
- Keys are encrypted and never shared externally
- You can update or remove keys anytime through settings

---

## 🔮 Future Roadmap

<div align="center">
  <img src="/screenshots/future-work.png" alt="Future Development Plans" width="500" style="border: 2px solid #ddd; border-radius: 8px; margin: 20px;">
</div>

### Planned Enhancements (Version 2.0)

#### 🎯 Specialized Sections
- **Dedicated Debugging Panel**: Separate interface for code analysis
- **Complexity Calculator**: Standalone tool for performance metrics
- **Solution Comparator**: Side-by-side approach analysis
- **Test Case Generator**: Custom test case creation


#### 📹 Video Integration
- **YouTube Tutorial Generation**: AI-powered video explanations
- **Interactive Walkthroughs**: Step-by-step visual guides
- **Community Video Curation**: Best educational content compilation

#### 🧠 Advanced AI Features
- **Pattern Recognition**: Identify problem-solving patterns
- **Personalized Learning**: Adaptive difficulty recommendations  
- **Progress Tracking**: Comprehensive skill development analytics
- **Interview Simulation**: Mock coding interview practice

#### 🔧 Technical Improvements
- **Offline Mode**: Core functionality available even without an internet connection
- **IDE Integration**: Seamless support with VS Code and IntelliJ plugins
- **Mobile Companion**: React Native-powered mobile app for on-the-go access
- **Universal Code Explainer**: Explain code on any platform or web page—not limited to LeetCode



---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm test`)
5. Commit changes (`git commit -m 'Add amazing feature'`)
6. Push to branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Contribution Guidelines
- Follow existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new functionality
- Update documentation as needed
- Ensure all CI checks pass

### Areas for Contribution
- 🐛 Bug fixes and improvements
- ✨ New feature development
- 📚 Documentation enhancements
- 🎨 UI/UX improvements
- 🔍 Testing and quality assurance

---

### FAQ
**Q: Which AI model should I choose?**
A: Both OpenAI GPT and Google Gemini offer excellent performance. GPT tends to be better for code generation, while Gemini excels at problem explanation.

**Q: Is my API key secure?**
A: Yes, all API keys are stored locally in your browser and encrypted. We never have access to your keys.

**Q: Can I use LeetAssist offline?**
A: Currently, an internet connection is required for AI features. Offline mode is planned for future releases.

**Q: Does LeetAssist work on other coding platforms?**
A: Currently optimized for LeetCode. Support for HackerRank, CodeSignal, and others is in development.

---

<div align="center">
  <h3>⭐ Star this repository if LeetAssist helped you!</h3>
</div>
