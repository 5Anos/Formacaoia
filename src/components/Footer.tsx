import React from 'react';
import { Sparkles, Download, Heart, ExternalLink, ShieldCheck, FileText } from 'lucide-react';
import { COURSE_INFO } from '../data/courseData.ts';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-16 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Course Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base">
                {COURSE_INFO.trainingTitle}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Plataforma interativa de suporte formativo desenvolvida para apoiar os professores formandos
              durante e após as sessões de formação, com o conteúdo integral do Módulo 1 transcrito e enriquecido com simuladores didáticos.
            </p>
            <div className="text-xs text-indigo-300">
              Autora do Recurso Original: <strong className="text-white">{COURSE_INFO.author}</strong> ({COURSE_INFO.creationDate})
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Módulo 1 & Simuladores
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onSelectTab('conteudo')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Guia Teórico Integral (Págs. 1-6)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('simuladores')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Laboratório & 5 Simuladores
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('quiz')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Desafio do Formando (Quiz)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('ferramentas')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Catálogo das 13 Ferramentas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('fontes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Referências Bibliográficas & Ficha Técnica
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Actions & GitHub Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Recursos & Partilha
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={COURSE_INFO.pdfFileUrl}
                download="Recurso-Modulo1-Fundamentos-IA-CarlaOliveira.pdf"
                className="inline-flex items-center gap-2 text-indigo-300 hover:text-white"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descarregar PDF do Módulo 1</span>
              </a>
              <div className="text-slate-400 text-[11px] leading-relaxed pt-1">
                Concebido para publicação estática no <strong>GitHub Pages</strong>, sem dependência de base de dados ou registos externos.
              </div>
              <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Conformidade estrita com o RGPD (UE 2016/679)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            Formação: «{COURSE_INFO.trainingTitle}» • Módulo 1 (Fundamentos da IA)
          </div>
          <div>
            Recurso Pedagógico de Autoria de <strong>Carla Oliveira</strong> (2026)
          </div>
        </div>
      </div>
    </footer>
  );
};
