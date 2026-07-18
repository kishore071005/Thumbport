import { Sparkles, BookOpen, Layers } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bg-card border-t border-border-dark">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-accent-orange/6 blur-[180px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-orange/4 blur-[150px] pointer-events-none translate-x-1/4 translate-y-1/4" />

      <div className="w-full px-8 md:px-20 xl:px-32 py-28 relative z-10">

        {/* Top label */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-orange-dim border border-accent-orange/20 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-orange" />
          <span className="text-xs font-bold text-accent-orange uppercase tracking-widest font-sans">
            Biography
          </span>
        </div>

        {/* Giant heading */}
        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tighter text-text-white mb-5 uppercase">
          The Designer<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-orange-light to-accent-amber">
            Behind The
          </span><br />
          Thumbnails.
        </h2>

        {/* Divider */}
        <div className="w-16 h-1 bg-accent-orange rounded-full mb-8" />

        {/* Bio paragraphs */}
        <div className="space-y-4 font-sans text-text-dim text-base md:text-lg leading-relaxed font-light max-w-3xl mb-12">
          <p>
            Hi, I'm <strong className="text-text-white font-semibold">Nanda Kishore</strong> — a freelance YouTube thumbnail designer focused on creating visuals that capture attention and drive clicks.
          </p>
          <p>
            I study what makes people stop scrolling — visual storytelling, color psychology, bold typography, and composition — and apply that to every thumbnail I create.
          </p>
          <p>
            Continuously improving, experimenting with different visual styles, and building real-world design experience one thumbnail at a time.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
          {[
            { icon: BookOpen, label: 'CTR Study', desc: 'Visual hooks designed to capture curiosity and boost click-through rates.' },
            { icon: Layers,   label: 'Composition', desc: 'Strong subject separation, depth layers, and clean visual hierarchy.' },
            { icon: Sparkles, label: 'Color Grading', desc: 'Vibrant, bold contrast that pops on every screen size.' },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="p-6 rounded-2xl border border-border-dark bg-bg-dark/50 flex flex-col gap-3 hover:border-accent-orange/40 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent-orange" />
              </div>
              <h4 className="font-display font-bold text-base uppercase tracking-wider text-text-white">{label}</h4>
              <p className="font-sans text-sm text-text-dim leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
