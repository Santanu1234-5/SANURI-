import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Minimize2, Maximize2, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      parts: [{ text: 'Hi there! I am the SANURI AI Assistant. How can I help you today?' }]
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', parts: [{ text: input.trim() }] };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.parts[0].text,
          history: messages.map(m => ({
             role: m.role,
             parts: m.parts
          }))
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { role: 'model', parts: [{ text: data.text }] }]);
      } else {
        setMessages(prev => [...prev, { role: 'model', parts: [{ text: data.error || 'Sorry, something went wrong.' }] }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: 'Network error. Please try again later.' }] }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-transform hover:scale-110 active:scale-95"
      >
        <Bot className="w-7 h-7 text-white" />
      </button>
    );
  }

  return (
    <div className={`fixed z-50 right-6 transition-all duration-300 ease-in-out ${isMinimized ? 'bottom-6' : 'bottom-6 w-80 sm:w-96'}`}>
      <div className={`bg-[#0D111A]/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden transition-all duration-300 ${isMinimized ? 'h-16 w-64' : 'h-[500px] max-h-[80vh]'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-slate-900/50 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
              <Bot className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="font-semibold text-white">SANURI AI</div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsMinimized(false);
              }}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chat Area */}
        {!isMinimized && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-br-sm' 
                      : 'bg-slate-800 text-slate-200 rounded-bl-sm border border-slate-700'
                  }`}>
                    {msg.parts[0].text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm bg-slate-800 text-slate-200 rounded-bl-sm border border-slate-700 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                    Thinking...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-800 bg-[#0D111A]">
              <form onSubmit={handleSend} className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-[#151A23] border border-slate-700 rounded-full pl-4 pr-12 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 disabled:text-slate-500 text-white rounded-full transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
