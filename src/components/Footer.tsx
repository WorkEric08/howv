import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Globe, Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary w-full py-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="text-xl font-bold text-white font-headline">Instituto Stemmer</div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Transformando o futuro através da tecnologia e da educação de alto nível para jovens de escolas públicas.
          </p>
          <p className="text-slate-500 text-xs pt-4">
            © 2024 Instituto Stemmer. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-secondary-container font-bold mb-2 font-headline">Acesso Rápido</h4>
          <Link to="/privacidade" className="text-slate-400 hover:text-white transition-colors text-sm">Privacidade</Link>
          <Link to="/termos" className="text-slate-400 hover:text-white transition-colors text-sm">Termos de Uso</Link>
          <Link to="/contato" className="text-slate-400 hover:text-white transition-colors text-sm">Contato</Link>
          <Link to="/carreira" className="text-slate-400 hover:text-white transition-colors text-sm">Trabalhe Conosco</Link>
        </div>

        <div>
          <h4 className="text-secondary-container font-bold mb-4 font-headline">Siga-nos</h4>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary-container hover:text-on-secondary-container cursor-pointer transition-all">
              <Globe size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary-container hover:text-on-secondary-container cursor-pointer transition-all">
              <Share2 size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary-container hover:text-on-secondary-container cursor-pointer transition-all">
              <Video size={18} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
