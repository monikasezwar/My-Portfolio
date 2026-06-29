import { Award, Clock3, ShieldCheck, Sparkles } from "lucide-react";

export default function LeetCodeShowcase() {
  return (
    <section id="leetcode" className="py-24 bg-[#050816]/70 relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,189,71,0.08),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.05),transparent_45%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="flex flex-col text-left">
            <p className="font-mono text-xs text-[#00D4FF] uppercase tracking-widest font-semibold">
              // ALGORITHM PRACTICE
            </p>
            <h2 className="font-sans font-black text-3xl md:text-5xl text-white mt-2">
              LeetCode Profile
            </h2>
            <p className="font-sans text-sm text-[#A0AEC0] mt-3 max-w-xl">
              Algorithm problem solving and learning metrics captured from my active LeetCode journey.
            </p>
          </div>

          <a
            href="https://leetcode.com/selena46110"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#F5C518] text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-[#FFD64D]/90 transition-all duration-300 shadow-md flex items-center justify-center gap-2 self-start"
          >
            <Sparkles className="w-4 h-4" />
            Visit LeetCode Profile
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-50px_rgba(0,212,255,0.25)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-[#00D4FF] uppercase tracking-widest">LeetCode User</p>
                <h3 className="font-sans font-black text-2xl text-white mt-2">Monika</h3>
                <p className="font-mono text-sm text-[#A0AEC0] mt-1">@selena46110</p>
              </div>
              <div className="rounded-3xl bg-[#0F172A]/90 px-4 py-3 border border-white/10 text-right">
                <span className="block font-sans text-xs uppercase tracking-[0.3em] text-[#A0AEC0]">Rank</span>
                <span className="font-sans font-black text-3xl text-white mt-1 block">458,990</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#07121F] border border-white/10 p-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00D4FF]">Solved</span>
                <p className="font-sans font-black text-4xl text-white mt-3">305</p>
                <span className="text-[10px] text-[#A0AEC0] uppercase tracking-widest">of 3,977 total</span>
              </div>
              <div className="rounded-3xl bg-[#07121F] border border-white/10 p-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00D4FF]">Attempting</span>
                <p className="font-sans font-black text-4xl text-white mt-3">59</p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-[#0A152A]/90 border border-white/10 p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00D4FF]">Difficulty Breakdown</span>
                <span className="font-sans text-[10px] uppercase text-[#A0AEC0]">Total 2,977</span>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-[1fr_auto] items-center gap-3">
                  <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: "16%" }} />
                  </div>
                  <span className="font-mono text-[10px] text-[#A0AEC0]">Easy 156/951</span>
                </div>
                <div className="grid grid-cols-[1fr_auto] items-center gap-3">
                  <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full bg-amber-500" style={{ width: "24%" }} />
                  </div>
                  <span className="font-mono text-[10px] text-[#A0AEC0]">Med. 141/2077</span>
                </div>
                <div className="grid grid-cols-[1fr_auto] items-center gap-3">
                  <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full bg-red-500" style={{ width: "8%" }} />
                  </div>
                  <span className="font-mono text-[10px] text-[#A0AEC0]">Hard 8/949</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col gap-5">
            <div className="flex items-center gap-3 rounded-3xl bg-[#0C1322]/90 p-4 border border-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00D4FF]/10 text-[#00D4FF]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#A0AEC0]">Locked Badge</p>
                <p className="font-sans font-black text-sm text-white mt-1">Jun LeetCoding Challenge</p>
              </div>
            </div>

            <div className="rounded-3xl bg-[#0B1424]/90 border border-white/10 p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00D4FF]">Badges</span>
                <span className="font-sans font-black text-2xl text-white">0</span>
              </div>
              <p className="font-sans text-[11px] text-[#A0AEC0] mt-3 leading-relaxed">
                Currently focused on consistent problem solving and rating improvement across core algorithm categories.
              </p>
            </div>

            <div className="rounded-3xl bg-[#07111E]/90 border border-white/10 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#00D4FF]">Community Views</p>
                  <p className="font-sans text-2xl font-black text-white mt-2">14</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#00D4FF]">Solutions</p>
                  <p className="font-sans text-2xl font-black text-white mt-2">2</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#0C1322]/90 border border-white/10 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#00D4FF]/10 p-2">
                  <ShieldCheck className="w-4 h-4 text-[#00D4FF]" />
                </div>
                <p className="font-sans text-[11px] text-[#A0AEC0] leading-relaxed">
                  Profile rank and solved problem count are updated from the latest LeetCode screenshot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
