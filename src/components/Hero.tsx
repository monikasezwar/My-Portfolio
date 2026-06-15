import { useEffect, useState } from "react";
import { Download, Mail, ChevronRight, Linkedin, Github, BookOpen, Smartphone, Activity, ShieldCheck } from "lucide-react";

interface HeroProps {
  onNavClick: (sectionId: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  const [tickerIndex, setTickerIndex] = useState(0);
  const techStack = [
    "Kotlin",
    "Jetpack Compose",
    "Banking Apps",
    "Fintech Security",
    "Native App Development",
    "Architecture",
    "Leadership"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % techStack.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    window.open("https://raw.githubusercontent.com/monikasezwar/My-Latest-Resume/main/Monika_Sezwar_Android_11yrs_Exp-2%20%20(1).pdf", "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#050816]"
    >
      {/* Background Grids and Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,255,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(5,8,22,0.8),transparent_50%)] pointer-events-none" />
      
      {/* Futuristic digital grid texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Content Column */}
        <div id="hero-left-col" className="lg:col-span-7 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]"></span>
            </span>
            <span className="font-mono text-xs text-[#00D4FF] uppercase tracking-widest font-semibold flex items-center gap-1">
              Active Mobile Architect & Leader
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-sans font-black text-xs md:text-sm tracking-widest text-[#A0AEC0] uppercase leading-none">
              Monika Sezwar
            </span>
            <h1 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[0.95] select-none uppercase">
              Android <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-cyan-400 to-[#007EA7] drop-shadow-[0_2px_15px_rgba(0,212,255,0.2)]">
                Tech Lead
              </span>
            </h1>
          </div>

          {/* Core dynamic specialization slider */}
          <div className="h-8 flex items-center">
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#A0AEC0] mr-2">
              SPECIALIZING IN:
            </span>
            <div className="relative overflow-hidden h-7 w-56 flex items-center">
              {techStack.map((tech, idx) => (
                <span
                  key={tech}
                  className={`absolute font-mono text-xs md:text-sm font-bold text-white uppercase tracking-wider transition-all duration-700 transform ${
                    tickerIndex === idx
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-4 opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  [ {tech} ]
                </span>
              ))}
            </div>
          </div>

          <p className="font-sans text-base md:text-lg text-[#A0AEC0] max-w-xl leading-relaxed">
            Building high-performance native Android apps, secure banking/fintech systems, and core product libraries. Driving modern UI structures, security audits, and technical leadership.
          </p>

          {/* Social connections */}
          <div className="flex items-center gap-4 mt-2">
            <a
              id="social-linkedin"
              href="https://www.linkedin.com/in/monikasezwar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00D4FF]/40 transition-all duration-300 group shadow-md"
            >
              <Linkedin className="w-5 h-5 text-[#A0AEC0] group-hover:text-[#00D4FF] group-hover:scale-110 transition-all" />
            </a>
            <a
              id="social-github"
              href="https://github.com/monikasezwar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00D4FF]/40 transition-all duration-300 group shadow-md"
            >
              <Github className="w-5 h-5 text-[#A0AEC0] group-hover:text-[#00D4FF] group-hover:scale-110 transition-all" />
            </a>
            <a
              id="social-medium"
              href="https://medium.com/@monika9368sezwar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00D4FF]/40 transition-all duration-300 group shadow-md"
            >
              <BookOpen className="w-5 h-5 text-[#A0AEC0] group-hover:text-[#00D4FF] group-hover:scale-110 transition-all" />
            </a>
          </div>

          {/* Action CTAs */}
          <div id="hero-ctas" className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <button
              id="cta-work"
              onClick={() => onNavClick("products")}
              className="px-8 py-4 bg-[#00D4FF] text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-[#00D4FF]/80 transition-all duration-300 shadow-[0_4px_20px_rgba(0,212,255,0.25)] hover:shadow-[0_8px_30px_rgba(0,212,255,0.4)] cursor-pointer flex items-center justify-center gap-2 group"
            >
              View My Work
              <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              id="cta-resume"
              onClick={handleDownloadResume}
              className="px-8 py-4 bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 border border-[#00D4FF]/30 hover:border-[#00D4FF] text-[#00D4FF] hover:text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(0,212,255,0.1)]"
            >
              Download Resume
              <Download className="w-4 h-4 text-[#00D4FF] group-hover:scale-110 transition-transform" />
            </button>
            <button
              id="cta-contact"
              onClick={() => onNavClick("contact")}
              className="px-8 py-4 bg-transparent border border-white/10 hover:border-[#00D4FF]/40 hover:bg-[#00D4FF]/5 text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              Contact Me
              <Mail className="w-4 h-4 text-[#A0AEC0]" />
            </button>
          </div>
        </div>

        {/* Right Side Visual Column (Profile & Floating badges) */}
        <div id="hero-right-col" className="lg:col-span-5 flex justify-center items-center mt-10 lg:mt-0 relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            
            {/* Ambient Background Glow spheres */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.2),transparent_70%)] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-[#00D4FF]/10 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] border border-[#00D4FF]/5 rounded-full pointer-events-none border-dashed" />

            {/* Glowing framing container */}
            <div className="absolute inset-4 rounded-full border-4 border-[#00D4FF]/20 overflow-hidden shadow-2xl shadow-black/80">
              <img
                src="/src/assets/images/myprofessionalphoto.jpeg"
                alt="Monika Sezwar Profile"
                className="w-full h-full object-cover grayscale-[30%] hover:scale-105 hover:grayscale-0 transition-all duration-750"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Technical badges surrounding profile */}
            {/* Kotlin Badge */}
            <div id="badge-kotlin" className="absolute -top-4 -left-4 p-3 rounded-2xl bg-[#050816]/90 border border-white/10 shadow-[0_0_15px_rgba(0,D4,FF,0.1)] hover:border-[#00D4FF] hover:shadow-[0_0_20px_rgba(0,212,255,0.25)] transition-all duration-300 flex items-center gap-2">
              <span className="font-sans text-xs font-semibold text-white">Kotlin Master</span>
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            </div>

            {/* Jetpack Compose Badge */}
            <div id="badge-compose" className="absolute top-12 -right-8 p-3 rounded-2xl bg-[#050816]/90 border border-white/10 shadow-[0_0_15px_rgba(0,D4,FF,0.1)] hover:border-[#00D4FF] hover:shadow-[0_0_20px_rgba(0,212,255,0.25)] transition-all duration-300 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#00D4FF]" />
              <span className="font-sans text-xs font-semibold text-white">Jetpack Compose</span>
            </div>

            {/* Banking & Fintech Badge */}
            <div id="badge-fintech" className="absolute -bottom-2 -left-6 p-3 rounded-2xl bg-[#050816]/90 border border-white/10 shadow-[0_0_15px_rgba(0,D4,FF,0.1)] hover:border-[#00D4FF] hover:shadow-[0_0_20px_rgba(0,212,255,0.25)] transition-all duration-300 flex items-center gap-2 leading-none">
              <Activity className="w-4 h-4 text-[#00D4FF]" />
              <div className="flex flex-col text-left">
                <span className="font-sans text-[10px] text-[#A0AEC0]">Native apps</span>
                <span className="font-sans text-xs font-bold text-white">Banking & Fintech</span>
              </div>
            </div>

            {/* Exp years Badge */}
            <div id="badge-experience" className="absolute bottom-8 -right-8 p-3.5 rounded-2xl bg-[#050816]/90 border border-white/10 shadow-[0_0_15px_rgba(0,D4,FF,0.1)] hover:border-[#00D4FF] hover:shadow-[0_0_20px_rgba(0,212,255,0.25)] transition-all duration-300 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs font-bold text-white">10+ Years</span>
              </div>
              <p className="font-sans text-[9px] text-[#A0AEC0] uppercase mt-0.5">Global Track Record</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
