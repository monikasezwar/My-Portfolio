import { useEffect, useState } from "react";
import { Github, Star, GitFork, Users, BookOpen, Activity, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";
import { GitHubStats } from "../types";
import myPhoto from "../assets/images/myjpgphoto.jpg";

export default function GithubShowcase() {
  const [data, setData] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch("/api/github");
        if (res.ok) {
          const stats = await res.json();
          setData(stats);
        }
      } catch (err) {
        console.error("Failed to load GitHub client-side, using static cache:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchGitHubData();
  }, []);

  // Contribution grid removed per user request (Annual Activity / Commit density)

  const getLanguageColor = (lang: string) => {
    switch (lang) {
      case "Kotlin": return "bg-violet-500 shadow-[0_0_6px_#8b5cf6]";
      case "Java": return "bg-amber-600";
      case "Shell": return "bg-emerald-400 shadow-[0_0_6px_#34d399]";
      default: return "bg-sky-400";
    }
  };

  if (loading) {
    return (
      <section id="github" className="py-24 bg-[#050816] text-center">
        <span className="font-mono text-xs text-[#00D4FF] animate-pulse">
          Establishing SSL connection with api.github.com...
        </span>
      </section>
    );
  }

  const profile = data?.profile || {
    username: "monikasezwar",
    name: "Monika Sezwar",
    avatarUrl: myPhoto,
    bio: "Android architect building secure fintech applications and native product experiences.",
    publicRepos: 48,
    starsCount: 186,
    contributionsCount: 1542,
    followers: 0,
    location: "India / Global Placement"
  };

  const repos = data?.repos || [];

  return (
    <section id="github" className="py-24 bg-[#050816]/60 relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,212,255,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="flex flex-col text-left">
            <p className="font-mono text-xs text-[#00D4FF] uppercase tracking-widest font-semibold">// OPEN SOURCE CONTRIBUTIONS</p>
            <h2 className="font-sans font-black text-3xl md:text-5xl text-white mt-2">
              GitHub Technical Sandbox
            </h2>
            <p className="font-sans text-sm text-[#A0AEC0] mt-3 max-w-xl">
              Showcasing key custom frameworks and proof of concepts modeling advanced mobile systems.
            </p>
          </div>

          <a
            id="github-profile-cta"
            href="https://github.com/monikasezwar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#00D4FF] text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-[#00D4FF]/80 transition-all duration-300 shadow-md flex items-center justify-center gap-2 self-start mt-6 md:mt-0 group cursor-pointer"
          >
            <Github className="w-4 h-4" />
            View GitHub Profile
            <ArrowUpRight className="w-4 h-4 translate-x-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Dashboard Framework Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Profile Card Summary Panel */}
          <div className="lg:col-span-4 rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col text-left">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full border border-[#00D4FF]/30 overflow-hidden">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-base text-white">{profile.name}</span>
                <span className="font-mono text-xs text-[#00D4FF] mt-1">@{profile.username}</span>
              </div>
            </div>

            <p className="font-sans text-xs text-[#A0AEC0] mt-4 leading-relaxed">
              {profile.bio}
            </p>

            <div className="flex items2 text-[10px] font-mono text-[#A0AEC0] mt-3">
              <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span>{profile.location}</span>
            </div>

            {/* Metrics block */}
            <div className="grid grid-cols-3 gap-3 mt-6 border-t border-white/5 pt-6">
              <div className="flex flex-col">
                <span className="font-mono text-xs font-black text-white">{profile.publicRepos}</span>
                <span className="font-sans text-[10px] text-[#A0AEC0] uppercase mt-1 leading-none">Repos</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-black text-white">{profile.starsCount}</span>
                <span className="font-sans text-[10px] text-[#A0AEC0] uppercase mt-1 leading-none">Total Stars</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-black text-white">{profile.followers}</span>
                <span className="font-sans text-[10px] text-[#A0AEC0] uppercase mt-1 leading-none">Followers</span>
              </div>
            </div>

            {/* Annual Activity removed per user request */}
          </div>

          {/* Repositories display panel */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-left">
            <h3 className="font-mono text-xs text-[#A0AEC0] uppercase tracking-widest font-semibold px-1">
              // FEATURED SOURCE EMBEDDINGS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repos.map((repo, idx) => (
                <a
                  key={idx}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D4FF]/40 hover:bg-white/[0.07] transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#00D4FF]" />
                      <span className="font-sans font-black text-sm text-white group-hover:text-[#00D4FF] transition-colors leading-none">
                        {repo.name}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#A0AEC0]:text-white transition-opacity translate-x-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <p className="font-sans text-[11px] text-[#A0AEC0] mt-3 leading-relaxed flex-grow">
                    {repo.description}
                  </p>

                  {/* Topics list */}
                  <div className="flex flex-wrap gap-1 mt-4">
                    {repo.topics.slice(0, 3).map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-[#0D1630] text-[9px] text-[#00D4FF] font-mono border border-[#00D4FF]/10"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* repo metrics */}
                  <div className="flex items-center gap-4 mt-5 pt-4 border-t border-white/5 text-xs text-[#A0AEC0] font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                      <span>{repo.language}</span>
                    </div>
                    {repo.stars > 0 && (
                      <div className="flex items-center gap-1 hover:text-white">
                        <Star className="w-3.5 h-3.5" />
                        <span>{repo.stars}</span>
                      </div>
                    )}
                    {repo.forks > 0 && (
                      <div className="flex items-center gap-1 hover:text-white">
                        <GitFork className="w-3.5 h-3.5" />
                        <span>{repo.forks}</span>
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
