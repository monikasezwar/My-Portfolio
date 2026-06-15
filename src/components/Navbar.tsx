import { useState, useEffect } from "react";
import { Menu, X, Terminal, Cpu, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Products", id: "products" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Blogs", id: "blogs" },
    { label: "GitHub", id: "github" },
    { label: "Contact", id: "contact" },
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-md border-b border-[#00D4FF]/20 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Brand */}
        <div
          id="nav-logo"
          onClick={() => handleItemClick("home")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#00D4FF]/50 transition-all duration-300 shadow-[0_0_10px_rgba(0,212,255,0.05)]">
            <Cpu className="w-5 h-5 text-[#00D4FF] group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-[#00D4FF]/20 rounded-lg filter blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold tracking-tight text-white leading-none">
              Monika Sezwar
            </span>
            <span className="font-mono text-[9px] text-[#00D4FF] uppercase tracking-wider mt-0.5">
              Android Tech Lead
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div id="desktop-menu" className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => handleItemClick(item.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 font-sans cursor-pointer relative ${
                activeSection === item.id
                  ? "text-[#00D4FF]"
                  : "text-[#A0AEC0] hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#00D4FF] rounded-full shadow-[0_0_8px_#00D4FF]" />
              )}
            </button>
          ))}

          {/* Direct CTA */}
          <button
            id="nav-cta"
            onClick={() => handleItemClick("contact")}
            className="ml-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#00D4FF] hover:bg-[#00D4FF]/80 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] cursor-pointer flex items-center gap-1.5"
          >
            Hire Me <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#A0AEC0] hover:text-white rounded-lg hover:bg-white/5 transition-all cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden absolute top-full left-0 w-full bg-[#050816]/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 shadow-2xl flex flex-col gap-4 animate-fade-in"
        >
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              id={`mobile-nav-link-${item.id}`}
              onClick={() => handleItemClick(item.id)}
              className={`py-3 px-4 rounded-xl text-left text-base font-semibold transition-all flex items-center justify-between cursor-pointer ${
                activeSection === item.id
                  ? "text-[#00D4FF] bg-white/5 border-l-4 border-[#00D4FF]"
                  : "text-[#A0AEC0] hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs opacity-40">0{idx + 1}</span>
            </button>
          ))}
          <button
            id="mobile-nav-cta"
            onClick={() => handleItemClick("contact")}
            className="mt-2 py-4 text-center rounded-xl font-bold bg-[#00D4FF] text-black shadow-lg"
          >
            Work With Me — Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
}
