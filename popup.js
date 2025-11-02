const API_KEY = '****YOUR_API_KEY_HERE****';
let selectedType = 'brief';

// Type selection
document.querySelectorAll('.type-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedType = btn.dataset.type;
  });
});

// Extract content from page
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, {action: "extract"}, (response) => {
    if (response && response.content) {
      document.getElementById('content').value = response.content.substring(0, 15000);
    }
  });
});

// Summarize button
document.getElementById('summarize').addEventListener('click', async () => {
  const content = document.getElementById('content').value;
  
  if (!content.trim()) {
    alert('No content to summarize!');
    return;
  }
  
  // Show loading
  document.getElementById('loading').classList.remove('hidden');
  document.getElementById('result').classList.add('hidden');
  document.getElementById('summarize').disabled = true;
  
  try {
    const summary = await summarize(content, selectedType);
    
    // Show result
    document.getElementById('summary').textContent = summary;
    document.getElementById('result').classList.remove('hidden');
  } catch (error) {
    alert('Error: ' + error.message);
  } finally {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('summarize').disabled = false;
  }
});

// Copy button
document.getElementById('copy').addEventListener('click', () => {
  const summary = document.getElementById('summary').textContent;
  navigator.clipboard.writeText(summary);
  
  const btn = document.getElementById('copy');
  btn.textContent = '✅ Copied!';
  setTimeout(() => {
    btn.textContent = '📋 Copy Summary';
  }, 2000);
});

// Summarize function
async function summarize(content, type) {
  const prompts = {
    brief: "Summarize this article in 2-3 concise sentences, capturing only the most essential points:",
    detailed: "Provide a comprehensive summary of this article, covering all major points, arguments, and conclusions in 2-3 paragraphs:",
    "key-points": "Extract the key points from this article as a bullet-point list (use • bullets). Focus on main facts, arguments, and takeaways:"
  };
  
  const response = await fetch(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + API_KEY,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompts[type] + '\n\n' + content.substring(0, 15000)
          }]
        }],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 1024
        }
      })
    }
  );
  
  if (!response.ok) {
    throw new Error('Failed to generate summary');
  }
  
  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}
