# ⚡ Quick Summarizer - Chrome Extension

A blazing-fast Chrome extension that summarizes articles using Google's Gemini AI. Perfect for quickly digesting news articles from BBC, CNN, Medium, and more!

## 🌟 Features

- **Lightning Fast**: Uses Gemini 1.5 Flash for quick summaries (2-3 seconds)
- **Multiple Summary Types**: 
  - 📝 Brief (Quick Read)
  - 📚 Detailed (In-depth)
  - 🎯 Key Points (Bullet format)
- **Smart Extraction**: Optimized for BBC and major news sites
- **Beautiful UI**: Modern gradient design with smooth animations
- **One-Click Copy**: Easy copy-to-clipboard functionality
- **Privacy First**: API key stored locally, never shared

## 🚀 Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top right)
3. Click **Load unpacked**
4. Select the `gemini_summarizer` folder
5. Done! The extension icon will appear in your toolbar

## 📖 Usage

1. Navigate to any article or news page
2. Click the extension icon in your toolbar
3. Select your preferred summary type
4. Click **"Summarize This Page"**
5. Wait 2-3 seconds for your AI-generated summary
6. Click **"Copy Summary"** to copy to clipboard

## ⚙️ Configuration

Your API key is pre-configured and ready to use. To change it:

1. Click the extension icon
2. Expand **Settings** (⚙️)
3. Enter your new Gemini API key
4. Click **Save Key**

## 🎯 Best Results On

- BBC News
- CNN
- Medium articles
- The Guardian
- New York Times
- Any article-style webpage

## 🔧 Technical Details

- **API**: Google Gemini 1.5 Flash
- **Model**: Optimized for speed and quality
- **Max Input**: 15,000 characters
- **Max Output**: 1,024 tokens
- **Temperature**: 0.4 (balanced creativity)

## 📝 Files

- `manifest.json` - Extension configuration
- `popup.html` - Extension popup interface
- `popup.js` - Main logic and API calls
- `content.js` - Page content extraction
- `icon.png` - Extension icon

## 🛡️ Privacy

- Your API key is stored locally using Chrome's storage API
- No data is sent anywhere except to Google's Gemini API
- No tracking or analytics

## 💡 Tips

- For fastest results, use **Brief** summary type
- Works best on pages with clear article content
- The extension automatically extracts the main article text
- You can summarize the same page multiple times with different summary types

## 🐛 Troubleshooting

**"Could not extract enough content"**
- The page might not have enough text content
- Try a different page or article

**API Error**
- Check your API key is valid
- Ensure you have Gemini API access enabled
- Check your internet connection

**No summary generated**
- The content might be too short
- Try refreshing the page and trying again

## 📜 License

Free to use and modify as needed.

---

Made with ⚡ by [Your Name]
Powered by Google Gemini AI

