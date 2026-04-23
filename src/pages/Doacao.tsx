import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowRight, Star, QrCode, CreditCard } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Doacao() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-10"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6">
              Sua doação transforma vidas através da tecnologia
            </h1>
            <p className="text-on-primary-container text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Apoie How V na missão de capacitar a próxima geração de líderes tecnológicos em comunidades de vulnerabilidade social.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#donate-form" className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg">
                Contribuir agora
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <Shield size={20} className="fill-current" />
                <span className="text-sm font-medium tracking-tight">Transação 100% Segura</span>
              </div>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform md:rotate-3">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGDgz45AuSLwngiC98msgEp9lYkVoxKjBfbAQ4D9gSFki89altcVA0JSDwl1Sq8a2yedL1ylW4nOppriKzh0uNFHfroygtYYJmVNN9xz-HXm_xV0M12eHWJKJpSTrP77e3fDM3fj3ADBSD12tZioA655zNyZsgTjEqg8BxRaYsKW0_1sEJ5dWmSL5J5wzJhtHA7WKdoKYvUicVizRZ82SqzRgqLio-zttI3UpaJpEWY5r0V2fmmphcSyOIfZM2B_VaE7WaPYn1uxI" 
                alt="Estudantes em laboratório"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary-container text-on-secondary-container p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-3xl font-extrabold">+2.5k</div>
              <div className="text-sm font-bold opacity-80">Alunos Impactados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="max-w-7xl mx-auto px-8 py-24" id="donate-form">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Escolha o valor da sua contribuição</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <DonationOption 
                  label="Impacto Inicial"
                  value="R$ 50"
                  description="Ajuda na aquisição de componentes eletrônicos básicos para aulas de robótica."
                />
                <DonationOption 
                  label="Impacto Direto"
                  value="R$ 100"
                  description="Custeia o kit individual de ferramentas para um aluno por todo um semestre."
                  featured
                />
                <DonationOption 
                  label="Impacto Global"
                  value="R$ 200"
                  description="Proporciona o acesso integral a laboratórios e mentoria técnica avançada."
                />
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-bold text-primary/60 mb-2">Outro valor</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-primary">R$</span>
                  <input 
                    type="number" 
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-surface-container-high border-none focus:ring-2 focus:ring-primary font-bold text-lg" 
                    placeholder="0,00"
                  />
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8 text-primary">Seus Dados</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">Nome Completo</label>
                    <input className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary" placeholder="Como no documento" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">E-mail</label>
                    <input className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary" placeholder="seu@email.com" type="email" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">CPF</label>
                    <input className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary" placeholder="000.000.000-00" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">Método de Pagamento</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button type="button" className="flex items-center justify-center gap-2 p-3 rounded-lg bg-surface-container-lowest border-2 border-secondary-container">
                        <QrCode size={18} /> <span className="text-sm font-bold">PIX</span>
                      </button>
                      <button type="button" className="flex items-center justify-center gap-2 p-3 rounded-lg bg-surface-container-lowest border-2 border-transparent hover:border-secondary-container">
                        <CreditCard size={18} /> <span className="text-sm font-bold">Cartão</span>
                      </button>
                    </div>
                  </div>
                </div>
                <button className="w-full py-5 bg-secondary-container text-on-secondary-container font-extrabold text-xl rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                  Finalizar Doação
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-primary text-white p-8 rounded-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="bg-secondary-container w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Shield className="text-on-secondary-container fill-current" />
                </div>
                <h4 className="text-xl font-bold mb-4">100% Transparência</h4>
                <p className="text-on-primary-container text-sm leading-relaxed mb-6">
                  Garantimos que cada centavo doado é direcionado integralmente para a manutenção de nossos laboratórios e programas educacionais.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-secondary-container font-bold text-sm hover:underline">
                  Ver Relatório Anual <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-2xl ambient-shadow border border-outline-variant/20">
              <div className="flex gap-1 text-secondary-container mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-current" />)}
              </div>
              <p className="italic text-on-surface-variant mb-6 text-sm leading-relaxed">
                "Antes de How V, a tecnologia parecia um sonho distante. Hoje, estou cursando Engenharia de Software graças à base que recebi. Minha vida mudou completamente."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high" />
                <div>
                  <div className="font-bold text-primary text-sm">Beatriz Silva</div>
                  <div className="text-[10px] uppercase tracking-tighter text-on-surface-variant">Ex-aluna & Bolsista</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DonationOption({ label, value, description, featured = false }: { label: string, value: string, description: string, featured?: boolean }) {
  return (
    <button className={cn(
      "flex flex-col items-start p-6 rounded-2xl transition-all text-left relative overflow-hidden",
      featured 
        ? "bg-primary text-white shadow-xl scale-105 border-2 border-secondary-container" 
        : "bg-surface-container-low hover:bg-white border-2 border-transparent hover:border-secondary-container"
    )}>
      {featured && (
        <div className="absolute top-0 right-0 bg-secondary-container text-on-secondary-container text-[10px] px-2 py-1 font-bold uppercase tracking-widest">
          Mais comum
        </div>
      )}
      <span className={cn("text-sm font-bold mb-1", featured ? "text-white/60" : "text-primary opacity-60")}>{label}</span>
      <span className={cn("text-2xl font-extrabold mb-4", featured ? "text-secondary-container" : "text-primary")}>{value}</span>
      <p className={cn("text-xs leading-tight", featured ? "text-white/80" : "text-on-surface-variant")}>{description}</p>
    </button>
  );
}
