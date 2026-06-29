/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Blogs from "./components/Blogs";
import GithubShowcase from "./components/GithubShowcase";
import LeetCodeShowcase from "./components/LeetCodeShowcase";
import Contact from "./components/Contact";
import AiAssistant from "./components/AiAssistant";
import { Cpu, Mail, Sparkles, Code2 } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll handler
  const handleScrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navbarOffset = 70; // Header heights offset
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  // Section Tracking via Intersection Observer
  useEffect(() => {
    const sections = ["home", "about", "products", "skills", "experience", "blogs", "github", "contact"];
    const observers: IntersectionObserver[] = [];

    const observerOption = {
      root: null,
      rootMargin: "-120px 0px -60% 0px", // Trigger when the section occupying major grid centers
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOption);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // SEO JSON-LD Structured Data Schema Insertion
  const structuredDataSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Monika Sezwar",
    "jobTitle": "Android Tech Lead",
    "headline": "Android Tech Lead & Mobile Architect",
    "description": "Android Tech Lead with 10+ years of experience building scalable mobile apps, AOSP custom solutions, and Android Automotive OS (AAOS) infotainment controllers.",
    "gender": "Female",
    "location": {
      "@type": "Place",
      "name": "India"
    },
    "url": "https://monikasezwar.dev",
    "sameAs": [
      "https://github.com/monikasezwar",
      "https://www.linkedin.com/in/monikasezwar/",
      "https://medium.com/@monika9368sezwar"
    ],
    "knowsAbout": [
      "Android SDK",
      "Kotlin",
      "Jetpack Compose",
      "Android Automotive OS (AAOS)",
      "AOSP customization",
      "Mobile Security",
      "Biometrics API",
      "Clean Architecture",
      "Distributed Systems"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "JPMorgan Chase"
      },
      {
        "@type": "Organization",
        "name": "Mercedes-Benz"
      },
      {
        "@type": "Organization",
        "name": "Lookout"
      }
    ]
  };

  return (
    <div id="portfolio-root" className="min-h-screen bg-[#050816] text-white flex flex-col font-sans relative selection:bg-[#00D4FF]/30 selection:text-[#00D4FF]">
      
      {/* Inlining structured schema context directly into page index for search bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataSchema) }}
      />

      {/* Decorative cyber backdrop grid texture */}
      <div className="absolute inset-0 bg-[#050816] bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.015),transparent_70%)] pointer-events-none" />

      {/* Shared sticky navigation */}
      <Navbar onNavClick={handleScrollToSection} activeSection={activeSection} />

      {/* Main Structural view components */}
      <main className="flex-grow flex flex-col">
        <Hero onNavClick={handleScrollToSection} />
        <About />
        <Products />
        <Skills />
        <Experience />
        <Blogs />
        <GithubShowcase />
        <LeetCodeShowcase />
        <Contact />
      </main>

      {/* AI Assistant Floating dialogue Copilot */}
      <AiAssistant />

      {/* Footer layout */}
      <footer id="app-footer" className="bg-[#03050F] border-t border-white/5 py-12 relative overflow-hidden text-center text-xs text-[#A0AEC0]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
          
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#00D4FF]" />
              <span className="font-sans font-bold text-white text-sm">Monika Sezwar</span>
            </div>
            <p className="font-sans text-xs max-w-sm leading-relaxed text-[#A0AEC0]">
              Mobile Architect specializing in scalable Android SDK systems, security audits, and customized vehicle connected infotainment dashboards.
            </p>
          </div>

          <div className="flex flex-col md:text-right gap-3">
            <span className="font-sans text-[10px] text-white/50 uppercase tracking-widest font-bold">
              Engineering Excellence | 10+ Years Experience
            </span>
            <div className="flex flex-wrap md:justify-end gap-1.5 mt-1 font-mono text-[9px] text-[#00D4FF]">
              <span>Kotlin</span>
              <span className="text-white/20">|</span>
              <span>Jetpack Compose</span>
              <span className="text-white/20">|</span>
              <span>Android Automotive</span>
              <span className="text-white/20">|</span>
              <span>AOSP</span>
              <span className="text-white/20">|</span>
              <span>AAOS</span>
              <span className="text-white/20">|</span>
              <span>Architecture</span>
            </div>
          </div>
        </div>

        {/* Legal copyright footer bar */}
        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-left font-sans text-[10px] text-white/40">
          <span>Monika Sezwar © 2026. All rights preserved.</span>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => handleScrollToSection("home")}>Back to top</span>
            <span className="text-white/15">•</span>
            <a href="mailto:monika9368sezwar@gmail.com" className="hover:text-white transition-colors">Direct contact mail</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
