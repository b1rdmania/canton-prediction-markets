/**
 * AI Chat Widget - Floating assistant for Canton Prediction Markets
 * Provides conversational interface for market analysis and questions
 */

class ChatWidget {
    constructor(apiBase) {
        this.apiBase = apiBase;
        this.isOpen = false;
        this.messages = [];
        this.init();
    }

    init() {
        this.createWidget();
        this.loadHistory();
        this.attachEventListeners();
    }

    createWidget() {
        const widgetHTML = `
            <!-- Chat Widget Button -->
            <div id="chatWidgetButton" class="chat-widget-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Ask AI</span>
            </div>

            <!-- Chat Widget Panel -->
            <div id="chatWidgetPanel" class="chat-widget-panel">
                <div class="chat-widget-header">
                    <div class="chat-header-content">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                            <line x1="9" y1="9" x2="9.01" y2="9"/>
                            <line x1="15" y1="9" x2="15.01" y2="9"/>
                        </svg>
                        <div>
                            <h3>AI Assistant</h3>
                            <span class="chat-status">Online</span>
                        </div>
                    </div>
                    <button id="chatWidgetClose" class="chat-close-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div class="chat-widget-body" id="chatMessages">
                    <div class="chat-welcome">
                        <div class="welcome-icon">✨</div>
                        <h4>Ask me anything about prediction markets</h4>
                        <div class="suggested-questions">
                            <button class="suggested-q" data-question="What are the best markets right now?">
                                What are the best markets?
                            </button>
                            <button class="suggested-q" data-question="How does quality scoring work?">
                                How does quality scoring work?
                            </button>
                            <button class="suggested-q" data-question="Show me high volume markets">
                                Show high volume markets
                            </button>
                            <button class="suggested-q" data-question="Explain prediction market basics">
                                Explain prediction markets
                            </button>
                        </div>
                    </div>
                </div>

                <div class="chat-widget-footer">
                    <form id="chatForm" class="chat-input-form">
                        <input
                            type="text"
                            id="chatInput"
                            class="chat-input"
                            placeholder="Ask about markets, quality scores, strategies..."
                            autocomplete="off"
                        />
                        <button type="submit" class="chat-send-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </form>
                    <div class="chat-disclaimer">
                        AI-generated responses may be experimental
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', widgetHTML);
    }

    attachEventListeners() {
        const button = document.getElementById('chatWidgetButton');
        const closeBtn = document.getElementById('chatWidgetClose');
        const form = document.getElementById('chatForm');
        const suggestedQuestions = document.querySelectorAll('.suggested-q');

        button.addEventListener('click', () => this.toggleWidget());
        closeBtn.addEventListener('click', () => this.toggleWidget());
        form.addEventListener('submit', (e) => this.handleSubmit(e));

        suggestedQuestions.forEach(btn => {
            btn.addEventListener('click', () => {
                const question = btn.getAttribute('data-question');
                this.sendMessage(question);
            });
        });
    }

    toggleWidget() {
        this.isOpen = !this.isOpen;
        const panel = document.getElementById('chatWidgetPanel');
        const button = document.getElementById('chatWidgetButton');

        if (this.isOpen) {
            panel.classList.add('active');
            button.classList.add('hidden');
            document.getElementById('chatInput').focus();
        } else {
            panel.classList.remove('active');
            button.classList.remove('hidden');
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const input = document.getElementById('chatInput');
        const message = input.value.trim();

        if (message) {
            this.sendMessage(message);
            input.value = '';
        }
    }

    async sendMessage(message) {
        // Add user message to UI
        this.addMessage('user', message);

        // Remove welcome screen if present
        const welcome = document.querySelector('.chat-welcome');
        if (welcome) {
            welcome.remove();
        }

        // Show typing indicator
        this.showTypingIndicator();

        try {
            // Call AI endpoint
            const response = await fetch(`${this.apiBase}/api/ai/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                    context: this.getContext()
                })
            });

            const data = await response.json();

            // Remove typing indicator
            this.hideTypingIndicator();

            if (data.error) {
                throw new Error(data.error);
            }

            // Add AI response
            this.addMessage('assistant', data.response, data.markets);

        } catch (error) {
            console.error('Chat error:', error);
            this.hideTypingIndicator();
            this.addMessage('assistant',
                "I'm having trouble connecting right now. Please try again or browse the markets directly.",
                null,
                true
            );
        }

        // Save to history
        this.saveHistory();
    }

    addMessage(role, content, markets = null, isError = false) {
        const messagesContainer = document.getElementById('chatMessages');
        const messageEl = document.createElement('div');
        messageEl.className = `chat-message ${role}${isError ? ' error' : ''}`;

        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        let marketsHTML = '';
        if (markets && markets.length > 0) {
            marketsHTML = `
                <div class="chat-markets">
                    ${markets.slice(0, 3).map(m => `
                        <div class="chat-market-card" onclick="window.location.href='index.html#market-${m.market_id}'">
                            <div class="chat-market-title">${m.question}</div>
                            <div class="chat-market-stats">
                                <span>${(parseFloat(m.price || 0.5) * 100).toFixed(0)}%</span>
                                <span>Quality: ${m.quality?.total_score?.toFixed(0) || 'N/A'}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        messageEl.innerHTML = `
            <div class="message-content">
                <div class="message-text">${this.formatMessage(content)}</div>
                ${marketsHTML}
            </div>
            <div class="message-time">${timestamp}</div>
        `;

        messagesContainer.appendChild(messageEl);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Store in messages array
        this.messages.push({ role, content, markets, timestamp });
    }

    formatMessage(content) {
        // Simple markdown-like formatting
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>');
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatMessages');
        const indicator = document.createElement('div');
        indicator.className = 'chat-message assistant typing';
        indicator.id = 'typingIndicator';
        indicator.innerHTML = `
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesContainer.appendChild(indicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    hideTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.remove();
        }
    }

    getContext() {
        // Provide context about current page
        return {
            page: window.location.pathname,
            timestamp: new Date().toISOString(),
            hasMarkets: typeof currentMarkets !== 'undefined' ? currentMarkets.length : 0
        };
    }

    loadHistory() {
        try {
            const saved = localStorage.getItem('am_chat_history');
            if (saved) {
                this.messages = JSON.parse(saved);
                // Optionally restore messages to UI
            }
        } catch (e) {
            console.error('Failed to load chat history:', e);
        }
    }

    saveHistory() {
        try {
            // Keep last 20 messages
            const recent = this.messages.slice(-20);
            localStorage.setItem('am_chat_history', JSON.stringify(recent));
        } catch (e) {
            console.error('Failed to save chat history:', e);
        }
    }
}

// Initialize chat widget when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatWidget);
} else {
    initChatWidget();
}

function initChatWidget() {
    // Use global API_BASE if available, otherwise use default
    const apiBase = typeof API_BASE !== 'undefined'
        ? API_BASE
        : 'https://postposted-spent-knife-given.trycloudflare.com';

    window.chatWidget = new ChatWidget(apiBase);
}
