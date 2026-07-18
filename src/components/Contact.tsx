import { Mail, Instagram, MessageCircle, ArrowRight, User } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      name: 'Email Address',
      value: 'nemmadi24@gmail.com',
      href: 'mailto:nemmadi24@gmail.com',
      icon: <Mail className="w-5 h-5 text-accent-orange" />,
      tag: 'nemmadi24@gmail.com'
    },
    {
      name: 'Instagram DM',
      value: '@contcreate2410',
      href: 'https://www.instagram.com/contcreate2410',
      icon: <Instagram className="w-5 h-5 text-accent-orange" />,
      tag: 'Follow & DM'
    },
    {
      name: 'WhatsApp Chat',
      value: '+91 8143272410',
      href: 'https://wa.me/918143272410',
      icon: <MessageCircle className="w-5 h-5 text-accent-orange" />,
      tag: 'Chat instantly'
    }
  ];

  return (
    <section id="contact" className="py-28 bg-bg-card border-t border-border-dark relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-accent-orange/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <span className="text-xs font-black tracking-widest text-accent-orange uppercase font-sans">
              Collaborate
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-white mt-2 mb-6 uppercase leading-[1.0] tracking-tighter">
              Let's make your next video<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-accent-amber">
                impossible to ignore.
              </span>
            </h2>
            <div className="w-16 h-1 bg-accent-orange mb-6 rounded-full" />
            
            <p className="font-sans text-text-dim text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-light">
              Have a video draft or an idea that deserves a stronger first impression? Let's create a custom thumbnail concept that makes people stop scrolling and click.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="mailto:nemmadi24@gmail.com"
                className="px-8 py-4 bg-accent-orange hover:bg-accent-orange-light text-bg-dark font-sans text-xs sm:text-sm font-bold rounded-xl transition-all shadow-lg hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#work"
                className="px-8 py-4 border border-border-light hover:border-text-white bg-bg-dark/40 text-text-white font-sans text-xs sm:text-sm font-bold rounded-xl transition-all hover:-translate-y-0.5 text-center flex items-center justify-center"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Contact Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-4">
            
            {/* Owner card info */}
            <div className="p-5 rounded-xl border border-border-dark bg-bg-dark/40 flex items-center gap-4 mb-4">
              <div className="w-11 h-11 rounded-full bg-accent-orange-dim border border-accent-orange/20 flex items-center justify-center">
                <User className="w-5 h-5 text-accent-orange" />
              </div>
              <div>
                <h4 className="font-display font-black text-xs uppercase tracking-wider text-text-white">Nanda Kishore</h4>
                <p className="font-sans text-[11px] text-text-dim">Freelance YouTube Thumbnail Designer</p>
              </div>
            </div>

            {/* Direct communication options */}
            <div className="space-y-4">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-6 rounded-xl border border-border-dark bg-bg-dark/40 hover:bg-bg-dark/80 hover:border-accent-orange/40 transition-all duration-300 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-lg bg-bg-card flex items-center justify-center border border-border-dark group-hover:border-accent-orange/20 transition-all">
                      {method.icon}
                    </div>
                    <div>
                      <span className="block font-sans text-[10px] font-bold text-text-dim uppercase tracking-wider mb-0.5">
                        {method.name}
                      </span>
                      <span className="block font-display font-bold text-sm sm:text-base text-text-white group-hover:text-accent-orange transition-colors">
                        {method.value}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-dim group-hover:text-text-white transition-colors bg-bg-card border border-border-dark px-3 py-1.5 rounded-lg group-hover:border-border-light shadow">
                    {method.tag}
                  </span>
                </a>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
