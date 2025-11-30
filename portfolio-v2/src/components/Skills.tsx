import { SectionId } from '../types';
import { SKILLS } from '../constants';
import { Cpu, Layout, Server, Terminal } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills: React.FC = () => {
  const titleRef = useScrollReveal();
  const cardRefs = [
    useScrollReveal(0.15),
    useScrollReveal(0.2),
    useScrollReveal(0.25),
    useScrollReveal(0.3)
  ];
  
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  const getIcon = (category: string) => {
    switch(category) {
      case 'Frontend': return <Layout className="w-5 h-5" />;
      case 'Backend': return <Server className="w-5 h-5" />;
      case 'Outils': return <Terminal className="w-5 h-5" />;
      case 'Intelligence Artificielle': return <Cpu className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section id={SectionId.SKILLS} className="min-h-screen flex items-center py-20 md:py-32 relative px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div ref={titleRef} className="text-center mb-20 scroll-reveal">
          <span className="text-orange-400 font-medium tracking-wider text-sm uppercase mb-2 block">Mon Arsenal</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Compétences Techniques</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Les outils et technologies que j'utilise pour donner vie à des idées innovantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div 
              key={category}
              ref={cardRefs[index]}
              className="glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 group scroll-reveal-scale"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-orange-500/20 to-rose-500/20 rounded-xl text-orange-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-rose-500 transition-all duration-300">
                  {getIcon(category)}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category}
                </h3>
              </div>
              
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-orange-400 to-rose-500 h-full rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
