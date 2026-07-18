import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Zap, CheckCircle } from 'lucide-react';

export default function Outreach() {
  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background neon highlight */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-orange/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Messaging */}
          <div className="lg:col-span-6">
            <span className="text-xs font-black tracking-widest text-accent-orange uppercase font-sans">
              Outreach Strategy
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-text-white mt-2 mb-6 uppercase leading-tight">
              Built for Creators.
            </h2>
            <div className="w-16 h-1 bg-accent-orange mb-8 rounded-full" />

            <div className="space-y-6 font-sans text-text-dim text-sm sm:text-base leading-relaxed font-light">
              <p className="text-text-white font-semibold text-lg">
                "I don't just send a portfolio link."
              </p>
              <p>
                When I discover a creator whose content I enjoy, I may create a thumbnail concept for one of their videos to demonstrate how I can contribute.
              </p>
              <p>
                This creative outreach approach allows you to see the exact composition, color grading, and psychological click hooks tailored specifically to your channel's target audience before we even start a contract.
              </p>
            </div>

            {/* List details */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-orange flex-shrink-0" />
                <span className="font-sans text-xs sm:text-sm text-text-white font-medium">No generic templates, only custom-tailored branding</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-orange flex-shrink-0" />
                <span className="font-sans text-xs sm:text-sm text-text-white font-medium">Concept mockups sent directly to show practical value</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-orange flex-shrink-0" />
                <span className="font-sans text-xs sm:text-sm text-text-white font-medium">Constructive adjustments made instantly based on your feedback</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Infographic Concept */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[480px] p-6 rounded-2xl border border-border-light bg-bg-card glass-card relative"
            >
              <div className="absolute top-4 right-4 text-[9px] font-black tracking-widest text-accent-orange uppercase px-2.5 py-1 bg-accent-orange-dim border border-accent-orange/20 rounded">
                Approach
              </div>
              <h4 className="font-display font-black text-sm uppercase tracking-wider text-text-white mb-6">
                Outreach Concept In Action
              </h4>

              {/* Graphic Flow Layout */}
              <div className="space-y-6 relative">
                {/* Connector line */}
                <div className="absolute top-6 bottom-6 left-[22px] w-[2px] bg-border-dark" />

                {/* Box 1: Discovery */}
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-bg-dark border border-border-dark flex items-center justify-center text-text-white font-bold group-hover:border-accent-orange">
                    <Lightbulb className="w-5 h-5 text-text-dim" />
                  </div>
                  <div className="flex-1 bg-bg-dark/50 border border-border-dark/80 p-3.5 rounded-lg">
                    <span className="block text-[10px] font-bold text-accent-orange uppercase tracking-wider mb-1">Step 01: Discover</span>
                    <p className="text-[11px] font-sans text-text-dim leading-relaxed">
                      I find a channel I enjoy and identify a video that deserves a higher click-through rate.
                    </p>
                  </div>
                </div>

                {/* Box 2: Analysis */}
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-bg-dark border border-border-dark flex items-center justify-center text-text-white font-bold">
                    <Zap className="w-5 h-5 text-text-dim" />
                  </div>
                  <div className="flex-1 bg-bg-dark/50 border border-border-dark/80 p-3.5 rounded-lg">
                    <span className="block text-[10px] font-bold text-accent-orange uppercase tracking-wider mb-1">Step 02: Design Hook</span>
                    <p className="text-[11px] font-sans text-text-dim leading-relaxed">
                      I brainstorm visual stories and design a completely new custom concept thumbnail from scratch.
                    </p>
                  </div>
                </div>

                {/* Box 3: Delivery */}
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-accent-orange flex items-center justify-center text-bg-dark font-bold shadow-lg shadow-accent-orange/20">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <div className="flex-1 bg-bg-dark/50 border border-accent-orange/30 p-3.5 rounded-lg">
                    <span className="block text-[10px] font-bold text-accent-orange uppercase tracking-wider mb-1">Step 03: The Pitch</span>
                    <p className="text-[11px] font-sans text-text-dim leading-relaxed">
                      I send the finished high-fidelity mockup to the creator as a direct illustration of how I can elevate their CTR.
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
