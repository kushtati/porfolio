import { ArrowRight, Github, Mail } from 'lucide-react';
import { SectionId } from '../types';
import { DEV_NAME, DEV_ROLE, SOCIAL_LINKS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero: React.FC = () => {
  const contentRef = useScrollReveal();
  const imageRef = useScrollReveal(0.2);

  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none"></div>
      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        
        <div ref={contentRef} className="space-y-8 text-center md:text-left scroll-reveal-left">
          {/* Status Pill */}
          <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-lg">
            <span className="flex h-2 w-2 relative mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-slate-200 text-xs font-medium tracking-wider uppercase">Disponible</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight text-white">
            Créativité <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-500 to-purple-600 animate-gradient-x">
              & Intelligence
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light max-w-xl mx-auto md:mx-0 leading-relaxed">
            Bonjour, je suis <strong className="text-white">{DEV_NAME}</strong>. {DEV_ROLE}, je crée des expériences digitales aussi naturelles qu'un coucher de soleil et aussi précises qu'une horloge.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4 w-full">
            <a 
              href={`#${SectionId.PROJECTS}`}
              className="group w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.5)]"
            >
              Voir mes projets
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={`#${SectionId.CONTACT}`}
              className="w-full sm:w-auto px-8 py-4 glass text-white rounded-full font-medium transition-all hover:bg-white/10 hover:border-white/20 text-center"
            >
              Discutons
            </a>
          </div>

          <div className="pt-8 flex items-center justify-center md:justify-start space-x-6">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-all duration-300 hover:bg-white/5 hover:scale-110 rounded-full">
              <Github className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.email} className="p-2 text-slate-400 hover:text-white transition-all duration-300 hover:bg-white/5 hover:scale-110 rounded-full">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Visual Element */}
        <div ref={imageRef} className="hidden md:flex justify-end relative scroll-reveal-right">
          <div className="relative w-[400px] h-[500px]">
            {/* Decorative Gradient Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-orange-500/30 to-rose-500/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white/10 rounded-full animate-[spin_15s_linear_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
