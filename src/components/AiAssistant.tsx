import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles, HelpCircle, CornerDownLeft } from "lucide-react";
import { ChatMessage } from "../types";

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init-msg",
      sender: "bot",
      text: "Hi! I am Monika's Portfolio AI Assistant. I can answer inquiries from recruiters, team leads, or hiring managers. Ask me about Monika's 11+ years of high-volume native Android experience, secure banking/fintech architectures, rendering performance, or relocation options. What would you like to explore?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement | null>(null);

  // Quick questions pool
  const quickQuestions = [
    { text: "What are her core specialties?", label: "Specialties" },
    { text: "Does she build secure Banking and Fintech apps?", label: "Fintech" },
    { text: "Is she open to relocation?", label: "Relocation" },
    { text: "Describe her engineering leadership.", label: "Leadership" }
  ];

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Map simple message histories
      const mappedHistory = messages.map(m => ({
        sender: m.sender,
        text: m.text
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: mappedHistory }),
      });

      if (res.ok) {
        const data = await res.json();
        const botMsg: ChatMessage = {
          id: `bot_${Date.now()}`,
          sender: "bot",
          text: data.reply,
          timestamp: new Date()
        };
        setMessages((prev) => [...prev, botMsg]);
      } else {
        throw new Error("API returned failure");
      }
    } catch (err) {
      console.error("AI Assistant response failure:", err);
      const errorMsg: ChatMessage = {
        id: `bot_err_${Date.now()}`,
        sender: "bot",
        text: "I am currently running in a self-contained local mode due to connectivity limits. However, I can confirm that Monika Sezwar is a Senior Android Tech Lead with 11+ years of experience in Android Systems (Jetpack Compose, Kotlin, Coroutines) and secure Banking & Fintech applications. Please reach out directly to her via monika9368sezwar@gmail.com!",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  return (
    <div id="ai-assistant" className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Trigger floating Icon button */}
      {!isOpen && (
        <button
          id="ai-trigger"
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full bg-[#00D4FF] hover:bg-[#00D4FF]/80 text-black shadow-[0_4px_25px_rgba(0,212,255,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center relative group"
        >
          <MessageSquare className="w-6 h-6 animate-pulse" />
          <span className="absolute right-full mr-3.5 px-3 py-1.5 rounded-lg bg-[#050816]/90 border border-white/10 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold whitespace-nowrap tracking-wider uppercase backdrop-blur-md">
            Ask Monika's AI Assistant
          </span>
          {/* Notification Pulsator */}
          <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border border-black animate-bounce" />
        </button>
      )}

      {/* Interactive Chat Window */}
      {isOpen && (
        <div
          id="ai-window"
          className="w-80 md:w-96 h-[500px] rounded-2xl bg-[#050816]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black flex flex-col overflow-hidden animate-scale-in"
        >
          {/* Panel Header */}
          <div className="px-5 py-4 bg-white/5 border-b border-white/5 flex items-center justify-between text-left">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#00D4FF]/10 text-[#00D4FF] relative flex items-center justify-center">
                <Bot className="w-4 h-4" />
                <Sparkles className="w-2.5 h-2.5 text-[#00D4FF] absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-xs text-white">Monika's AI Recruiter Copilot</span>
                <span className="font-mono text-[9px] text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  Online | Gemini 3.5 Flash
                </span>
              </div>
            </div>

            <button
              id="ai-close"
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-[#A0AEC0] hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Conversation list viewport */}
          <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 max-w-[85%] text-left ${
                  msg.sender === "user" ? "ml-auto flex-row-reverse" : ""
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-[10px] ${
                    msg.sender === "user"
                      ? "bg-[#00D4FF]/10 text-[#00D4FF]"
                      : "bg-white/5 text-[#A0AEC0] border border-white/10"
                  }`}
                >
                  {msg.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>

                {/* Bubble */}
                <div
                  className={`p-3 rounded-xl font-sans text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#00D4FF] text-black font-semibold rounded-tr-none"
                      : "bg-white/5 text-white rounded-tl-none border border-white/5"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Simulated typing indicator state */}
            {isTyping && (
              <div className="flex gap-2.5 max-w-[80%] text-left">
                <div className="w-7 h-7 rounded-lg bg-white/5 text-[#A0AEC0] border border-white/10 shrink-0 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="p-3.5 rounded-xl rounded-tl-none bg-white/5 text-white/50 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-150" />
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-300" />
                </div>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Suggested Quick Questions Selection area */}
          {messages.length === 1 && !isTyping && (
            <div className="px-4 py-2 bg-black/10 border-t border-white/5 text-left">
              <span className="font-mono text-[8px] text-[#A0AEC0] uppercase tracking-wider font-bold">Suggested Inquiries:</span>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {quickQuestions.map((qq, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(qq.text)}
                    className="px-2 py-1 text-[10px] font-sans font-medium rounded-md bg-white/5 hover:bg-[#00D4FF]/10 text-white hover:text-[#00D4FF] border border-white/5 hover:border-[#00D4FF]/20 transition-all cursor-pointer whitespace-nowrap"
                  >
                    {qq.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Form Area */}
          <div className="p-4 border-t border-white/5 bg-white/5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isTyping}
                placeholder="Ask her technical background or specialities..."
                className="flex-grow px-3 py-2.5 rounded-lg bg-[#050816]/50 border border-white/10 text-xs text-white focus:border-[#00D4FF] outline-none transition-colors font-sans placeholder:text-neutral-600 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isTyping || !inputValue.trim()}
                className="px-3 py-2 rounded-lg bg-[#00D4FF] text-black hover:bg-[#00D4FF]/80 disabled:opacity-50 transition-colors cursor-pointer flex items-center justify-center shrink-0"
                aria-label="Send Message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
