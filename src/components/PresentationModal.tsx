import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Presentation, 
  Sparkles, 
  CheckCircle2, 
  Brain, 
  ShieldAlert, 
  UserCheck, 
  Wrench,
  BookOpen
} from 'lucide-react';
import { COURSE_INFO, LEARNING_OBJECTIVES, AI_DEFINITION, TEACHER_VS_AI_PILLARS, TEACHER_FUNDAMENTAL_FUNCTIONS } from '../data/courseData.ts';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PresentationModal: React.FC<PresentationModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Inteligência Artificial na Educação",
      subtitle: "Estratégias, Ferramentas e Práticas Pedagógicas",
      content: (
        <div className="text-center py-8">
          <span className="text-xs font-bold uppercase tracking-widest bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 px-3 py-1 rounded-full mb-4 inline-block">
            Módulo 1: Fundamentos da Inteligência Artificial (IA)
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4 leading-tight">
            Fundamentos da IA na Educação
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
            Transcrição Integral de Conteúdo e Guia de Estudo
          </p>
          <div className="inline-block bg-slate-800/90 border border-slate-700 px-5 py-2.5 rounded-xl text-slate-300 text-sm">
            Autora do Recurso Original: <strong className="text-white">{COURSE_INFO.author}</strong> ({COURSE_INFO.creationDate})
          </div>
        </div>
      )
    },
    {
      title: "1. Objetivos do Módulo 1",
      subtitle: "Competências e metas da sessão de formação",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto">
          {LEARNING_OBJECTIVES.map((obj) => (
            <div key={obj.id} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">
                {obj.id}
              </span>
              <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed">
                {obj.text}
              </p>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "2. O Que é a Inteligência Artificial?",
      subtitle: "Definição conceptual essencial (Pág. 1)",
      content: (
        <div className="bg-indigo-950/60 border-2 border-indigo-500/40 p-6 sm:p-8 rounded-3xl my-auto text-left">
          <div className="flex items-center gap-3 text-indigo-400 font-bold text-sm uppercase mb-3">
            <Brain className="w-5 h-5" />
            Conceito Formal
          </div>
          <p className="text-lg sm:text-2xl text-slate-100 leading-relaxed font-light italic mb-6">
            «{AI_DEFINITION.exactText}»
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-indigo-800/60 text-xs sm:text-sm text-indigo-200">
            <div>• Reconhecer padrões</div>
            <div>• Interpretar linguagem</div>
            <div>• Apoiar tomada de decisão</div>
          </div>
        </div>
      )
    },
    {
      title: "3. Tipos de IA: A Realidade vs. Ficção",
      subtitle: "Classificação teórica e estado atual da arte (Pág. 2)",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto">
          <div className="bg-emerald-950/40 border-2 border-emerald-500/50 p-5 rounded-2xl text-left">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              Único tipo existente
            </span>
            <h3 className="text-xl font-bold text-white mb-2">IA Fraca / Estreita (ANI)</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Sistemas desenvolvidos para executar tarefas específicas. Não possuem compreensão geral nem transferem conhecimento. (Russell & Norvig, 2016)
            </p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 p-5 rounded-2xl text-left">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Teórica / Em Investigação
            </span>
            <h3 className="text-xl font-bold text-white mb-2">IA Forte / Geral (AGI)</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Ainda não existe. Teria a capacidade de aprender, adaptar-se a situações novas e resolver problemas como o cérebro humano.
            </p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 p-5 rounded-2xl text-left">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Hipotética / Futuro
            </span>
            <h3 className="text-xl font-bold text-white mb-2">Superinteligência (ASI)</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Ultrapassaria a inteligência humana em todas as áreas (raciocínio, criatividade, decisão). Abordada em contextos teóricos e éticos.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "4. IA Analítica vs. IA Generativa",
      subtitle: "A grande mudança de paradigma na sala de aula (Pág. 3)",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto text-left">
          <div className="bg-blue-950/40 border border-blue-500/40 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-blue-300 mb-1">IA Analítica (Tradicional)</h3>
            <p className="text-xs text-slate-400 italic mb-3">Mitchell (1997) & Bishop (2006)</p>
            <p className="text-sm text-slate-200 leading-relaxed mb-4">
              Analisa dados e apoia a tomada de decisão recorrendo a aprendizagem automática e reconhecimento de padrões.
            </p>
            <div className="text-xs text-blue-200 bg-blue-900/40 p-3 rounded-lg">
              <strong>Escola:</strong> Deteção de plágio, previsão de retenção escolar, reconhecimento facial.
            </div>
          </div>
          <div className="bg-purple-950/40 border border-purple-500/40 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-purple-300 mb-1">IA Generativa</h3>
            <p className="text-xs text-slate-400 italic mb-3">Brown et al. (2020) & Bommasani et al. (2021)</p>
            <p className="text-sm text-slate-200 leading-relaxed mb-4">
              Modelos de grande dimensão que geram conteúdos originais (texto, imagem, áudio, código) com base em padrões aprendidos.
            </p>
            <div className="text-xs text-purple-200 bg-purple-900/40 p-3 rounded-lg">
              <strong>Escola:</strong> Criar planos de aula, diferenciar textos (Diffit), gerar rubricas e materiais.
            </div>
          </div>
        </div>
      )
    },
    {
      title: "5. A IA Vai Substituir o Professor? NÃO.",
      subtitle: "Os 4 Pilares Humanos Insubstituíveis (Pág. 5)",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto text-left">
          {TEACHER_VS_AI_PILLARS.map((p) => (
            <div key={p.id} className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
              <h4 className="font-bold text-base text-indigo-300 mb-1">
                {p.pilar}
              </h4>
              <p className="text-xs text-slate-200 leading-snug mb-2 font-medium">
                👨‍🏫 <strong>Docente:</strong> {p.professorHuman}
              </p>
              <p className="text-xs text-slate-400 leading-snug">
                🤖 <strong>IA:</strong> {p.aiTool}
              </p>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "6. Funções Fundamentais do Professor na Era Digital",
      subtitle: "A missão do docente do século XXI (Pág. 5)",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto text-left">
          {TEACHER_FUNDAMENTAL_FUNCTIONS.map((f) => (
            <div key={f.number} className="bg-indigo-950/40 border border-indigo-700/50 p-5 rounded-2xl flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                {f.number}
              </span>
              <div>
                <h4 className="font-bold text-base text-white mb-1">
                  {f.title}
                </h4>
                <p className="text-xs text-indigo-200 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
      }
      if (e.key === 'ArrowLeft') {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, slides.length, onClose]);

  if (!isOpen) return null;

  const current = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col justify-between p-4 sm:p-8 backdrop-blur-xl">
      {/* Top Header Controls */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Presentation className="w-5 h-5 text-indigo-400" />
          <span className="text-xs font-semibold text-slate-300">
            Modo Apresentação (Projetor de Sala)
          </span>
          <span className="text-xs text-slate-500 font-mono">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 hidden sm:inline">
            Use as teclas ← e → para navegar
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Fechar Modo Apresentação"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Stage */}
      <div className="max-w-5xl mx-auto w-full my-auto py-6 flex flex-col justify-center min-h-[500px]">
        <div className="mb-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-300">
            {current.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {current.subtitle}
          </p>
        </div>

        <div className="w-full">
          {current.content}
        </div>
      </div>

      {/* Footer Navigation Bar */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-3">
        <button
          onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
          disabled={currentSlide === 0}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
            currentSlide === 0
              ? 'opacity-30 cursor-not-allowed bg-slate-800'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentSlide === i ? 'w-6 bg-indigo-500' : 'bg-slate-700 hover:bg-slate-500'
              }`}
              title={`Ir para diapositivo ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
            currentSlide === slides.length - 1
              ? 'opacity-30 cursor-not-allowed bg-slate-800'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer'
          }`}
        >
          <span>Seguinte</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
