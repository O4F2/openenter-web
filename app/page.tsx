"use client";

import { Playfair_Display, Inter } from "next/font/google";
import { ArrowRight, Instagram, Check, Copy } from "lucide-react";
import { useState } from "react";

// 폰트 설정: 고급스러운 세리프(Playfair) + 깔끔한 산세리프(Inter)
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function Home() {

  // 복사 상태 관리 (false: 기본, true: 복사완료)
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@openenter.xyz");
    setIsCopied(true);

    // 2초 뒤에 다시 원래대로 복구
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <main className={`min-h-screen bg-[#050505] text-white selection:bg-[#C0A062] selection:text-black ${inter.className}`}>

      {/* Navigation (Simple) */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-20 mix-blend-difference">
        <div className={`${playfair.className} text-2xl font-bold tracking-tight text-white`}>
          OpenEnter
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#services" className="hover:text-[#C0A062] transition-colors">Services</a>
          <a href="#team" className="hover:text-[#C0A062] transition-colors">Team</a>
        </div>
        <a href="#contact" className="hidden md:flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/5">
          Contact Us
        </a>
      </nav>

      {/* 1. HERO SECTION: 고급스러운 분위기 */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        {/* 배경 조명 효과 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#C0A062] rounded-full blur-[180px] opacity-10 pointer-events-none"></div>

        <div className="text-center z-10 max-w-5xl mx-auto">
          <h1 className={`${playfair.className} text-5xl md:text-8xl font-bold tracking-tight leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60`}>
            Open Events,<br />Enter New Markets.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            We bridge the gap between Web2 & Web3. <br className="hidden md:block" />
            The premier agency for event operations and market entry strategy.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="flex items-center justify-center gap-2 px-10 py-4 bg-[#C0A062] text-black rounded-full font-medium hover:bg-[#d4b475] transition-colors">
              Start Project
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="flex items-center justify-center gap-2 px-10 py-4 bg-white/5 text-white rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-32 px-4 md:px-12 relative z-10 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>
              What We Do
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
              From on-the-ground event management to high-level strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 01 */}
            <div className="p-10 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#C0A062]/50 transition-colors duration-300 group">
              <div className="text-[#C0A062] text-sm font-medium mb-4 uppercase tracking-wider">01. Open</div>
              <h3 className={`${playfair.className} text-2xl font-bold mb-4 text-white group-hover:text-[#C0A062] transition-colors`}>Event Ops</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                Comprehensive management for offline & online events. We handle the chaos so you can focus on the vision.
              </p>
            </div>

            {/* Service 02 */}
            <div className="p-10 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#C0A062]/50 transition-colors duration-300 group">
              <div className="text-[#C0A062] text-sm font-medium mb-4 uppercase tracking-wider">02. Connect</div>
              <h3 className={`${playfair.className} text-2xl font-bold mb-4 text-white group-hover:text-[#C0A062] transition-colors`}>Influencers</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                Access to a vetted network of Web3 influencers and professional cosplayers to amplify your brand presence.
              </p>
            </div>

            {/* Service 03 */}
            <div className="p-10 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#C0A062]/50 transition-colors duration-300 group">
              <div className="text-[#C0A062] text-sm font-medium mb-4 uppercase tracking-wider">03. Enter</div>
              <h3 className={`${playfair.className} text-2xl font-bold mb-4 text-white group-hover:text-[#C0A062] transition-colors`}>Go-To-Market</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                Strategic consulting for Web2 companies entering the Web3 space. We build the bridge to your new audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TEAM SECTION (업데이트됨) */}
      <section id="team" className="py-32 px-4 md:px-12 relative z-10 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>
              Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">


            {/* Profile 1: Joseph */}
            <div className="p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:bg-white/5 transition-all duration-300 flex flex-col items-start">
              <div className="mb-6">
                <h3 className={`${playfair.className} text-3xl font-bold mb-2`}>Joseph</h3>
                <p className="text-[#C0A062] text-xs font-bold uppercase tracking-widest">Founder & Strategy</p>
              </div>

              <div className="w-full h-[1px] bg-white/10 mb-6"></div>

              <ul className="space-y-4 text-gray-400 font-light text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-[#C0A062] mt-1">✦</span>
                  <span>Ex-Finance at Global Top-tier Tech Giant</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C0A062] mt-1">✦</span>
                  <span>F&B Franchise Founder & CEO</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C0A062] mt-1">✦</span>
                  <span>Influential Web3 Community Operator</span>
                </li>
              </ul>
            </div>
            {/* Profile 2: Jack */}
            <div className="p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:bg-white/5 transition-all duration-300 flex flex-col items-start">
              <div className="mb-6">
                <h3 className={`${playfair.className} text-3xl font-bold mb-2`}>Jack</h3>
                <p className="text-[#C0A062] text-xs font-bold uppercase tracking-widest">Co-Founder & Ops</p>
              </div>

              <div className="w-full h-[1px] bg-white/10 mb-6"></div>

              <ul className="space-y-4 text-gray-400 font-light text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-[#C0A062] mt-1">✦</span>
                  <span>VC-backed Serial Entrepreneur</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C0A062] mt-1">✦</span>
                  <span>Global Startup Operations Experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C0A062] mt-1">✦</span>
                  <span>Web3 Strategist & Enthusiast</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER (Updated functionality) */}
      <footer id="contact" className="py-24 px-4 text-center bg-[#050505] relative overflow-hidden z-10 border-t border-white/5">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold mb-10 leading-tight`}>
            Ready to Enter?
          </h2>

          <div className="flex flex-col gap-8 items-center">

            {/* 복사 버튼 영역 */}
            <div className="relative">
              <button
                onClick={handleCopyEmail}
                className="group flex items-center gap-3 text-lg md:text-xl text-[#C0A062] hover:text-white transition-colors font-light tracking-wider border-b border-[#C0A062]/30 pb-1 hover:border-[#C0A062]"
              >
                contact@openenter.xyz
                {/* 복사 아이콘 (평소엔 Copy, 복사되면 Check) */}
                {isCopied ? <Check size={18} className="text-[#00ff00]" /> : <Copy size={18} className="opacity-50 group-hover:opacity-100" />}
              </button>

              {/* 복사 완료 메시지 (애니메이션) */}
              <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#00ff00] transition-opacity duration-300 ${isCopied ? 'opacity-100' : 'opacity-0'}`}>
                Copied to clipboard!
              </div>
            </div>

            <div className="flex gap-6 mt-4">
              {/* X (Twitter) */}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>

            <p className="text-gray-600 text-xs font-light mt-16 uppercase tracking-widest">
              © 2026 OpenEnter. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}