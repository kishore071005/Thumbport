import { motion } from 'framer-motion';
import { Eye, ShieldAlert, Sparkles, Zap } from 'lucide-react';

export default function DesignThinking() {
  const cards = [
    {
      num: '01',
      title: 'Attention',
      desc: 'Create an immediate visual hook. A thumbnail has less than a second to capture a viewer\'s gaze in a scrolling feed. I design focal points that command attention.',
      icon: <Eye className="w-5 h-5 text-accent-orange" />
    },
    {
      num: '02',
      title: 'Clarity',
      desc: 'Make the video idea easy to understand instantly. Obscure compositions confuse viewers. I balance subject separation and typography so the core concept is delivered at a glance.',
      icon: <Zap className="w-5 h-5 text-accent-orange" />
    },
    {
      num: '03',
      title: 'Curiosity',
      desc: 'Give viewers a reason to want to know more. By using visual storytelling, expressions, and unresolved hooks, I prompt the immediate curiosity needed to drive click-through intent.',
      icon: <ShieldAlert className="w-5 h-5 text-accent-orange" />
    },
    {
      num: '04',
      title: 'Impact',
      desc: 'Make the thumbnail stand out in a crowded feed. Using color graded separation, high contrast lighting, and clean typography layouts, my designs command authority on any device size.',
      icon: <Sparkles className="w-5 h-5 text-accent-orange" />
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
  };

  return (
    <section className="py-24 bg-bg-card relative border-t border-b border-border-dark overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-[300px] h-[300px] rounded-full bg-accent-orange/2 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-black tracking-widest text-accent-orange uppercase font-sans">
              Visual Strategy
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-text-white mt-2 uppercase leading-tight">
              More than just<br className="hidden sm:block" /> a pretty image.
            </h2>
            <div className="w-16 h-1 bg-accent-orange mt-4 rounded-full" />
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-text-dim text-sm sm:text-base leading-relaxed">
              Every thumbnail has a job: communicate the video topic quickly, create strong curiosity, and stand out in a crowded feed. My design process focuses on creating visual clarity and strong first impressions.
            </p>
          </div>
        </div>

        {/* Strategy Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-6 md:p-8 rounded-xl border border-border-dark bg-bg-dark/60 hover:bg-bg-dark/90 hover:border-accent-orange/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-display font-black text-3xl text-border-light group-hover:text-accent-orange transition-colors">
                    {card.num}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-bg-card flex items-center justify-center border border-border-dark group-hover:border-accent-orange/20 transition-all">
                    {card.icon}
                  </div>
                </div>
                <h3 className="font-display font-extrabold text-lg text-text-white mb-3 uppercase group-hover:text-accent-orange transition-colors">
                  {card.title}
                </h3>
                <p className="font-sans text-xs text-text-dim leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
              <div className="w-full h-0.5 bg-border-dark group-hover:bg-accent-orange transition-all mt-6" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
