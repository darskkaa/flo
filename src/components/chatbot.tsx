'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: "Hi! I'm here to help you learn about FloPro Pools' professional pool care services in Port Charlotte. How can I assist you today?"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage })
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
        } catch (error) {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "I apologize, but I'm having trouble responding right now. Please call us at (941) 555-0123 or visit our contact page for immediate assistance."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-signal-orange shadow-2xl shadow-orange-900/50 flex items-center justify-center hover:bg-orange-500 transition-all group"
                    >
                        <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-navy-950 rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-signal-orange to-orange-600 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <MessageCircle className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">FloPro Pools Assistant</h3>
                                    <p className="text-xs text-white/80">Online now</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${message.role === 'user'
                                            ? 'bg-signal-orange text-white'
                                            : 'bg-white/10 text-white border border-white/10'
                                            }`}
                                    >
                                        <div
                                            className="text-sm whitespace-pre-wrap [&>a]:underline [&>a]:font-bold [&>ul]:list-disc [&>ul]:pl-4 [&>ol]:list-decimal [&>ol]:pl-4 [&>strong]:font-bold"
                                            dangerouslySetInnerHTML={{ __html: message.content }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 rounded-2xl px-4 py-2 border border-white/10">
                                        <Loader2 className="w-5 h-5 text-signal-orange animate-spin" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about our services..."
                                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-signal-orange"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="w-10 h-10 rounded-lg bg-signal-orange hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                                >
                                    <Send className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
