import React, { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';
// import ReactMarkdown from 'react-markdown';
import { startChat } from '../services/geminiService';
import { ALL_MENU_ITEMS } from '../data/menuData';
import MenuCard from './MenuCard';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I am the Aster Cafe Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState(null);
  
  const messagesEndRef = useRef(null);
  const chatbotRef = useRef(null);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        if (!event.target.closest('.chatbot-toggle')) {
          setIsOpen(false);
        }
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Initialize Gemini chat session when the component mounts
  useEffect(() => {
    const initChat = async () => {
      try {
        const session = await startChat();
        setChatSession(session);
      } catch (err) {
        console.error("Failed to initialize chat:", err);
      }
    };
    initChat();
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    
    if (!chatSession) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, the AI service is currently unavailable. Please ensure your API key is set.' }]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await chatSession.sendMessage({ message: userText });
      let text = response.text;
      setMessages(prev => [...prev, { role: 'bot', text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, I encountered an error while thinking. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to parse out [MENU_CARDS:id1,id2] from text
  const renderMessageContent = (text) => {
    const cardRegex = /\[MENU_CARDS:(.*?)\]/;
    const match = text.match(cardRegex);
    
    if (!match) {
      return <div className="markdown-body">{text}</div>;
    }

    const cleanText = text.replace(cardRegex, '').trim();
    const ids = match[1].split(',').map(id => id.trim());
    const matchedItems = ALL_MENU_ITEMS.filter(item => ids.includes(item.id));

    return (
      <div className="message-with-cards">
        <div className="markdown-body">{cleanText}</div>
        {matchedItems.length > 0 && (
          <div className="chat-cards-container">
            {matchedItems.map(item => (
              <div key={item.id} className="chat-card-wrapper">
                <MenuCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <button 
        className="chatbot-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chat Assistant"
      >
        <span className="chatbot-tooltip">Ask Aster Concierge ✨</span>
        <img src="/assets/images/chatbot-icon.png" alt="AI Assistant" className="chatbot-icon-image" />
      </button>

      {isOpen && (
        <div className="chatbot-window" ref={chatbotRef}>
          <div className="chatbot-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h3>Aster Concierge</h3>
              <span className="status-dot"></span>
            </div>
            <button onClick={() => setIsOpen(false)} aria-label="Close Chat">
              <X size={20} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble-wrapper ${msg.role === 'user' ? 'user' : 'bot'}`}>
                <div className="chat-bubble">
                  {renderMessageContent(msg.text)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-bubble-wrapper bot">
                <div className="chat-bubble typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Ask about our menu, hours, or cafe..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button type="submit" disabled={!input.trim() || isLoading}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
