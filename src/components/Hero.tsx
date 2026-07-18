import { ArrowDown, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-bg-dark">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent-orange/5 blur-[160px] pointer-events-none" />

      <div className="w-full px-8 md:px-20 xl:px-32 pt-28 pb-20 z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-orange-dim border border-accent-orange/20 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
          <span className="text-xs font-bold text-accent-orange uppercase tracking-widest font-sans">
            Freelance YouTube Thumbnail Designer
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-[0.92] tracking-tighter text-text-white mb-5 uppercase">
          Nanda<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-orange-light to-accent-amber">
            Kishore
          </span>
        </h1>

        {/* Divider */}
        <div className="w-16 h-1 bg-accent-orange rounded-full mb-6" />

        {/* Bio text */}
        <div className="space-y-4 font-sans text-text-dim text-base md:text-lg leading-relaxed font-light max-w-3xl mb-10">
          <p>
            Hi, I'm <strong className="text-text-white font-semibold">Nanda Kishore</strong> — a freelance YouTube thumbnail designer focused on creating visuals that capture attention and drive clicks.
          </p>
          <p>
            I study what makes people stop scrolling — visual storytelling, color psychology, bold typography, and composition — and apply that to every thumbnail I create.
          </p>
          <p>
            I work with YouTubers and content creators who want thumbnails that convert viewers into clicks.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#work"
            className="px-8 py-4 bg-accent-orange hover:bg-accent-orange-light text-bg-dark font-sans text-base font-bold rounded-xl transition-all duration-300 shadow-xl shadow-accent-orange/15 hover:shadow-accent-orange/30 hover:-translate-y-1 text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-border-light hover:border-text-white bg-bg-card/40 hover:bg-bg-card text-text-white font-sans text-base font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 text-accent-orange" />
            Let's Talk
          </a>
        </div>

      </div>

      {/* Down arrow */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
        onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-sans text-[10px] uppercase font-bold tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 text-accent-orange" />
      </div>
    </section>
  );
}
