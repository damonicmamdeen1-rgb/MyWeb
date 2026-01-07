// User-to-user Chat functionality
class UserChat {
  constructor() {
    this.isOpen = false;
    this.username = null;
    this.socket = null;
    this.messageHistory = [];
    this.init();
  }

  init() {
    this.createChatUI();
    this.attachEventListeners();
    this.promptForUsername();
  }

  promptForUsername() {
    // Check if username is already stored
    const savedUsername = localStorage.getItem('chat-username');
    if (savedUsername) {
      this.username = savedUsername;
      this.connectToChat();
    } else {
      // Show username prompt
      this.showUsernamePrompt();
    }
  }

  showUsernamePrompt() {
    const overlay = document.createElement('div');
    overlay.className = 'username-overlay';
    overlay.innerHTML = `
      <div class="username-modal">
        <h2>Welcome to Chat!</h2>
        <p>Enter your name to start chatting with others</p>
        <input 
          type="text" 
          id="username-input" 
          class="username-input" 
          placeholder="Your name..."
          maxlength="20"
          autocomplete="off"
        />
        <button id="username-submit" class="username-submit">Join Chat</button>
      </div>
    `;
    document.body.appendChild(overlay);

    const input = document.getElementById('username-input');
    const submitBtn = document.getElementById('username-submit');

    const handleSubmit = () => {
      const username = input.value.trim();
      if (username && username.length >= 2) {
        this.username = username;
        localStorage.setItem('chat-username', username);
        overlay.remove();
        this.connectToChat();
      } else {
        input.style.borderColor = '#ff4444';
        input.placeholder = 'Name must be at least 2 characters';
      }
    };

    submitBtn.addEventListener('click', handleSubmit);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    });

    // Focus the input
    setTimeout(() => input.focus(), 100);
  }

  connectToChat() {
    // Connect to Socket.io server
    this.socket = io();

    // Join the chat with username
    this.socket.emit('join', this.username);

    // Listen for messages
    this.socket.on('chat-message', (data) => {
      this.addMessage(data.message, data.username === this.username ? 'user' : 'other', data.username);
    });

    // Listen for user join notifications
    this.socket.on('user-joined', (data) => {
      this.addSystemMessage(`${data.username} joined the chat`);
      this.updateUserCount(data.userCount);
    });

    // Listen for user leave notifications
    this.socket.on('user-left', (data) => {
      this.addSystemMessage(`${data.username} left the chat`);
      this.updateUserCount(data.userCount);
    });

    // Listen for user count updates
    this.socket.on('user-count', (count) => {
      this.updateUserCount(count);
    });

    // Listen for typing indicators
    this.socket.on('user-typing', (data) => {
      this.showTypingIndicator(data.username, data.isTyping);
    });

    // Show welcome message
    this.addSystemMessage(`Welcome ${this.username}! You're now connected to the chat.`);
  }

  createChatUI() {
    // Create chat button
    const button = document.createElement('button');
    button.className = 'chat-button';
    button.innerHTML = '<i class="fa-solid fa-comments"></i>';
    button.setAttribute('aria-label', 'Open Chat');
    document.body.appendChild(button);

    // Create chat window
    const chatWindow = document.createElement('div');
    chatWindow.className = 'chat-window';
    chatWindow.innerHTML = `
      <div class="chat-header">
        <h3>Chat <span class="user-count-badge" id="user-count">0</span></h3>
        <div class="chat-header-actions">
          <button class="chat-settings" id="chat-settings" aria-label="Chat settings" title="Change username">
            <i class="fa-solid fa-user-gear"></i>
          </button>
          <button class="chat-close" aria-label="Close chat">
            <i class="fa-solid fa-times"></i>
          </button>
        </div>
      </div>
      <div class="chat-messages" id="chat-messages">
      </div>
      <div class="typing-indicator" id="typing-indicator">
        <span class="typing-username"></span> is typing...
      </div>
      <div class="chat-input-area">
        <input 
          type="text" 
          class="chat-input" 
          id="chat-input" 
          placeholder="Type a message..."
          autocomplete="off"
          maxlength="500"
        />
        <button class="chat-send" id="chat-send">Send</button>
      </div>
    `;
    document.body.appendChild(chatWindow);

    this.button = button;
    this.window = chatWindow;
    this.messagesContainer = document.getElementById('chat-messages');
    this.input = document.getElementById('chat-input');
    this.sendButton = document.getElementById('chat-send');
    this.typingIndicator = document.getElementById('typing-indicator');
    this.userCountBadge = document.getElementById('user-count');
  }

  attachEventListeners() {
    // Toggle chat window
    this.button.addEventListener('click', () => this.toggleChat());
    
    // Close button
    this.window.querySelector('.chat-close').addEventListener('click', () => this.toggleChat());

    // Settings button (change username)
    document.getElementById('chat-settings').addEventListener('click', () => {
      this.changeUsername();
    });

    // Send message on button click
    this.sendButton.addEventListener('click', () => this.handleSendMessage());

    // Send message on Enter key
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.handleSendMessage();
      }
    });

    // Typing indicator
    let typingTimeout;
    this.input.addEventListener('input', () => {
      if (this.socket) {
        this.socket.emit('typing', true);
        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(() => {
          this.socket.emit('typing', false);
        }, 1000);
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
    if (!message || !this.socket) return;

    // Send message to server
    this.socket.emit('chat-message', { message });
    this.input.value = '';
    
    // Stop typing indicator
    this.socket.emit('typing', false);
  }

  addMessage(text, type = 'other', username = '') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    
    if (type === 'other' && username) {
      const usernameSpan = document.createElement('div');
      usernameSpan.className = 'message-username';
      usernameSpan.textContent = username;
      messageDiv.appendChild(usernameSpan);
    }
    
    const textSpan = document.createElement('div');
    textSpan.className = 'message-text';
    textSpan.textContent = text;
    messageDiv.appendChild(textSpan);
    
    this.messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;

    // Save to history
    this.messageHistory.push({ text, type, username, timestamp: Date.now() });
  }

  addSystemMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message system';
    messageDiv.textContent = text;
    this.messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  showTypingIndicator(username, isTyping) {
    if (isTyping) {
      this.typingIndicator.querySelector('.typing-username').textContent = username;
      this.typingIndicator.classList.add('active');
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    } else {
      this.typingIndicator.classList.remove('active');
    }
  }

  updateUserCount(count) {
    this.userCountBadge.textContent = count;
  }

  changeUsername() {
    const newUsername = prompt('Enter your new username:', this.username);
    if (newUsername && newUsername.trim() && newUsername.trim().length >= 2) {
      const oldUsername = this.username;
      this.username = newUsername.trim();
      localStorage.setItem('chat-username', this.username);
      
      // Disconnect and reconnect with new username
      if (this.socket) {
        this.socket.disconnect();
        this.connectToChat();
      }
    }
  }
}

// Initialize chat when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.userChat = new UserChat();
  });
} else {
  window.userChat = new UserChat();
}
