import { useState } from "react";
import { ArrowUpRight, Smartphone, ShieldCheck, Car, ExternalLink, Sparkles } from "lucide-react";
import { Product } from "../types";

export default function Products() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const productsList: Product[] = [
    {
      id: "prod-chase",
      name: "Chase Mobile",
      company: "JPMorgan Chase",
      description: "Delivered critical high-scale Fintech capabilities for millions of daily active users. Focused on secure architectural modularization, biometric security layers, and fine-tuning rendering threads to resolve interface stuttering on low-end devices.",
      technologies: ["Android SDK", "Kotlin", "Architecture Guidelines", "Performance Optimization", "Biometrics", "Dagger/Hilt"],
      playStoreUrl: "https://play.google.com/store/search?q=chase%20bank&c=apps",
      industry: "Fintech"
    },
    {
      id: "prod-lookout",
      name: "Lookout for Work",
      company: "Lookout",
      description: "Designed core background analysis telemetry and device-state listeners for mobile data security systems. Guaranteed seamless, ultra-low battery diagnostic background services using WorkManager and secure IPC binder services to isolate analytical engines.",
      technologies: ["Android", "Enterprise Security", "Networking", "Telemetry", "WorkManager", "IPC Binder"],
      playStoreUrl: "https://play.google.com/store/search?q=lookout+for+work&c=apps",
      industry: "Cybersecurity"
    },
    {
      id: "prod-mercedes",
      name: "Mercedes-Benz Stories",
      company: "Mercedes-Benz",
      description: "Delivered highly responsive native layouts, SDK abstractions, and secure data layers inside the luxury Mercedes-Benz mobile companion ecosystem. Configured reliable Bluetooth BLE handshake streams and WebSocket log synchronization.",
      technologies: ["Native Android", "Companion SDKs", "Bluetooth BLE", "Jetpack Compose", "WebSockets", "Coroutines Flow"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mercedesbenz.stories.ece",
      industry: "Connected Apps"
    }
  ];

  const industries = ["all", "Fintech", "Cybersecurity", "Connected Apps"];

  const filteredProducts = activeTab === "all" 
    ? productsList 
    : productsList.filter(p => p.industry === activeTab);

  // High-Tech custom SVG UI mockups based on product
  const renderMockup = (id: string) => {
    switch(id) {
      case "prod-chase":
        return (
          <svg className="w-full h-full text-cyan-500/20" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="180" rx="12" fill="#0C1021" />
            <rect x="15" y="15" width="270" height="150" rx="8" stroke="#1A2342" strokeWidth="2" />
            
            {/* Header */}
            <circle cx="35" cy="35" r="8" fill="#00D4FF" fillOpacity="0.4" />
            <rect x="52" y="31" width="80" height="8" rx="4" fill="#1A2342" />
            
            {/* Balance Card */}
            <rect x="30" y="55" width="240" height="55" rx="6" fill="#141B36" stroke="#00D4FF" strokeWidth="1" strokeDasharray="4 2" />
            <rect x="45" y="68" width="60" height="6" rx="3" fill="#1A2342" />
            <rect x="45" y="82" width="100" height="12" rx="4" fill="#00D4FF" fillOpacity="0.8" />
            <circle cx="235" cy="82" r="10" fill="#00D4FF" fillOpacity="0.2" />
            
            {/* Lists */}
            <rect x="30" y="125" width="110" height="25" rx="4" fill="#141B36" />
            <rect x="42" y="134" width="50" height="6" rx="3" fill="#1A2342" />
            <rect x="160" y="125" width="110" height="25" rx="4" fill="#141B36" />
            <rect x="172" y="134" width="50" height="6" rx="3" fill="#1A2342" />
          </svg>
        );
      case "prod-lookout":
        return (
          <svg className="w-full h-full text-emerald-500/20" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="180" rx="12" fill="#0C1021" />
            <rect x="15" y="15" width="270" height="150" rx="8" stroke="#1A2342" strokeWidth="2" />
            
            {/* Compass Shield */}
            <circle cx="150" cy="80" r="35" fill="#102E38" stroke="#10B981" strokeWidth="1.5" />
            <circle cx="150" cy="80" r="28" stroke="#10B981" strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Pulse Line */}
            <path d="M 30 140 H 110 L 120 120 L 130 155 L 140 135 L 148 140 H 270" stroke="#1A2342" strokeWidth="2" />
            <path d="M 30 140 H 110 L 120 120 L 130 155 L 140 135 L 148 140 H 270" stroke="#10B981" strokeWidth="1.5" strokeDasharray="40 100" strokeDashoffset="50">
              <animate attributeName="stroke-dashoffset" values="300;0" dur="4s" repeatCount="indefinite" />
            </path>

            {/* Shield Diagnostic Indicators */}
            <circle cx="150" cy="80" r="8" fill="#10B981" />
            <rect x="30" y="30" width="70" height="10" rx="5" fill="#141B36" />
            <rect x="200" y="30" width="70" height="10" rx="5" fill="#141B36" />
          </svg>
        );
      case "prod-mercedes":
        return (
          <svg className="w-full h-full text-violet-500/20" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="180" rx="12" fill="#0C1021" />
            <rect x="15" y="15" width="270" height="150" rx="8" stroke="#1A2342" strokeWidth="2" />
            
            {/* Dashboard Arc */}
            <path d="M 40 130 Q 150 20 260 130" stroke="#1A2342" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M 40 130 Q 150 20 260 130" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" strokeDasharray="140 300" strokeDashoffset="0" fill="none" />
            
            {/* Car silhouette */}
            <rect x="120" y="100" width="60" height="24" rx="6" fill="#181135" stroke="#8B5CF6" strokeWidth="1" />
            <circle cx="135" cy="125" r="5" fill="#8B5CF6" />
            <circle cx="165" cy="125" r="5" fill="#8B5CF6" />
            
            {/* Diagnostics */}
            <rect x="35" y="145" width="230" height="12" rx="4" fill="#141B36" />
            <rect x="45" y="149" width="80" height="4" rx="2" fill="#8B5CF6" fillOpacity="0.8" />
          </svg>
        );
      default:
        return null;
    }
  };

  const currentIcon = (id: string) => {
    switch (id) {
      case "prod-chase":
        return <Smartphone className="w-5 h-5 text-[#00D4FF]" />;
      case "prod-lookout":
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case "prod-mercedes":
        return <Smartphone className="w-5 h-5 text-violet-400" />;
      default:
        return null;
    }
  };

  return (
    <section id="products" className="py-24 bg-[#050816] relative border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,rgba(0,212,255,0.02),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="flex flex-col">
            <p className="font-mono text-xs text-[#00D4FF] uppercase tracking-widest font-semibold">// CASE STUDIES</p>
            <h2 className="font-sans font-black text-3xl md:text-5xl text-white mt-2">
              Case Studies I've Helped Deliver
            </h2>
            <p className="font-sans text-sm text-[#A0AEC0] mt-3 max-w-xl">
              Real-world, high-traffic native Android applications delivered across Fintech, Cybersecurity, and Automotive sectors.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 bg-white/5 p-1 rounded-xl border border-white/10 self-start">
            {industries.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#00D4FF] text-black shadow-md shadow-[#00D4FF]/10"
                    : "text-[#A0AEC0] hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className="flex flex-col h-full rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D4FF]/40 hover:shadow-[0_10px_40px_-15px_rgba(0,212,255,0.15)] transition-all duration-300 overflow-hidden group relative"
            >
              {/* Product screenshot Vector Placeholder */}
              <div className="relative p-1 bg-gradient-to-b from-white/10 to-transparent border-b border-white/10 overflow-hidden">
                {renderMockup(product.id)}
                
                {/* Float industry tag */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-[#050816]/70 border border-white/10 backdrop-blur-md">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#A0AEC0] font-bold">
                    {product.industry}
                  </span>
                </div>

                <div className="absolute inset-0 bg-[#00D4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[1px]">
                  <Sparkles className="w-6 h-6 text-[#00D4FF] animate-pulse" />
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    {currentIcon(product.id)}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-sans font-black text-lg text-white group-hover:text-[#00D4FF] transition-colors leading-none">
                      {product.name}
                    </h3>
                    <span className="font-mono text-[10px] text-[#A0AEC0] uppercase tracking-wider mt-1.5 font-bold">
                      {product.company}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-xs text-[#A0AEC0] mt-4 leading-relaxed flex-grow">
                  {product.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {product.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] text-white font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {product.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[9px] text-[#00D4FF] font-mono">
                      +{product.technologies.length - 4} More
                    </span>
                  )}
                </div>

                {/* Visit button */}
                <a
                  href={product.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00D4FF]/40 text-white font-medium text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#00D4FF] hover:text-black hover:font-bold hover:shadow-[0_4px_15px_rgba(0,212,255,0.2)]"
                >
                  Visit Play Store <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
