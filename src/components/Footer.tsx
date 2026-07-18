import { Mail, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/contcreate2410', icon: <Instagram className="w-4 h-4" /> },
    { name: 'Email', href: 'mailto:nemmadi24@gmail.com', icon: <Mail className="w-4 h-4" /> },
    { name: 'WhatsApp', href: 'https://wa.me/918143272410', icon: <MessageCircle className="w-4 h-4" /> },
  ];

  const quickLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-bg-dark border-t border-border-dark py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-12">
          
          {/* Logo & Tagline column */}
          <div className="md:col-span-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
                  <rect width="100" height="100" rx="20" fill="#121214" stroke="#FF5A1F" stroke-width="4"/>
                  <polygon points="45,35 65,50 45,65" fill="#FF5A1F"/>
                </svg>
              </div>
              <span className="font-display font-black text-base tracking-tight text-text-white uppercase">
                Nanda Kishore
              </span>
            </div>
            <p className="font-sans text-xs text-text-dim max-w-sm mb-2 leading-relaxed">
              Freelance YouTube Thumbnail Designer
            </p>
            <p className="font-sans text-[11px] italic text-accent-orange">
              "Designing the first impression of your video."
            </p>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 flex justify-center md:justify-start gap-8">
            <div className="flex flex-col gap-3 items-center md:items-start">
              <span className="font-display font-bold text-xs uppercase tracking-wider text-text-white mb-1">
                Navigation
              </span>
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs text-text-dim hover:text-text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social connections */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start gap-4">
            <span className="font-display font-bold text-xs uppercase tracking-wider text-text-white">
              Connect
            </span>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-bg-card border border-border-dark flex items-center justify-center text-text-dim hover:text-accent-orange hover:border-accent-orange/40 transition-all duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Separator / Copyright line */}
        <div className="border-t border-border-dark pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="font-sans text-[10px] text-text-dim">
            &copy; {currentYear} Nanda Kishore. All rights reserved. Labeled projects are conceptual designs created for skill-building.
          </p>
          <p className="font-sans text-[10px] text-text-dim flex items-center gap-1">
            Made for Creators <span className="text-accent-orange">🔥</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
