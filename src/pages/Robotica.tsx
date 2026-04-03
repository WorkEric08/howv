import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, Users, MapPin } from 'lucide-react';

export default function Robotica() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVMTNUVXZUWVUHzOUHfKeafzjq62_T2jbYSonRWf5rIogkj4q_84kDTC7FC3FUUmU8l_KW_2P9FCns3yKSLmepRpCYr4ZLMdimV0Cb1GKyQHAem51vVQQveT55BwLONT4Vz5GuwTE5dWlafmY8ddTfOZ-BgZIWM9WApMgHPn5cnvVURNW-IkD4IUNt50LUppr2CDq9bw60r6HGtylsw1KEM2xOR-4nDBhROjzZuhtOXI3bnaBc30kBxAVaMafklbFQSbfotS3Rfws" 
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-bold text-sm tracking-wide">TECNOLOGIA EDUCACIONAL</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">Robótica nas Escolas</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
              Transformando a educação pública de Florianópolis através do pensamento computacional e engenharia criativa.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all">Quero no meu colégio</button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">Ver Impacto</button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-xl rotate-3 transform transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClx-L5eQKubo7R3YUovs5HV_pG9YyMW31HMe7EQFB0b6OmmPaaUwxdo5qHOo7j427S039nspGSkvUcsnq5jXW7q7F3xd5eH-fmpRcZh28fi5owRpg7Q1jEi7l1RgTc0-ii_-SYHq1zkbyzjZ4Sb_7Dr5LxDaEss87Xc_0oaoCy2ouvyad4uXj6rp3H-x4vEApnxdFfQZZ-RduWmXtbkYSzHfET8Am4qYm8S7NXH0TF99pY3Vthezf-rcnpvtAaqU13am8ZjhAJoC4" 
                alt="Estudante com robô"
                className="rounded-xl w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-4 -left-8 bg-primary-container p-6 rounded-2xl text-white max-w-xs shadow-2xl">
              <p className="text-sm italic">"Aprendi que errar o código faz parte da descoberta. Agora quero ser engenheira."</p>
              <p className="mt-2 font-bold text-secondary-container">— Ana, 14 anos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 bg-surface px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">O que as oficinas oferecem</h2>
            <div className="h-1.5 w-24 bg-secondary-container rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-low rounded-2xl p-10 flex flex-col justify-between">
              <div>
                <Cpu className="text-primary w-12 h-12 mb-6" />
                <h3 className="text-3xl font-bold text-primary mb-4">Mão na Massa: Hardware e Montagem</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                  Os alunos aprendem desde a mecânica básica até o funcionamento de sensores ultrassônicos e motores DC.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                {['SENSORES', 'MOTORES', 'ESTRUTURAS'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-surface-container-lowest rounded-full text-xs font-bold text-primary">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-primary-container rounded-2xl p-10 text-white flex flex-col justify-center">
              <Terminal className="text-secondary-container w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Lógica & Código</h3>
              <p className="text-slate-300">
                Introdução à programação em blocos e Python, aplicada à resolução de problemas reais.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm flex flex-col justify-center">
              <Users className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">Trabalho em Equipe</h3>
              <p className="text-on-surface-variant">
                Metodologia baseada em projetos (PBL) onde a colaboração é a principal ferramenta.
              </p>
            </div>

            <div className="md:col-span-2 bg-secondary-container rounded-2xl p-10 flex items-center gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-on-secondary-container mb-4">Florianópolis e Região</h3>
                <p className="text-on-secondary-container text-lg">
                  Atuamos em mais de 15 escolas municipais e estaduais, levando inovação para áreas com menor acesso.
                </p>
              </div>
              <div className="hidden md:flex w-48 h-32 bg-on-secondary-container/10 rounded-2xl items-center justify-center">
                <MapPin className="text-on-secondary-container w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
