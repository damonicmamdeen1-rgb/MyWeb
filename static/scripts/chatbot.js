// AI Chatbot functionality
class AIChatbot {
  constructor() {
    this.isOpen = false;
    this.conversationHistory = [];
    this.init();
  }

  init() {
    this.createChatbotUI();
    this.attachEventListeners();
    this.loadConversationHistory();
    this.sendWelcomeMessage();
  }

  createChatbotUI() {
    // Create chatbot button
    const button = document.createElement('button');
    button.className = 'chatbot-button';
    button.innerHTML = '<i class="fa-solid fa-robot"></i>';
    button.setAttribute('aria-label', 'Open AI Assistant');
    document.body.appendChild(button);

    // Create chatbot window
    const chatWindow = document.createElement('div');
    chatWindow.className = 'chatbot-window';
    chatWindow.innerHTML = `
      <div class="chatbot-header">
        <h3>AI Assistant</h3>
        <button class="chatbot-close" aria-label="Close chat">
          <i class="fa-solid fa-times"></i>
        </button>
      </div>
      <div class="chatbot-messages" id="chatbot-messages">
      </div>
      <div class="typing-indicator" id="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
      <div class="chatbot-input-area">
        <input 
          type="text" 
          class="chatbot-input" 
          id="chatbot-input" 
          placeholder="Ask me to customize your site..."
          autocomplete="off"
        />
        <button class="chatbot-send" id="chatbot-send">Send</button>
      </div>
    `;
    document.body.appendChild(chatWindow);

    this.button = button;
    this.window = chatWindow;
    this.messagesContainer = document.getElementById('chatbot-messages');
    this.input = document.getElementById('chatbot-input');
    this.sendButton = document.getElementById('chatbot-send');
    this.typingIndicator = document.getElementById('typing-indicator');
  }

  attachEventListeners() {
    // Toggle chat window
    this.button.addEventListener('click', () => this.toggleChat());
    
    // Close button
    this.window.querySelector('.chatbot-close').addEventListener('click', () => this.toggleChat());

    // Send message on button click
    this.sendButton.addEventListener('click', () => this.handleSendMessage());

    // Send message on Enter key
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.handleSendMessage();
      }
    });
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    this.window.classList.toggle('active', this.isOpen);
    
    if (this.isOpen) {
      this.input.focus();
    }
  }

  handleSendMessage() {
    const message = this.input.value.trim();
    if (!message) return;

    // Add user message
    this.addMessage(message, 'user');
    this.input.value = '';

    // Process message and generate response
    this.processMessage(message);
  }

  addMessage(text, type = 'bot') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;
    this.messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;

    // Save to history
    if (type !== 'system') {
      this.conversationHistory.push({ text, type, timestamp: Date.now() });
      this.saveConversationHistory();
    }
  }

  showTypingIndicator() {
    this.typingIndicator.classList.add('active');
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  hideTypingIndicator() {
    this.typingIndicator.classList.remove('active');
  }

  async processMessage(message) {
    const lowerMessage = message.toLowerCase();
    
    // Show typing indicator
    this.showTypingIndicator();

    // Simulate AI thinking time
    await this.delay(800);

    this.hideTypingIndicator();

    // Parse commands and respond
    let response = '';
    let actionTaken = false;

    // Background change commands
    if (lowerMessage.includes('background') || lowerMessage.includes('wallpaper')) {
      if (lowerMessage.includes('change') || lowerMessage.includes('set')) {
        // Extract URL if provided
        const urlMatch = message.match(/https?:\/\/[^\s]+/);
        if (urlMatch) {
          const imageUrl = urlMatch[0];
          this.setBackground(imageUrl);
          response = `I've changed your background to the image you provided! The background will be saved for your next visit.`;
          actionTaken = true;
        } else {
          response = `To change the background, please provide an image URL. For example: "Change background to https://example.com/image.jpg"`;
        }
      } else if (lowerMessage.includes('remove') || lowerMessage.includes('reset') || lowerMessage.includes('default')) {
        this.resetBackground();
        response = `I've reset your background to the default. Refresh the page to see the change.`;
        actionTaken = true;
      } else {
        response = `I can help you change or reset your background image. Try: "Change background to [URL]" or "Reset background"`;
      }
    }
    // Theme change commands
    else if (lowerMessage.includes('theme') || lowerMessage.includes('color scheme')) {
      const themes = {
        'dark': 'd',
        'light': 'l',
        'blue': 'nb',
        'green': 'fg',
        'red': 'cr',
        'purple': 's',
        'milkshake': 'm',
        'default': 'd'
      };

      let themeSet = false;
      for (const [name, code] of Object.entries(themes)) {
        if (lowerMessage.includes(name)) {
          this.setTheme(code);
          response = `I've changed your theme to ${name}! The page will reload to apply the theme.`;
          actionTaken = true;
          themeSet = true;
          break;
        }
      }

      if (!themeSet) {
        response = `I can change your theme! Available themes: dark, light, blue, green, red, purple, or milkshake. Try: "Change theme to dark"`;
      }
    }
    // Particles commands
    else if (lowerMessage.includes('particle')) {
      if (lowerMessage.includes('enable') || lowerMessage.includes('turn on') || lowerMessage.includes('show')) {
        this.setParticles(true);
        response = `I've enabled particles on your site! Refresh the page to see them.`;
        actionTaken = true;
      } else if (lowerMessage.includes('disable') || lowerMessage.includes('turn off') || lowerMessage.includes('hide')) {
        this.setParticles(false);
        response = `I've disabled particles. Refresh the page to apply the change.`;
        actionTaken = true;
      } else {
        response = `I can enable or disable particles for you. Try: "Enable particles" or "Disable particles"`;
      }
    }
    // Tab cloaking commands
    else if (lowerMessage.includes('tab') && (lowerMessage.includes('disguise') || lowerMessage.includes('cloak') || lowerMessage.includes('rename') || lowerMessage.includes('icon'))) {
      if (lowerMessage.includes('google classroom') || lowerMessage.includes('classroom')) {
        this.setTabCloak('Classroom');
        response = `I've disguised your tab to look like Google Classroom!`;
        actionTaken = true;
      } else if (lowerMessage.includes('google drive') || lowerMessage.includes('drive')) {
        this.setTabCloak('Drive');
        response = `I've disguised your tab to look like Google Drive!`;
        actionTaken = true;
      } else if (lowerMessage.includes('gmail')) {
        this.setTabCloak('Gmail');
        response = `I've disguised your tab to look like Gmail!`;
        actionTaken = true;
      } else if (lowerMessage.includes('khan')) {
        this.setTabCloak('Khan');
        response = `I've disguised your tab to look like Khan Academy!`;
        actionTaken = true;
      } else {
        response = `I can disguise your tab! Try: "Disguise tab as Google Classroom", "Gmail", "Google Drive", or "Khan Academy"`;
      }
    }
    // Help and capabilities
    else if (lowerMessage.includes('help') || lowerMessage.includes('what can you do') || lowerMessage.includes('commands')) {
      response = `I'm your AI assistant! I can help you customize your site. Here's what I can do:

🎨 Background: "Change background to [URL]" or "Reset background"
🌈 Themes: "Change theme to dark/light/blue/green/red/purple/milkshake"
✨ Particles: "Enable particles" or "Disable particles"
🔒 Tab Cloaking: "Disguise tab as Google Classroom/Gmail/Drive"

Just ask me naturally and I'll help you personalize your experience!`;
    }
    // Clear chat history
    else if (lowerMessage.includes('clear chat') || lowerMessage.includes('clear history')) {
      this.clearHistory();
      response = `I've cleared our chat history!`;
    }
    // Greeting
    else if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) {
      response = `Hello! 👋 I'm your AI assistant. I can help you customize your website. Type "help" to see what I can do!`;
    }
    // Default response
    else {
      response = `I'm not sure how to help with that. Type "help" to see what I can do, or try asking me to change your background, theme, particles, or tab disguise!`;
    }

    this.addMessage(response, 'bot');

    // Show success message if action was taken
    if (actionTaken) {
      setTimeout(() => {
        this.addMessage('✓ Changes saved to your browser', 'system');
      }, 500);
    }
  }

  // Customization methods
  setBackground(imageUrl) {
    localStorage.setItem('background', imageUrl);
    if (typeof setBackground === 'function') {
      setBackground(imageUrl);
    }
  }

  resetBackground() {
    localStorage.removeItem('background');
    if (typeof resetBackground === 'function') {
      resetBackground();
    }
  }

  setTheme(themeCode) {
    localStorage.setItem('theme', themeCode);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  setParticles(enabled) {
    localStorage.setItem('particles', enabled ? 'true' : 'false');
  }

  setTabCloak(type) {
    const cloakData = {
      'Classroom': {
        title: 'Classes',
        icon: 'https://ssl.gstatic.com/classroom/favicon.png'
      },
      'Drive': {
        title: 'My Drive - Google Drive',
        icon: 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png'
      },
      'Gmail': {
        title: 'Gmail',
        icon: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico'
      },
      'Khan': {
        title: 'Khan Academy',
        icon: 'https://cdn.kastatic.org/images/favicon.ico'
      }
    };

    if (cloakData[type]) {
      localStorage.setItem('name', cloakData[type].title);
      localStorage.setItem('icon', cloakData[type].icon);
      
      // Update immediately if functions exist
      if (typeof updateTitle === 'function') {
        updateTitle();
      }
      if (typeof updateIcon === 'function') {
        updateIcon();
      }

      // Update DOM elements if they exist
      const titleEl = document.getElementById('dynamic-title');
      const iconEl = document.getElementById('dynamic-favicon');
      if (titleEl) titleEl.textContent = cloakData[type].title;
      if (iconEl) iconEl.href = cloakData[type].icon;
    }
  }

  // Conversation history management
  loadConversationHistory() {
    const saved = localStorage.getItem('chatbot-history');
    if (saved) {
      try {
        this.conversationHistory = JSON.parse(saved);
        // Restore messages (last 10)
        const recentMessages = this.conversationHistory.slice(-10);
        recentMessages.forEach(msg => {
          const messageDiv = document.createElement('div');
          messageDiv.className = `message ${msg.type}`;
          messageDiv.textContent = msg.text;
          this.messagesContainer.appendChild(messageDiv);
        });
      } catch (e) {
        console.error('Failed to load chat history:', e);
      }
    }
  }

  saveConversationHistory() {
    // Keep only last 50 messages
    if (this.conversationHistory.length > 50) {
      this.conversationHistory = this.conversationHistory.slice(-50);
    }
    localStorage.setItem('chatbot-history', JSON.stringify(this.conversationHistory));
  }

  clearHistory() {
    this.conversationHistory = [];
    localStorage.removeItem('chatbot-history');
    this.messagesContainer.innerHTML = '';
    this.sendWelcomeMessage();
  }

  sendWelcomeMessage() {
    if (this.conversationHistory.length === 0) {
      setTimeout(() => {
        this.addMessage(`Hi! I'm your AI assistant. I can help you customize this website. Type "help" to see what I can do!`, 'bot');
      }, 500);
    }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Initialize chatbot when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.aiChatbot = new AIChatbot();
  });
} else {
  window.aiChatbot = new AIChatbot();
}
