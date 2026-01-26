"use client";

import { Manrope } from "next/font/google";
import { ArrowDown, Copy, Check, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "600", "800"] });

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@openenter.co");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <main className={`min-h-screen bg-[#020202] text-[#E0E0E0] selection:bg-purple-500 selection:text-white ${manrope.className}`}>

      {/* Background Ambient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-purple-900/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Navbar: 수정됨 (Blur 효과 추가) */}
      <nav className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-50 bg-[#020202]/80 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="text-xl font-extrabold tracking-tighter text-white">
          OPENENTER<span className="text-purple-500">.</span>
        </div>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-xs font-bold uppercase tracking-widest border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all"
        >
          Contact
        </button>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Web3 Growth Agency</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-white">
          OPEN EVENTS,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-900">ENTER MARKETS.</span>
        </h1>

        <p className="max-w-xl text-lg text-gray-400 font-medium leading-relaxed mb-12">
          We architect the bridge between Web2 & Web3 cultures.<br className="hidden md:block" />
          From hyper-local events to global market penetration.
        </p>

        <div className="animate-bounce text-gray-600 mt-8">
          <ArrowDown size={24} />
        </div>
      </section>

      {/* 2. SERVICES */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 bg-[#050505] relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
          <div className="md:sticky md:top-32 h-fit">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Our<br />Capabilities
            </h2>
            <div className="w-12 h-1 bg-purple-600 mb-6"></div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              We provide end-to-end solutions for projects looking to establish a foothold in the Web3 ecosystem.
            </p>
          </div>

          <div className="space-y-6">
            <div className="group p-10 bg-[#0A0A0A] border border-white/5 hover:border-purple-500/30 rounded-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity text-purple-500">
                <ArrowUpRight size={32} />
              </div>
              <span className="text-xs font-mono text-purple-400 mb-4 block">01 / OPERATIONS</span>
              <h3 className="text-2xl font-bold text-white mb-3">Event Ops</h3>
              <p className="text-gray-400 leading-relaxed">
                Seamless management for hackathons, private parties, and conferences. We handle the on-ground chaos so you can focus on the vision.
              </p>
            </div>

            <div className="group p-10 bg-[#0A0A0A] border border-white/5 hover:border-purple-500/30 rounded-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity text-purple-500">
                <ArrowUpRight size={32} />
              </div>
              <span className="text-xs font-mono text-purple-400 mb-4 block">02 / NETWORK</span>
              <h3 className="text-2xl font-bold text-white mb-3">Influencer Network</h3>
              <p className="text-gray-400 leading-relaxed">
                Deploying a vetted squad of Cosplayers, Semi-influencers, and KOLs. We don't just bring numbers; we bring authentic vibe and traffic.
              </p>
            </div>

            <div className="group p-10 bg-[#0A0A0A] border border-white/5 hover:border-purple-500/30 rounded-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity text-purple-500">
                <ArrowUpRight size={32} />
              </div>
              <span className="text-xs font-mono text-purple-400 mb-4 block">03 / STRATEGY</span>
              <h3 className="text-2xl font-bold text-white mb-3">GTM Strategy</h3>
              <p className="text-gray-400 leading-relaxed">
                Strategic entry points for Web2 giants. We analyze, plan, and execute market penetration into the decentralized world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TEAM */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 bg-[#020202] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">The Operators</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Joseph */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-white/10 hover:border-purple-500/20 transition-all flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white">Joseph</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-purple-900/30 text-purple-300 rounded">Strategy</span>
                </div>
                <div className="space-y-2 text-sm text-gray-400 font-medium">
                  <p className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span> Ex-Global Tech Finance</p>
                  <p className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span> F&B Franchise Founder</p>
                  <p className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span> Web3 Community Leader</p>
                </div>
              </div>
            </div>

            {/* Jack */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-white/10 hover:border-blue-500/20 transition-all flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white">Jack</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-blue-900/30 text-blue-300 rounded">Operations</span>
                </div>
                <div className="space-y-2 text-sm text-gray-400 font-medium">
                  <p className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> VC-backed Founder</p>
                  <p className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Global Startup Ops</p>
                  <p className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Web3 Strategist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer id="contact" className="py-32 px-6 bg-black border-t border-white/5 relative overflow-hidden z-10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-purple-500 text-xs font-bold uppercase tracking-[0.2em] mb-8">
            Initiate Collaboration
          </p>

          <button
            onClick={handleCopyEmail}
            className="group relative block w-full"
          >
            {/* 수정됨: clamp 함수를 사용하여 최소 30px ~ 최대 50px(3rem)까지만 커지도록 제한 */}
            <span className="block text-[clamp(30px,5vw,3rem)] font-extrabold tracking-tighter text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-500 transition-all duration-300 break-all md:break-normal">
              contact@openenter.co
            </span>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
              {isCopied ?
                <><Check size={16} className="text-green-500" /> Email Copied</> :
                <><Copy size={16} /> Click to Copy</>
              }
            </div>
          </button>

          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono uppercase">
            <span>© 2026 OpenEnter.co</span>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="https://x.com" target="_blank" className="hover:text-white transition-colors">X (Twitter)</a>
              <a href="https://instagram.com" target="_blank" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}