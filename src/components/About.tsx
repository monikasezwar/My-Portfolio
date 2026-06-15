import { Globe, GraduationCap, Code2, Users2, Brain, ShieldCheck } from "lucide-react";

export default function About() {
  const currentLearning = [
    { name: "Generative AI & LLMs Integration", icon: <Brain className="w-5 h-5 text-[#00D4FF]" /> },
    { name: "Distributed Cloud Architecture", icon: <Globe className="w-5 h-5 text-[#00D4FF]" /> },
    { name: "High Performance JVM/Android Backend", icon: <Code2 className="w-5 h-5 text-[#00D4FF]" /> }
  ];

  const valueDrivers = [
    {
      title: "Mobile Architecture & DI",
      desc: "Architecting modular, multi-module setups that scale cleanly without graph bloat. Hardened dependency injection structures (Hilt/Dagger).",
      icon: <GraduationCap className="w-5 h-5 text-[#00D4FF]" />
    },
    {
      title: "Fintech & Banking Security",
      desc: "Hardening financial apps, implementing biometric triggers, custom Keystore integration, secure local DB caching, and strict OWASP security audits.",
      icon: <ShieldCheck className="w-5 h-5 text-[#00D4FF]" />
    },
    {
      title: "Technical Leadership & Mentorship",
      desc: "Nurturing senior engineering talent, setting code standards, managing multi-project sync, and aligning architecture with business goals.",
      icon: <Users2 className="w-5 h-5 text-[#00D4FF]" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#050816]/60 relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,212,255,0.03),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <p className="font-mono text-xs text-[#00D4FF] uppercase tracking-widest font-semibold">
            // INTRODUCTION
          </p>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-white mt-2">
            Problem Solver <span className="text-[#00D4FF]">&lt;Android Engineer&gt;</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4FF] to-transparent mt-4 rounded-full" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Core Bio & Vision */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="font-sans font-bold text-xl text-white">
              Pioneering Native Mobile Innovation & Secured Banking Solutions
            </h3>
            
            <p className="font-sans text-base text-[#A0AEC0] leading-relaxed">
              I am an Android Tech Lead with <strong>over 11 years of experience</strong> delivering premium native mobile solutions across Fintech, Banking, Cybersecurity, and global Enterprise sectors.
            </p>

            <p className="font-sans text-base text-[#A0AEC0] leading-relaxed">
              I specialize in Android Systems Architecture, modular multi-module product scaling, Jetpack Compose UI frameworks, secure database systems, and fintech cybersecurity hardening. I thrive on untangling deep development challenges, streamlining complex architectures, and leading collaborative engineering squads toward excellence.
            </p>

            {/* Current Growth Sector */}
            <div className="mt-4 p-6 rounded-2xl bg-white/5 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
              <h4 className="font-mono text-xs font-bold text-[#00D4FF] uppercase tracking-widest mb-4">
                Current Strategic Focus & Learning Paths:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentLearning.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-start gap-2.5 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#00D4FF]/30 transition-all">
                    {item.icon}
                    <span className="font-sans text-xs font-medium text-white leading-snug">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Architecture Drivers & Visual Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Value Indicators Dashboard */}
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs text-[#A0AEC0] uppercase tracking-wider font-semibold px-1">
                // EXECUTIVE STACK DRIVERS
              </h3>
              
              {valueDrivers.map((driver, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D4FF]/30 transition-all duration-300 shadow-md group"
                >
                  <div className="p-3 rounded-xl bg-[#00D4FF]/10 text-[#00D4FF] group-hover:bg-[#00D4FF] group-hover:text-black transition-colors duration-300">
                    {driver.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <h4 className="font-sans font-bold text-sm text-white group-hover:text-[#00D4FF] transition-colors leading-none">
                      {driver.title}
                    </h4>
                    <p className="font-sans text-xs text-[#A0AEC0] mt-2 leading-relaxed">
                      {driver.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro Stats Card */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center shadow-lg hover:border-emerald-500/20 transition-all">
                <span className="block font-sans font-black text-3xl text-emerald-400">10M+</span>
                <span className="block font-mono text-[9px] text-[#A0AEC0] uppercase tracking-widest mt-1">Users Scaled</span>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center shadow-lg hover:border-[#00D4FF]/20 transition-all">
                <span className="block font-sans font-black text-3xl text-[#00D4FF]">0%</span>
                <span className="block font-mono text-[9px] text-[#A0AEC0] uppercase tracking-widest mt-1">Memory Leak Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
