import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'À propos', href: `#${SectionId.ABOUT}` },
    { label: 'Compétences', href: `#${SectionId.SKILLS}` },
    { label: 'Projets', href: `#${SectionId.PROJECTS}` },
    { label: 'Contact', href: `#${SectionId.CONTACT}` },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-slate-950/70 backdrop-blur-xl border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-rose-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-slate-950 p-2 rounded-lg border border-white/10">
              <Sparkles className="w-5 h-5 text-orange-400" />
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Ibrahim<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">Barry</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-white font-medium transition-colors text-sm tracking-wide relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-rose-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="/cv.ibrahim barry.pdf"
            download
            className="px-6 py-2.5 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-medium backdrop-blur-md"
          >
            CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-6 flex flex-col items-center space-y-6 animate-fadeIn">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-white text-lg font-medium transition-all duration-300 hover:scale-110 animate-slideInRight"
              style={{animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.ibrahim barry.pdf"
            download
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-rose-600 text-white rounded-full shadow-lg shadow-orange-500/20"
          >
            Télécharger CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
