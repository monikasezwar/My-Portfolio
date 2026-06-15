import { useEffect, useState } from "react";
import { BookOpen, Calendar, Clock, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { BlogArticle } from "../types";

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadMediumBlogs() {
      try {
        const res = await fetch("/api/medium");
        if (res.ok) {
          const articles = await res.json();
          setBlogs(articles);
        }
      } catch (err) {
        console.error("Medium blogs loading error, fallback remains available:", err);
      } finally {
        setLoading(false);
      }
    }
    loadMediumBlogs();
  }, []);

  if (loading) {
    return (
      <section id="blogs" className="py-24 bg-[#050816] text-center">
        <span className="font-mono text-xs text-[#00D4FF] animate-pulse">
          Fetching published posts from medium.com/feed/@monika9368sezwar...
        </span>
      </section>
    );
  }

  const featured = blogs[0];
  const list = blogs.slice(1);

  return (
    <section id="blogs" className="py-24 bg-[#050816] relative border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,rgba(0,212,255,0.015),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="flex flex-col text-left">
            <p className="font-mono text-xs text-[#00D4FF] uppercase tracking-widest font-semibold">// INTELLECTUAL COLLATERAL</p>
            <h2 className="font-sans font-black text-3xl md:text-5xl text-white mt-2">
              Technical Writing
            </h2>
            <p className="font-sans text-sm text-[#A0AEC0] mt-3 max-w-xl">
              Sharing lessons learned from decade of Android development, software architecture patterns, and technical leadership.
            </p>
          </div>

          <a
            id="medium-profile-cta"
            href="https://medium.com/@monika9368sezwar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/5 border border-white/10 hover:border-[#00D4FF]/40 text-white font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-white/[0.08] transition-all duration-300 flex items-center justify-center gap-2 self-start mt-6 md:mt-0 group cursor-pointer"
          >
            <BookOpen className="w-5 h-5 text-[#A0AEC0] group-hover:text-white" />
            View Medium Profile
            <ArrowUpRight className="w-4 h-4 text-[#A0AEC0] group-hover:text-white" />
          </a>
        </div>

        {/* Featured Card (Featured Hero Article) */}
        {featured && (
          <div
            id="blogs-featured"
            className="mb-12 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col lg:flex-row gap-8 text-left hover:border-[#00D4FF]/40 transition-all duration-300 group"
          >
            {/* Image banner area */}
            <div className="lg:w-1/2 relative rounded-xl overflow-hidden aspect-video lg:aspect-auto h-64 lg:h-auto min-h-[220px]">
              <img
                src={featured.coverImage}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#00D4FF]/5 pointer-events-none" />
              
              {/* Category float tag */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#050816]/80 text-[10px] font-mono text-[#00D4FF] font-bold uppercase border border-[#00D4FF]/20 backdrop-blur-md">
                Featured Article
              </div>
            </div>

            {/* Read Content area */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-xs font-mono text-[#A0AEC0]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#00D4FF]" />
                  <span>{featured.pubDate}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#00D4FF]" />
                  <span>{featured.readingTime}</span>
                </div>
              </div>

              <h3 className="font-sans font-black text-xl md:text-2xl text-white mt-4 group-hover:text-[#00D4FF] transition-all leading-tight">
                {featured.title}
              </h3>

              <p className="font-sans text-xs text-[#A0AEC0] mt-4 leading-relaxed">
                {featured.description}
              </p>

              {/* Tag category */}
              <span className="font-mono text-[9px] text-white bg-white/5 px-2.5 py-1 rounded border border-white/5 uppercase mt-5 self-start">
                Category: {featured.category}
              </span>

              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-3.5 rounded-xl bg-[#00D4FF] text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 self-start shadow-md hover:bg-[#00D4FF]/80 hover:shadow-[0_4px_15px_rgba(0,212,255,0.25)] transition-all cursor-pointer"
              >
                Read Article <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* Regular list collection bento grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {list.map((article, idx) => (
            <div
              key={idx}
              className="flex flex-col h-full rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D4FF]/40 hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative aspect-video rounded-b-none overflow-hidden">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-2.5 py-0.5 rounded bg-[#050816]/70 border border-white/10 backdrop-blur-md text-[9px] text-[#A0AEC0] font-mono uppercase">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] font-mono text-[#A0AEC0]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#00D4FF]" />
                    <span>{article.pubDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#00D4FF]" />
                    <span>{article.readingTime}</span>
                  </div>
                </div>

                <h3 className="font-sans font-black text-sm text-white mt-3 group-hover:text-[#00D4FF] transition-all leading-snug flex-grow">
                  {article.title}
                </h3>

                <p className="font-sans text-[11px] text-[#A0AEC0] mt-3 leading-relaxed line-clamp-2">
                  {article.description}
                </p>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 py-3 w-full rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-1.5 hover:bg-[#00D4FF]/15 hover:text-[#00D4FF] hover:border-[#00D4FF]/35 group cursor-pointer"
                >
                  Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Medium Follow Engagement Banner CTA */}
        <div
          id="blogs-medium-cta-banner"
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-teal-950/20 via-[#050816] to-[#0D1B2A] border border-white/10 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="absolute inset-0 bg-[#00D4FF]/5 pointer-events-none" />
          <div className="flex gap-4 items-start text-left relative z-10">
            <div className="p-3 rounded-xl bg-[#00D4FF]/5 border border-[#00D4FF]/10 text-[#00D4FF]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-sans font-black text-base text-white">Subscribe to Technical Writing updates</h4>
              <p className="font-sans text-xs text-[#A0AEC0] mt-1.5 max-w-xl">
                I regularly write on advanced Android systems, thread safety, state synchronization, and systems leadership. Follow me on Medium to read early drafts.
              </p>
            </div>
          </div>
          
          <a
            href="https://medium.com/@monika9368sezwar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#00D4FF] hover:bg-[#00D4FF]/80 text-black font-bold uppercase tracking-wider text-xs rounded-xl shadow-md transition-all relative z-10 text-center cursor-pointer"
          >
            Follow My Writing On Medium
          </a>
        </div>
      </div>
    </section>
  );
}
