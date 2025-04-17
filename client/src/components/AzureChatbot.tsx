import { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaComments, FaUser, FaTimes } from "react-icons/fa";
import { sendMessage } from "../services/chatService";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface Message {
    role: "user" | "assistant";
    content: string;
}

// Function to convert plain text URLs (starting with /) in assistant messages to Markdown links
const formatAssistantMessage = (content: string): string => {
    // Regex to find relative paths starting with / (assuming simple paths)
    // It looks for a / followed by alphanumeric chars and hyphens, not preceded by ]( or href=", ensuring it's not already a link.
    const urlRegex = /(?<!\]\(|href=")(\s|^)(\/[a-zA-Z0-9-]+(?:\/[a-zA-Z0-9-]+)*)/g;
    return content.replace(urlRegex, (match, prefix, url) => `${prefix}[View Page](${url})`);
};

const AzureChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{ 
                role: "assistant", 
                content: "Welcome to Harihara Estates! How may I help you?" 
            }]);
        }
    }, [isOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await sendMessage(input);
            const assistantMessage: Message = {
                role: "assistant",
                content: response, // Raw response
            };
            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            console.error("Error:", error);
            const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: `Error: ${errorMessage}. Please check the console for more details.`,
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Button */}
            <button
                ref={chatButtonRef}
                onClick={() => setIsOpen((prev) => !prev)}
                className="fixed bottom-4 right-4 bg-[#0066B3] text-white p-4 rounded-full shadow-lg hover:bg-[#42C6FF] transition-colors z-50 group"
            >
                <FaComments className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div 
                    className="fixed bottom-16 right-0 w-full sm:w-96 h-[calc(100vh-4rem)] bg-white rounded-t-lg sm:rounded-lg shadow-xl flex flex-col z-50"
                    style={{
                        animation: 'emerge 0.3s ease-out forwards',
                        transformOrigin: 'bottom right'
                    }}
                >
                    {/* Header */}
                    <div className="bg-[#0066B3] text-white p-3 rounded-t-lg flex justify-between items-center">
                        <div className="flex items-center">
                            <FaComments className="w-4 h-4 mr-2" />
                            <h3 className="font-semibold text-sm">Harihara Estates</h3>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="hover:text-gray-300 transition-transform duration-200 hover:scale-110"
                        >
                            <FaTimes className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-3 space-y-3">
                        {messages.map((message, index) => {
                            const contentToRender = message.role === 'assistant' 
                                ? formatAssistantMessage(message.content)
                                : message.content;

                            return (
                                <div
                                    key={index}
                                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-lg p-2 text-sm ${message.role === "user"
                                                ? "bg-[#42C6FF] text-white"
                                                : "bg-[#F3F4F6] text-gray-800"
                                            }`}
                                    >
                                        <div className="flex items-start space-x-2">
                                            {message.role === "user" ? (
                                                <FaUser className="w-4 h-4 mt-1 flex-shrink-0" />
                                            ) : (
                                                <FaComments className="w-4 h-4 mt-1 flex-shrink-0" />
                                            )}
                                            <div className="whitespace-pre-wrap break-words">
                                                <div className="prose prose-sm max-w-none prose-a:text-blue-600 prose-a:underline">
                                                    {/* Configure ReactMarkdown to open links in new tabs */}
                                                    <ReactMarkdown 
                                                        rehypePlugins={[rehypeRaw]}
                                                        components={{
                                                            a: ({node, ...props}) => 
                                                                <a {...props} target="_blank" rel="noopener noreferrer" />
                                                        }}
                                                    >
                                                        {contentToRender}
                                                    </ReactMarkdown>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-[#555555] text-white rounded-lg p-2">
                                    <div className="flex items-center">
                                        <FaComments className="w-4 h-4 mr-2" />
                                        <span className="animate-pulse text-sm">Thinking...</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Form */}
                    <form onSubmit={handleSubmit} className="p-2 border-t">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 p-2 text-sm border rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#42C6FF]"
                                disabled={isLoading}
                            />

                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="bg-[#0066B3] text-white p-2 rounded-lg hover:bg-[#0066B3] disabled:opacity-90 disabled:cursor-not-allowed"
                            >
                                <FaPaperPlane className="w-4 h-4" />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default AzureChatbot;
