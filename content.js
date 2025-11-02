chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "extract") {
    // Try to find main article content
    let content = '';
    
    // Try common article selectors
    const selectors = [
      'article',
      '[role="main"]',
      '.article-content',
      '.post-content',
      '.entry-content',
      'main'
    ];
    
    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) {
        content = element.innerText;
        break;
      }
    }
    
    // Fallback to body text
    if (!content || content.length < 200) {
      content = document.body.innerText;
    }
    
    // Clean up content
    content = content
      .replace(/\n{3,}/g, '\n\n')  // Remove excessive newlines
      .trim();
    
    sendResponse({ content: content });
  }
  return true;
});
