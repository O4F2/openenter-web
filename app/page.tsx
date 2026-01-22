import { Oswald, Inter } from "next/font/google";
import { CornerDownLeft, ArrowRight, Instagram, Twitter, Mail } from "lucide-react";
import Link from "next/link"; // Although user didn't explicitly ask for Link, it's good practice. But button is scrollTo.

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

export default function Home() {
  return (
    <main className={`min-h-screen bg-black text-white selection:bg-[#00ff00] selection:text-black ${inter.className}`}>
      
      {/* 1. Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center p-4 relative border-b border-white/20">
        <div className="text-center z-10">
          <h1 className={`${oswald.className} text-[12vw] leading-none font-bold tracking-tighter mix-blend-difference`}>
            OPENENTER
            <span className="inline-block ml-2 align-middle text-[#00ff00]">
              <CornerDownLeft size="0.7em" strokeWidth={4} />
            </span>
          </h1>
          
          <p className={`${oswald.className} text-xl md:text-3xl mt-4 uppercase tracking-[0.2em] text-gray-400`}>
            Open Events, Enter Markets.
          </p>
          
          <p className="max-w-md mx-auto mt-8 text-gray-500 text-sm md:text-base">
            We help you <span className="text-white font-bold">'open'</span> events and <span className="text-white font-bold">'enter'</span> new markets. 
            The bridge between Web2 & Web3 culture.
          </p>

          <a href="#footer" className="group mt-12 inline-flex items-center gap-2 px-8 py-4 border border-white hover:bg-[#00ff00] hover:text-black hover:border-[#00ff00] transition-all duration-300 font-bold uppercase tracking-widest">
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Decorative Grid Background (Optional, kept minimal) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-0 pointer-events-none"></div>
      </section>

      {/* 2. Service Section */}
      <section className="py-24 px-4 md:px-12 border-b border-white/20">
        <div className="max-w-7xl mx-auto">
          <h2 className={`${oswald.className} text-5xl md:text-7xl font-bold mb-16 uppercase tracking-tight`}>
            What We Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-white/20">
            {/* Card 1 */}
            <div className="group border-r border-b border-white/20 p-8 md:p-12 min-h-[400px] flex flex-col justify-between hover:bg-[#111] transition-colors">
              <span className="text-[#00ff00] font-mono text-sm">01</span>
              <div>
                <h3 className={`${oswald.className} text-4xl mb-4`}>Open Events</h3>
                <p className="text-gray-400">Offline & Online Event Management. We create immersive experiences that bridge the gap between digital and physical.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group border-r border-b border-white/20 p-8 md:p-12 min-h-[400px] flex flex-col justify-between hover:bg-[#111] transition-colors">
              <span className="text-[#00ff00] font-mono text-sm">02</span>
              <div>
                <h3 className={`${oswald.className} text-4xl mb-4`}>Connect People</h3>
                <p className="text-gray-400">Influencer & Cosplayer Network. Building community through shared passions and authentic connections.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group border-r border-b border-white/20 p-8 md:p-12 min-h-[400px] flex flex-col justify-between hover:bg-[#111] transition-colors">
              <span className="text-[#00ff00] font-mono text-sm">03</span>
              <div>
                <h3 className={`${oswald.className} text-4xl mb-4`}>Enter Markets</h3>
                <p className="text-gray-400">Web3 Go-to-Market Strategy. Navigating the complex landscape of decentralized markets with precision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team Section */}
      <section className="py-24 px-4 md:px-12 border-b border-white/20">
        <div className="max-w-7xl mx-auto">
          <h2 className={`${oswald.className} text-5xl md:text-7xl font-bold mb-16 uppercase tracking-tight text-right`}>
            Who We Are
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Profile 1 */}
            <div className="border border-white/20 p-8 relative hover:border-[#00ff00] transition-colors group">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#00ff00]">
                 <span className={`${oswald.className} uppercase`}>Founder</span>
              </div>
              <h3 className={`${oswald.className} text-3xl mb-2`}>Founder</h3>
              <p className="text-gray-500 font-mono text-sm mb-4">Ex-BNDRS, Crypto Researcher</p>
              <div className="w-full h-[1px] bg-white/20 my-6"></div>
              <p className="text-gray-400 leading-relaxed">
                Visionary leader with deep roots in the crypto ecosystem. Focused on opening new pathways for Web3 adoption.
              </p>
            </div>

            {/* Profile 2 */}
            <div className="border border-white/20 p-8 relative hover:border-[#00ff00] transition-colors group">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#00ff00]">
                 <span className={`${oswald.className} uppercase`}>Co-Founder</span>
              </div>
              <h3 className={`${oswald.className} text-3xl mb-2`}>Joseph</h3>
              <p className="text-gray-500 font-mono text-sm mb-4">Co-founder, Ops Specialist</p>
              <div className="w-full h-[1px] bg-white/20 my-6"></div>
              <p className="text-gray-400 leading-relaxed">
                Operational mastermind ensuring seamless execution. Expert in bridging strategy with day-to-day reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer id="footer" className="py-24 px-4 text-center bg-[#050505]">
        <h2 className={`${oswald.className} text-6xl md:text-9xl font-bold tracking-tighter mb-8 hover:text-[#00ff00] transition-colors cursor-default`}>
          READY TO ENTER?
        </h2>
        
        <a href="mailto:contact@openenter.xyz" className="text-xl md:text-2xl hover:underline decoration-[#00ff00] decoration-2 underline-offset-8">
          contact@openenter.xyz
        </a>
        
        <div className="mt-24 text-gray-600 font-mono text-sm">
          <p>© 2026 OPENENTER. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
