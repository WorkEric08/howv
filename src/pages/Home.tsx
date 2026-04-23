import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Laptop, ToyBrick, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Home() {
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[80vh] flex items-center relative overflow-hidden px-8 md:px-24 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Formando os <span className="text-secondary-container">Programadores</span> do Futuro
            </h1>
            <p className="text-lg md:text-xl text-on-primary-container mb-10 max-w-lg leading-relaxed">
              Capacitamos jovens de escolas públicas em programação, robótica e tecnologia, preparando-os para o mercado de trabalho com excelência.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all transform hover:-translate-y-1">
                Apoie Nossa Causa
              </button>
              <HashLink 
                smooth 
                scroll={scrollWithOffset}
                to="/#programas" 
                className="bg-white/10 text-white px-8 py-4 rounded-full font-bold backdrop-blur-md hover:bg-white/20 transition-all flex items-center gap-2"
              >
                Nossos Programas <ArrowRight size={20} />
              </HashLink>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZRnqYpmrPJBmTMsc4-JzRu5UDdE27Ga_DF7bOzmXDXXqUlBV0192QabkIFBjt2Uq9tEw2EehCtqgnGorhRZWYAsYCF8CWTQxqTbLAx_xXzTXWQ4yEWAdjnLO-AbxauW5bIjx-B_XkWbnXA7GxQ-4v3RJQBZBaL30Ui7sxy67tOY9GI3pVwhnsNIk18SsK-zmob0Xr9R6VmgfU7MmqhQshY-Nv2EIJi1AX1lHzDUMARwPiEl3_Pgc_1KFPgrd1NpLed0fSYXfAi6o" 
                alt="Estudantes colaborando"
                className="w-full h-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-container rounded-full opacity-20 blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="programas" className="py-24 bg-surface px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Oportunidades</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2">Nossos Programas</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramCard 
              icon={<Laptop className="w-8 h-8" />}
              title="Programação para Jovens"
              description="Cursos de lógica, Python, JavaScript e desenvolvimento web para jovens de 14 a 24 anos."
              link="/programas/jovens"
            />
            <ProgramCard 
              icon={<ToyBrick className="w-8 h-8" />}
              title="Robótica nas Escolas"
              description="Oficinas práticas de robótica educacional em escolas públicas de Florianópolis e região."
              link="/programas/robotica"
            />
            <ProgramCard 
              icon={<Rocket className="w-8 h-8" />}
              title="Preparação para o Mercado"
              description="Mentoria, preparação de currículo e conexão com empresas de tecnologia de ponta."
              link="/programas/mercado"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impacto" className="py-24 bg-primary text-white px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12">Nosso Impacto em Números</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-5xl font-black text-secondary-container mb-2">500+</div>
              <div className="text-sm uppercase tracking-widest font-bold opacity-80">Jovens Formados</div>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-5xl font-black text-secondary-container mb-2">15+</div>
              <div className="text-sm uppercase tracking-widest font-bold opacity-80">Escolas Públicas</div>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-5xl font-black text-secondary-container mb-2">90%</div>
              <div className="text-sm uppercase tracking-widest font-bold opacity-80">Empregabilidade</div>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-5xl font-black text-secondary-container mb-2">R$ 2M+</div>
              <div className="text-sm uppercase tracking-widest font-bold opacity-80">Renda Gerada</div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section (Sobre) */}
      <section id="sobre" className="py-24 bg-surface-container-low overflow-hidden px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxY2N43yxp0AcN12ZeVEiIYN-CQ7Qe0GjpXwF_PSo6nYWS55VSln-ylWp2c7tdcPIlHQJIb8-IxD7iM2M4vhdO6OcKqxwtxxJJOO7cTo3kCjmHjqTF60bWxV-OxWtU3q-IuUaWWi6CGc0OPKGhY2d9-nQcPdoLBoYVPDlM7abWfxNnoQNNrBuqVc8oY0pgRrFLa2-QrFJ4AqeQrGmOoArzlrEKZo72dVuDFggWnh3H-yLKNWHuu-L2ukfL4kt9UIgDrD77D44gMIs" 
                alt="Caspar Erich Stemmer"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary opacity-10"></div>
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary-container rounded-full opacity-10 blur-2xl"></div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              Inspirados no Legado de Caspar Erich Stemmer
            </h2>
            <div className="space-y-4 text-on-surface-variant text-lg leading-relaxed">
              <p>
                How V nasceu para continuar o legado do "pai da engenharia em Santa Catarina". Assim como ele construiu a base do ecossistema tecnológico de Florianópolis, queremos construir a base para a próxima geração.
              </p>
              <p>
                Nossa missão é democratizar o acesso à educação tecnológica de qualidade, reduzindo a barreira de entrada para jovens de baixa renda no mercado tech.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-surface-container-high" />
                ))}
              </div>
              <p className="text-sm font-semibold text-primary">+500 Jovens impactados anualmente</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProgramCard({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-surface-container-lowest p-10 rounded-2xl ambient-shadow group flex flex-col items-start transition-all duration-300"
    >
      <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed mb-6">{description}</p>
      <Link to={link} className="mt-auto text-secondary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
        Saber mais <ArrowRight size={18} />
      </Link>
    </motion.div>
  );
}
