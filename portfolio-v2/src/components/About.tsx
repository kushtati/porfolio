import { MapPin, Mail, Phone, User } from 'lucide-react';
import { SectionId } from '../types';
import { DEV_NAME, DEV_EMAIL, DEV_LOCATION, DEV_PHONE } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const titleRef = useScrollReveal();
  const imageRef = useScrollReveal(0.15);
  const contentRef = useScrollReveal(0.2);

  return (
    <section id={SectionId.ABOUT} className="min-h-screen flex items-center py-20 md:py-32 relative px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div ref={titleRef} className="text-center mb-20 scroll-reveal">
          <span className="text-orange-400 font-medium tracking-wider text-sm uppercase mb-2 block">Qui suis-je ?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">À propos de moi</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative scroll-reveal-left">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="relative w-full h-full bg-gradient-to-br from-orange-500/20 to-rose-500/20 rounded-3xl p-2 border border-white/10">
                <img
                  src="/ib.png"
                  alt={DEV_NAME}
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl text-white text-6xl font-bold">IB</div>';
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6 scroll-reveal-right">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">
              Développeur Full Stack & Spécialiste en Intelligence Artificielle
            </h3>
            
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Passionné par le développement web et l'intelligence artificielle, je crée des applications 
                modernes qui allient <span className="text-orange-400 font-semibold">performance</span> et{' '}
                <span className="text-rose-400 font-semibold">intelligence</span>. Je maîtrise aussi bien 
                la création d'interfaces utilisateur attractives que le développement de fonctionnalités backend robustes.
              </p>
              
              <p>
                Mon expertise en <span className="text-purple-400 font-semibold">Machine Learning</span> et{' '}
                <span className="text-purple-400 font-semibold">Deep Learning</span> me permet d'intégrer des 
                capacités d'analyse prédictive et d'automatisation intelligente dans mes projets.
              </p>
              
              <p>
                Toujours en apprentissage, je reste à l'affût des dernières innovations technologiques 
                pour proposer des solutions modernes, efficaces et adaptées aux besoins actuels.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-slate-300 group hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                  <MapPin className="text-orange-400 w-5 h-5" />
                </div>
                <span>{DEV_LOCATION}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300 group hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                  <Mail className="text-orange-400 w-5 h-5" />
                </div>
                <a href={`mailto:${DEV_EMAIL}`} className="hover:text-orange-400 transition-colors">
                  {DEV_EMAIL}
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-300 group hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                  <Phone className="text-orange-400 w-5 h-5" />
                </div>
                <span>{DEV_PHONE}</span>
              </div>
            </div>

            <a
              href="/cv.ibrahim barry.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 mt-6"
            >
              <User className="w-5 h-5" />
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
