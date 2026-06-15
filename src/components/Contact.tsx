import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, HelpCircle, Linkedin, Github, BookOpen } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [resMsg, setResMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('sending');
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        const result = await res.json();
        setResMsg(result.message || "Message delivered successfully.");
        setStatus('success');
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const errorData = await res.json();
        setResMsg(errorData.error || "Form transmission failed.");
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setResMsg("Unable to connect with the messaging server. Please try again.");
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050816] relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,212,255,0.035),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col mb-16 items-center text-center">
          <p className="font-mono text-xs text-[#00D4FF] uppercase tracking-widest font-semibold">// CONTACT MATRIX</p>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-white mt-1">
            Let's Build Something Amazing Together
          </h2>
          <div className="w-16 h-1 bg-[#00D4FF] mt-4 rounded-full" />
          <p className="font-sans text-sm text-[#A0AEC0] mt-4 max-w-xl text-center leading-relaxed">
            Hiring for technical positions, mobile architectural consultants, technical lead briefs, or consulting contracts.
          </p>
        </div>

        {/* Form and info split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Details column */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h3 className="font-sans font-black text-xl text-white">
              Direct Channels & Connectivity
            </h3>
            
            <p className="font-sans text-xs text-[#A0AEC0] leading-relaxed">
              Based in India, targeting relocation assignments or remote contracts in key global markets including <strong>Germany, Singapore, Netherlands, and the United Kingdom</strong>.
            </p>

            <div className="flex flex-col gap-5 mt-6">
              {/* Mail */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#00D4FF]/25 transition-all">
                <div className="p-3 rounded-lg bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] text-[#A0AEC0] uppercase tracking-widest">Direct Mail</span>
                  <a href="mailto:monika9368sezwar@gmail.com" className="font-sans text-xs font-bold text-white hover:text-[#00D4FF] transition-colors">
                    monika9368sezwar@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-3 rounded-lg bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] text-[#A0AEC0] uppercase tracking-widest">Base Base</span>
                  <span className="font-sans text-xs font-bold text-white">
                    India (Open to Relocation / International contracts)
                  </span>
                </div>
              </div>
            </div>

            {/* Premium Social Cards Grid Panel */}
            <div className="mt-6 border-t border-white/5 pt-6 flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#A0AEC0] px-1 mb-4 font-bold">
                // EXTERNAL PROFILES
              </span>

              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://www.linkedin.com/in/monikasezwar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2.5 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D4FF]/40 text-[#A0AEC0] hover:text-white transition-all group"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-[#00D4FF] group-hover:scale-110 transition-all" />
                  <span className="font-sans text-[10px] font-semibold">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/monikasezwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2.5 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D4FF]/40 text-[#A0AEC0] hover:text-white transition-all group"
                >
                  <Github className="w-5 h-5 group-hover:text-[#00D4FF] group-hover:scale-110 transition-all" />
                  <span className="font-sans text-[10px] font-semibold">GitHub</span>
                </a>
                <a
                  href="https://medium.com/@monika9368sezwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2.5 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D4FF]/40 text-[#A0AEC0] hover:text-white transition-all group"
                >
                  <BookOpen className="w-5 h-5 group-hover:text-[#00D4FF] group-hover:scale-110 transition-all" />
                  <span className="font-sans text-[10px] font-semibold">Medium</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col text-left">
            <h3 className="font-sans font-black text-lg text-white mb-6">
              Write Inbound Message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="font-mono text-[10px] text-[#A0AEC0] uppercase tracking-wider font-bold">
                  SENDER REGISTER NAME
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Director of Engineering"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-3 rounded-lg bg-[#050816]/80 text-white border border-white/10 text-xs focus:border-[#00D4FF] outline-none transition-all placeholder:text-neutral-600 font-sans"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="font-mono text-[10px] text-[#A0AEC0] uppercase tracking-wider font-bold">
                  CONTACT EMAIL ADDRESS
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. supervisor@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-lg bg-[#050816]/80 text-white border border-white/10 text-xs focus:border-[#00D4FF] outline-none transition-all placeholder:text-neutral-600 font-sans"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="font-mono text-[10px] text-[#A0AEC0] uppercase tracking-wider font-bold">
                  BRIEF / SPECIFICATION MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell me about your tech requirements, target timeline, or career opportunity..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="px-4 py-3 rounded-lg bg-[#050816]/80 text-white border border-white/10 text-xs focus:border-[#00D4FF] outline-none transition-all placeholder:text-neutral-600 font-sans resize-none"
                />
              </div>

              {/* Submit states */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-sans text-xs">
                  {resMsg}
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 font-sans text-xs flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 shrink-0" />
                  <span>{resMsg}</span>
                </div>
              )}

              <button
                id="contact-submit"
                type="submit"
                disabled={status === 'sending'}
                className="mt-2 w-full py-4 rounded-xl bg-[#00D4FF] hover:bg-[#00D4FF]/80 text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(0,212,255,0.2)] hover:shadow-[0_8px_25px_rgba(0,212,255,0.35)] transition-all cursor-pointer disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-dashed border-black animate-spin" />
                    Transmitting Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
