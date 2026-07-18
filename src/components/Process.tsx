import { motion } from 'framer-motion';
import { Lightbulb, Eye, Paintbrush, CheckCircle2 } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Analyze the video draft, subject topic, target audience demographics, and core narrative hook. Understanding the story is the absolute starting point.',
      icon: <Lightbulb className="w-5 h-5 text-accent-orange" />
    },
    {
      num: '02',
      title: 'Concept',
      desc: 'Formulate compositional sketches, plan focal placements, write down primary copy typography ideas, and establish contrasting color schemes.',
      icon: <Eye className="w-5 h-5 text-accent-orange" />
    },
    {
      num: '03',
      title: 'Design',
      desc: 'Execute visual assets creation, subject color-grading, light sourcing adjustments, background integrations, and text rendering with shadow outline depth.',
      icon: <Paintbrush className="w-5 h-5 text-accent-orange" />
    },
    {
      num: '04',
      title: 'Refine',
      desc: 'Review thumbnail scaling sizes (sidebar, main feed, mobile), run text legibility checks, adjust color contrast intensity, and export in maximum resolution.',
      icon: <CheckCircle2 className="w-5 h-5 text-accent-orange" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent-orange/3 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-black tracking-widest text-accent-orange uppercase font-sans">
            Workflow
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-text-white mt-2 uppercase">
            My Design Process
          </h2>
          <div className="w-16 h-1 bg-accent-orange mx-auto my-4 rounded-full" />
          <p className="font-sans text-text-dim text-sm sm:text-base leading-relaxed">
            From the initial video script to the final high-impact upload. A systematic approach to creating thumbnails that capture clicks.
          </p>
        </div>

        {/* Process Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-border-dark z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-10 group"
            >
              {/* Step indicator circle */}
              <div className="w-14 h-14 rounded-full bg-bg-card border-2 border-border-dark flex items-center justify-center mb-6 group-hover:border-accent-orange transition-all duration-300 shadow-lg relative bg-bg-dark">
                {step.icon}
                {/* Micro numerical tag */}
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent-orange text-[9px] font-black text-bg-dark flex items-center justify-center font-sans">
                  {step.num}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="font-display font-extrabold text-xl text-text-white mb-3 uppercase group-hover:text-accent-orange transition-colors">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="font-sans text-xs sm:text-sm text-text-dim leading-relaxed font-light max-w-[280px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
