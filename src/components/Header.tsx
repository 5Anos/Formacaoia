import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  CheckSquare, 
  Wrench, 
  FileText, 
  Download, 
  Presentation, 
  Printer, 
  Menu, 
  X,
  ExternalLink
} from 'lucide-react';
import { COURSE_INFO } from '../data/courseData.ts';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPresentation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenPresentation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'conteudo', label: 'Guia do Módulo 1', icon: BookOpen, badge: 'PDF Integral' },
    { id: 'simuladores', label: 'Simuladores & Atividades', icon: Sparkles, badge: '5 Dinâmicas' },
    { id: 'quiz', label: 'Desafio do Formando', icon: CheckSquare, badge: '10 Perguntas' },
    { id: 'ferramentas', label: '13 Ferramentas de IA', icon: Wrench, badge: 'Catálogo' },
    { id: 'fontes', label: 'Referências & Créditos', icon: FileText, badge: 'Carla Oliveira' },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Banner with training context */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white text-xs px-4 py-2 border-b border-indigo-700/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-indigo-500/40 text-indigo-200 border border-indigo-400/30 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Formação Docente
            </span>
            <span className="font-medium text-slate-100 hidden sm:inline">
              {COURSE_INFO.trainingTitle}
            </span>
            <span className="text-slate-400 hidden md:inline">•</span>
            <span className="text-indigo-200 font-normal">
              Autora: <strong className="text-white font-semibold">{COURSE_INFO.author}</strong> ({COURSE_INFO.creationDate})
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={COURSE_INFO.pdfFileUrl}
              download="Recurso-Modulo1-Fundamentos-IA-CarlaOliveira.pdf"
              className="inline-flex items-center gap-1.5 text-xs text-indigo-100 hover:text-white bg-indigo-700/60 hover:bg-indigo-600/80 px-2.5 py-1 rounded transition-colors"
              title="Descarregar PDF original do Módulo 1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descarregar PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors"
              title="Imprimir ou exportar versão para papel/PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>
            <button
              onClick={onOpenPresentation}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-200 hover:text-white bg-amber-600/30 hover:bg-amber-600/50 border border-amber-500/40 px-2.5 py-1 rounded transition-colors"
              title="Modo Projeção para o Formador em sala"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Modo Apresentação</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <div 
            onClick={() => setActiveTab('conteudo')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-indigo-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-indigo-700 tracking-wide uppercase">
                  Módulo 1
                </span>
                <span className="text-[11px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-1.5 py-0.2 rounded font-mono">
                  14 Jan 2026
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-slate-900 leading-tight group-hover:text-indigo-700 transition-colors">
                Fundamentos da Inteligência Artificial
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 shadow-xs border border-indigo-200/80 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-normal ${
                    isActive 
                      ? 'bg-indigo-200/70 text-indigo-800 font-medium' 
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {item.badge}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Mobile hamburger menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              </button>
            );
          })}

          <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenPresentation();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-700"
            >
              <Presentation className="w-4 h-4" />
              <span>Modo Apresentação (Projetor)</span>
            </button>
            <a
              href={COURSE_INFO.pdfFileUrl}
              download="Recurso-Modulo1-Fundamentos-IA-CarlaOliveira.pdf"
              className="w-full flex items-center justify-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-900"
            >
              <Download className="w-4 h-4" />
              <span>Descarregar PDF do Módulo 1</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
