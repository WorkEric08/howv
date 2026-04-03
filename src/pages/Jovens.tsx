import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Code2, Layout, BrainCircuit, ArrowRight } from 'lucide-react';

export default function Jovens() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20 hero-gradient"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPH1Yqdo2BPx-vVTDKOOtB1qSoxu2wZ_sMgcpx7fN88M0n9j_JclNhQ9CG2XpqKY3diAcaql-T70OFLDbfmHbzUTv8SxfWm12nSTp4AAKrIj6EHo2z-i_EPeXtT22VTnEfayE-9n5hQcQjdd6R3o0LSuUcgB3ULwswxBsRqK5B_E_CP8e2J3wzKv0fci8uaTN7IdDgfpj08kT33b05qT7BrK3DHYuzMxvvtUs5h4CT6cmCfqmLSc2QceV9B-oV1xO-k82yufJaY0U" 
            alt="Programação para Jovens"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container font-bold text-xs mb-6 uppercase tracking-wider">Formação Profissional</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">Programação para Jovens</h1>
            <p className="text-xl text-on-primary-container mb-8 max-w-xl">Transforme sua curiosidade em carreira. Um programa intensivo de tecnologia para talentos de 14 a 24 anos.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all flex items-center gap-2">
                Começar agora <ArrowRight size={20} />
              </button>
              <div className="flex items-center gap-4 text-white">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-surface-container-high" />)}
                </div>
                <span className="text-sm font-medium">Junte-se a +500 alunos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Faixa Etária', value: '14-24' },
              { label: 'Carga Horária', value: '120h' },
              { label: 'Prático', value: '100%' },
              { label: 'Certificação', value: 'Gold' }
            ].map(stat => (
              <div key={stat.label} className="text-center p-6 bg-surface-container-lowest rounded-2xl">
                <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
                <p className="text-sm text-on-surface-variant font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-surface px-8">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-primary mb-4 italic">O que você vai dominar</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">Nossa trilha foi desenhada por especialistas para levar você do zero ao desenvolvimento de aplicações reais.</p>
            </div>
            <div className="flex gap-2">
              {['Lógica', 'Python', 'Web'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-bold text-primary">{tag}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 bg-primary-container p-10 rounded-2xl text-white relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <Terminal className="text-secondary-container w-12 h-12 mb-4" />
                  <h3 className="text-3xl font-bold mb-4">Python & Ciência de Dados</h3>
                  <p className="text-on-primary-container text-lg max-w-md">Domine a linguagem mais versátil do mundo. Da automação à inteligência artificial.</p>
                </div>
                <div className="mt-8 flex gap-4">
                  <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-sm">Scripts</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-sm">Data Viz</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-outline-variant/10">
              <Code2 className="text-secondary w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">JavaScript Moderno</h3>
              <p className="text-on-surface-variant mb-6">A alma da web. Aprenda ES6+, manipulação de DOM e frameworks modernos.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <span className="text-secondary">●</span> Programação Assíncrona
                </li>
                <li className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <span className="text-secondary">●</span> APIs & JSON
                </li>
              </ul>
            </div>

            <div className="md:col-span-4 bg-surface-container-low p-8 rounded-2xl">
              <Layout className="text-primary w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-primary mb-4">Web Design & CSS</h3>
              <p className="text-on-surface-variant text-sm">Interfaces memoráveis com HTML5, CSS3 avançado e Tailwind.</p>
            </div>

            <div className="md:col-span-8 bg-secondary-container p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <BrainCircuit className="text-on-secondary-container w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold text-on-secondary-container mb-2">Fundamentos & Lógica</h3>
                <p className="text-on-secondary-container/80">Desenvolva o raciocínio algorítmico necessário para resolver qualquer problema.</p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-2">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center font-bold text-2xl text-on-secondary-container">IF</div>
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center font-bold text-2xl text-on-secondary-container">WHILE</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
