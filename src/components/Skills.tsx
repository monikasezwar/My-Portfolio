import { Cpu, Server, Laptop, Activity, UserCheck, ShieldAlert } from "lucide-react";
import { SkillCategory } from "../types";

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Mobile Development",
      skills: [
        { name: "Kotlin (Core / Coroutines)", level: 98 },
        { name: "Jetpack Compose Framework", level: 96 },
        { name: "Android SDK / NDK Core", level: 95 },
        { name: "Asynchronous Flow / LiveData", level: 94 },
        { name: "Local Room / SQLite Storage", level: 92 },
        { name: "Java Enterprise Core", level: 90 },
        { name: "WorkManager Task Dispatcher", level: 91 }
      ]
    },
    {
      title: "Architecture & Hardening",
      skills: [
        { name: "MVVM / MVI Flow Patterns", level: 98 },
        { name: "Modular App Architecture", level: 96 },
        { name: "Clean Architecture Layouts", level: 96 },
        { name: "Dependency Injection (Hilt / Koin)", level: 95 },
        { name: "Secure Storage Hardening", level: 93 },
        { name: "Performance Leak Profiling", level: 92 }
      ]
    },
    {
      title: "Fintech & Core Security",
      skills: [
        { name: "Biometric Auth & FaceID", level: 97 },
        { name: "Android Secure Keystore", level: 96 },
        { name: "SQL Cipher & Encrypted Prefs", level: 95 },
        { name: "OWASP Hardening & SSL Pinning", level: 95 },
        { name: "API Security Tokenization", level: 93 },
        { name: "Play Integrity & Device ID", level: 92 }
      ]
    },
    {
      title: "Testing & Quality Assurance",
      skills: [
        { name: "JUnit Unit Assertions", level: 95 },
        { name: "Mockito Graph Mocking", level: 94 },
        { name: "Espresso UI Automation", level: 90 },
        { name: "SonarQube & Static Audits", level: 92 },
        { name: "CI / CD Jenkins & Actions", level: 88 }
      ]
    },
    {
      title: "Leadership & Strategy",
      skills: [
        { name: "Technical Mentorship", level: 96 },
        { name: "Stakeholder Management", level: 93 },
        { name: "Cross-functional Team Leading", level: 95 },
        { name: "Defining Engineering Standards", level: 95 },
        { name: "Agile Scrum Coordination", level: 90 }
      ]
    }
  ];

  const getIcon = (title: string) => {
    switch (title) {
      case "Mobile Development":
        return <Laptop className="w-5 h-5 text-[#00D4FF]" />;
      case "Architecture & Hardening":
        return <Server className="w-5 h-5 text-[#00D4FF]" />;
      case "Fintech & Core Security":
        return <Cpu className="w-5 h-5 text-[#00D4FF]" />;
      case "Testing & Quality Assurance":
        return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
      case "Leadership & Strategy":
        return <UserCheck className="w-5 h-5 text-violet-400" />;
      default:
        return <Activity className="w-5 h-5 text-[#00D4FF]" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#050816]/60 relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.03),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="flex flex-col mb-16 items-center text-center">
          <p className="font-mono text-xs text-[#00D4FF] uppercase tracking-widest font-semibold">// CORE COMPETENCIES</p>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-white mt-2">
            Professional Expertise
          </h2>
          <div className="w-16 h-1 bg-[#00D4FF] mt-4 rounded-full" />
          <p className="font-sans text-sm text-[#A0AEC0] mt-4 max-w-xl text-center leading-relaxed">
            Over a decade of robust technical mastery. I engineer complex multi-process systems, customize system software, and lead tech delivery across continents.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D4FF]/30 hover:shadow-[0_10px_30px_-15px_rgba(0,212,255,0.1)] transition-all duration-300 flex flex-col gap-5 text-left"
            >
              {/* Card Title */}
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getIcon(cat.title)}
                </div>
                <h3 className="font-sans font-black text-base text-white">
                  {cat.title}
                </h3>
              </div>

              {/* Skill Bars List */}
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col gap-1.5 group/bar cursor-default">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-sans font-semibold text-[#A0AEC0] group-hover/bar:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="font-mono font-bold text-[#00D4FF] opacity-80 group-hover/bar:opacity-100 transition-opacity duration-300">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress slider bar container */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-gradient-to-r from-[#00D4FF] to-cyan-400 rounded-full transition-all duration-1000 shadow-[0_0_8px_#00D4FF]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
