import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { SectionId } from '../types';
import { PROJECTS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects: React.FC = () => {
  const titleRef = useScrollReveal();
  const projectRefs = PROJECTS.map((_, i) => useScrollReveal(0.1 + i * 0.1));

  return (
    <section id={SectionId.PROJECTS} className="min-h-screen flex items-center py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/20 relative">
      <div className="absolute inset-0 bg-gradient-to-tl from-rose-950/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end justify-between mb-20 scroll-reveal">
          <div>
            <span className="text-rose-400 font-medium tracking-wider text-sm uppercase mb-2 block">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Projets Réalisés</h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 max-w-sm md:text-right font-light">
             Une sélection d'applications full-stack construites avec des principes modernes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              ref={projectRefs[index]}
              onClick={() => window.open(project.demoUrl || project.repoUrl, '_blank')}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/5 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-2 scroll-reveal-scale cursor-pointer"
            >
              {/* Image Preview */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/20"></div>
                
                
                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-10">
                  <button 
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.repoUrl, '_blank'); }}
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors border border-white/10"
                  >
                    <Github className="w-5 h-5" />
                  </button>
                  {project.demoUrl && (
                    <button
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.demoUrl, '_blank'); }}
                      className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors border border-white/10"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] font-bold tracking-wider px-3 py-1 bg-white/5 text-slate-300 rounded-full border border-white/5 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
