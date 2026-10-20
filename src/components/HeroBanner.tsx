import React from 'react';
import { 
  Sparkles, 
  Brain, 
  History, 
  Layers, 
  ShieldAlert, 
  Award, 
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  FileCheck2,
  Download
} from 'lucide-react';
import { COURSE_INFO, LEARNING_OBJECTIVES } from '../data/courseData.ts';

interface HeroBannerProps {
  onSelectTab: (tab: string) => void;
  onScrollToSection?: (sectionId: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onSelectTab }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-white border-b border-indigo-900/60">
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 relative z-10">
        {/* Breadcrumb / Category */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
            <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
            Recurso de Apoio à Formação Docente
          </span>
          <span className="text-xs text-slate-400">
            Baseado no recurso original criado em <strong>{COURSE_INFO.creationDate}</strong> por <strong>{COURSE_INFO.author}</strong>
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl">
          <p className="text-indigo-400 font-semibold tracking-wider text-xs uppercase mb-2">
            {COURSE_INFO.trainingTitle}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Módulo 1: Fundamentos da Inteligência Artificial (IA)
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
            Ambiente interativo de consulta, simulação prática e atividades de reflexão para professores formandos.
            Explore a evolução histórica, compreenda os tipos de IA, examine benefícios e limitações pedagógicas,
            e descubra o catálogo de 13 ferramentas essenciais para a sala de aula.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <button
            onClick={() => onSelectTab('simuladores')}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-indigo-200" />
            <span>Explorar Atividades & Simuladores</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onSelectTab('conteudo')}
            className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/90 text-slate-100 font-medium text-sm px-5 py-2.5 rounded-xl border border-slate-700 transition-all cursor-pointer"
          >
            <BookOpenCheck className="w-4 h-4 text-slate-300" />
            <span>Consultar Guia Teórico Integral</span>
          </button>

          <button
            onClick={() => onSelectTab('quiz')}
            className="inline-flex items-center gap-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-medium text-sm px-4 py-2.5 rounded-xl border border-emerald-500/40 transition-all cursor-pointer"
          >
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Desafio do Formando (Quiz)</span>
          </button>

          <a
            href={COURSE_INFO.pdfFileUrl}
            download="Recurso-Modulo1-Fundamentos-IA-CarlaOliveira.pdf"
            className="inline-flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white text-xs px-3.5 py-2 rounded-lg border border-slate-700/70 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>PDF Original (6 Páginas)</span>
          </a>
        </div>

        {/* Section 1: Learning Objectives from PDF */}
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                1. Objetivos do Módulo 1 (Transcrição Oficial)
              </h2>
            </div>
            <span className="text-xs text-indigo-300 bg-indigo-950/80 border border-indigo-800/60 px-2.5 py-0.5 rounded-full">
              Competências do Formando
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mb-4 italic">
            «Ao concluir este módulo, os formandos deverão ser capazes de:»
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {LEARNING_OBJECTIVES.map((obj) => (
              <div 
                key={obj.id}
                className="bg-slate-800/60 rounded-xl p-3.5 border border-slate-700/60 flex items-start gap-3 hover:border-indigo-500/50 transition-colors"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600/30 text-indigo-300 font-bold text-xs flex items-center justify-center border border-indigo-500/40">
                  {obj.id}
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                  {obj.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Numbers Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
          <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 text-center">
            <div className="text-xl font-bold text-indigo-400">8 Marcos</div>
            <div className="text-[11px] text-slate-400">Linha do Tempo (1950–2020+)</div>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 text-center">
            <div className="text-xl font-bold text-teal-400">3 Tipos</div>
            <div className="text-[11px] text-slate-400">ANI, AGI e ASI</div>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 text-center">
            <div className="text-xl font-bold text-amber-400">8 Setores</div>
            <div className="text-[11px] text-slate-400">Aplicações Práticas</div>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 text-center">
            <div className="text-xl font-bold text-emerald-400">5 Benefícios</div>
            <div className="text-[11px] text-slate-400">Impacto Docente e Aluno</div>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 text-center">
            <div className="text-xl font-bold text-rose-400">8 Limitações</div>
            <div className="text-[11px] text-slate-400">Desafios Éticos & RGPD</div>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 text-center">
            <div className="text-xl font-bold text-violet-400">13 Ferramentas</div>
            <div className="text-[11px] text-slate-400">Mencionadas no Módulo</div>
          </div>
        </div>
      </div>
    </section>
  );
};
