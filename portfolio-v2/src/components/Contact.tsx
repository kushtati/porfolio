import { useState } from 'react';
import { Send, Mail, User, MessageCircle } from 'lucide-react';
import { SectionId } from '../types';
import { DEV_EMAIL } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const titleRef = useScrollReveal();
  const formRef = useScrollReveal(0.15);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Message envoyé ! Je vous répondrai bientôt. ✨');
    setTimeout(() => setStatus(''), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id={SectionId.CONTACT} className="min-h-screen flex items-center py-20 md:py-32 relative px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/10 via-transparent to-orange-950/10 pointer-events-none"></div>
      <div className="container mx-auto max-w-7xl w-full relative z-10">
        <div ref={titleRef} className="text-center mb-20 scroll-reveal">
          <span className="text-orange-400 font-medium tracking-wider text-sm uppercase mb-2 block">Restons en contact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Travaillons ensemble</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Un projet en tête ? Une idée à développer ? N'hésitez pas à me contacter. 
            Je suis toujours ouvert à de nouvelles opportunités et collaborations.
          </p>
        </div>

        <div ref={formRef} className="max-w-3xl mx-auto w-full scroll-reveal-scale">
          <form onSubmit={handleSubmit} className="glass rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300 flex items-center gap-2">
                <User className="w-4 h-4 text-orange-400" />
                Votre nom
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 transition-all text-white placeholder-slate-500"
                placeholder="Ibrahim Barry"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300 flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400" />
                Votre email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 transition-all text-white placeholder-slate-500"
                placeholder="vous@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-orange-400" />
                Votre message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 transition-all text-white placeholder-slate-500 resize-none"
                placeholder="Parlez-moi de votre projet..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Envoyer le message
            </button>

            {status && (
              <p className="text-center text-green-400 font-semibold animate-pulse">
                {status}
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">Ou envoyez-moi un email directement à</p>
            <a 
              href={`mailto:${DEV_EMAIL}`}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500 hover:from-orange-300 hover:to-rose-400 transition-all"
            >
              {DEV_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
