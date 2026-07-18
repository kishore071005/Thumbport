import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left Side Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 transition-transform duration-300 group-hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" rx="20" fill="#121214" stroke="#FF5A1F" stroke-width="4"/>
              <polygon points="45,35 65,50 45,65" fill="#FF5A1F"/>
              <line x1="20" y1="80" x2="80" y2="80" stroke="#FF5A1F" stroke-width="6" stroke-linecap="round"/>
            </svg>
          </div>
          <div>
            <span className="block font-display text-lg font-black tracking-tight text-text-white group-hover:text-accent-orange transition-colors">
              NANDA KISHORE
            </span>
            <span className="block font-sans text-xs font-semibold tracking-wider text-accent-orange uppercase -mt-1">
              Thumbnail Designer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-dim hover:text-text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-5 py-2.5 bg-accent-orange hover:bg-accent-orange-light text-bg-dark font-sans text-sm font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent-orange/20 hover:shadow-accent-orange/40 hover:-translate-y-0.5"
          >
            Let's Work Together
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-text-white hover:text-accent-orange transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`fixed inset-0 top-[72px] w-full bg-bg-dark/98 backdrop-blur-lg md:hidden z-40 transition-all duration-300 ease-in-out border-t border-border-dark ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-8 px-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display font-semibold text-text-dim hover:text-text-white transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 w-full max-w-xs py-4 bg-accent-orange hover:bg-accent-orange-light text-bg-dark font-display text-lg font-bold rounded-xl transition-all shadow-lg"
          >
            Let's Work Together
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
