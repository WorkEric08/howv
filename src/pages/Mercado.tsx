import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Users, FileText, Target } from 'lucide-react';

export default function Mercado() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[60vh] flex items-center relative overflow-hidden px-8 md:px-24 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-bold text-xs mb-6 uppercase tracking-widest">Carreira & Conexão</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Preparação para o <span className="text-secondary-container">Mercado</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-lg mb-10 leading-relaxed">
              O elo final entre sua formação técnica e as maiores empresas de tecnologia do país. Mentoria estratégica para talentos que desejam protagonismo.
            </p>
            <div className="flex gap-4">
              <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-xl">
                Quero Participar
              </button>
              <button className="bg-white/10 text-white px-8 py-4 rounded-full font-bold backdrop-blur-md hover:bg-white/20 transition-all">
                Ver Cronograma
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0MwuHMzs9_9uOrerVLjPV8-DQDc3cwzaykyJcdEJwf7QBZOSQ2prIWWl5fxsPOO1kqUBbPamBBxXGUR6v_LQkMrsvJqNRZa8A4LkXKJNwgn9Z_f7M7CBGP2ZAYlvo3SeKmLju0p42SPh2ii5zLbDF_eZRgASYEf_qXUeuLUXqoya3_jFZ3DSuweQK_rOOxjmXHrGLoJvKm5mwHEeVUPtMul8niJPtDB__8vq2qDidPsfkmg-iUd1E4uMu2qJMEClIxx4YYO5Tzb8" 
                alt="Mentoria profissional"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-12 bg-white p-6 rounded-2xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-secondary-container">★</div>
                <span className="text-primary font-bold">Taxa de Contratação</span>
              </div>
              <div className="text-3xl font-extrabold text-primary">94%</div>
              <p className="text-xs text-on-surface-variant">Alunos empregados em até 6 meses após o programa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Os Pilares do Sucesso</h2>
          <p className="text-on-surface-variant">Como transformamos conhecimento em oportunidades reais.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-surface-container-low p-10 rounded-2xl flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Users className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Mentoria Individual</h3>
              <p className="text-on-surface-variant max-w-md leading-relaxed">
                Acompanhamento direto com especialistas que atuam em Big Techs. Você receberá feedbacks reais sobre sua postura, comunicação e competências técnicas.
              </p>
            </div>
            <div className="mt-8 flex -space-x-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-surface bg-surface-container-high" />
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-surface bg-secondary-container flex items-center justify-center text-xs font-bold text-on-secondary-container">+40</div>
            </div>
          </div>

          <div className="md:col-span-4 bg-primary text-white p-10 rounded-2xl">
            <FileText className="text-secondary-container mb-6 w-10 h-10" />
            <h3 className="text-2xl font-bold mb-4">Currículo de Alto Impacto</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Oficinas práticas para estruturar seu LinkedIn e currículo técnico seguindo padrões internacionais.
            </p>
            <ul className="space-y-3">
              {['SEO para LinkedIn', 'Portfólio no GitHub', 'Personal Branding'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="text-secondary-container w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 bg-surface-container-high p-10 rounded-2xl">
            <h3 className="text-xl font-bold text-primary mb-3">Networking</h3>
            <p className="text-on-surface-variant text-sm">Eventos exclusivos com RHs de empresas parceiras e sessões de speed-networking.</p>
          </div>
          <div className="md:col-span-4 bg-surface-container-high p-10 rounded-2xl">
            <h3 className="text-xl font-bold text-primary mb-3">Soft Skills</h3>
            <p className="text-on-surface-variant text-sm">Comunicação não-violenta, resolução de conflitos e liderança situacional.</p>
          </div>
          <div className="md:col-span-4 bg-secondary-container p-10 rounded-2xl">
            <h3 className="text-xl font-bold text-on-secondary-container mb-3">Job Matching</h3>
            <p className="text-on-secondary-container/80 text-sm">Indicação direta para vagas que ainda não foram publicadas no mercado aberto.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
