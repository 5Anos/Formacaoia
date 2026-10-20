import React, { useState } from 'react';
import { 
  GitCompare, 
  Binary, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw,
  BookOpenCheck,
  ArrowRight
} from 'lucide-react';
import { CLASSIFICATION_SCENARIOS, ANALYTICAL_VS_GENERATIVE } from '../../data/courseData.ts';

export const ClassificationSimulator: React.FC = () => {
  const [userChoices, setUserChoices] = useState<Record<number, 'analitica' | 'generativa'>>({});
  const [showResults, setShowResults] = useState(false);

  const total = CLASSIFICATION_SCENARIOS.length;
  const answeredCount = Object.keys(userChoices).length;

  const handleSelect = (scenarioId: number, type: 'analitica' | 'generativa') => {
    setUserChoices(prev => ({
      ...prev,
      [scenarioId]: type
    }));
  };

  const handleReset = () => {
    setUserChoices({});
    setShowResults(false);
  };

  const correctCount = CLASSIFICATION_SCENARIOS.filter(
    s => userChoices[s.id] === s.correctType
  ).length;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-400/30">
            <GitCompare className="w-3.5 h-3.5" />
            Classificador Interativo de Cenários Escolares
          </span>
          <span className="text-xs text-teal-200 font-mono">
            {answeredCount} de {total} respondidos
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          IA Analítica vs. IA Generativa: Onde Encaixa Cada Prática?
        </h3>
        <p className="text-sm text-teal-100 max-w-3xl leading-relaxed">
          Segundo o Módulo 1 (Pág. 3), a <strong>IA Analítica</strong> (Mitchell 1997; Bishop 2006) analisa dados e apoia decisões por padrões. 
          A <strong>IA Generativa</strong> (Brown 2020; Bommasani 2021) gera novos artefactos originais (texto, imagem, áudio, código).
          Classifique as situações reais abaixo para consolidar este pilar conceitual.
        </p>
      </div>

      {/* Quick Theory Reference Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 sm:p-6 bg-slate-50 border-b border-slate-200">
        <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase mb-1">
            <Binary className="w-4 h-4 text-blue-600" />
            IA Analítica (Tradicional)
          </div>
          <p className="text-xs text-slate-500 italic mb-2">Mitchell (1997) & Bishop (2006)</p>
          <p className="text-xs text-slate-700 leading-relaxed">
            {ANALYTICAL_VS_GENERATIVE.analytical.description}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-700 uppercase mb-1">
            <Sparkles className="w-4 h-4 text-purple-600" />
            IA Generativa
          </div>
          <p className="text-xs text-slate-500 italic mb-2">Brown et al. (2020) & Bommasani et al. (2021)</p>
          <p className="text-xs text-slate-700 leading-relaxed">
            {ANALYTICAL_VS_GENERATIVE.generative.description}
          </p>
        </div>
      </div>

      {/* Scenarios list */}
      <div className="p-5 sm:p-7 space-y-6">
        {CLASSIFICATION_SCENARIOS.map((item, index) => {
          const userChoice = userChoices[item.id];
          const isCorrect = userChoice === item.correctType;
          const hasAnswered = !!userChoice;

          return (
            <div 
              key={item.id}
              className={`rounded-xl border p-4 sm:p-5 transition-all ${
                hasAnswered 
                  ? (isCorrect 
                      ? 'border-emerald-300 bg-emerald-50/20' 
                      : 'border-amber-300 bg-amber-50/20')
                  : 'border-slate-200 bg-white hover:border-slate-300 shadow-2xs'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm sm:text-base font-medium text-slate-900 leading-snug">
                      {item.scenario}
                    </p>
                  </div>
                </div>
              </div>

              {/* Classification buttons */}
              <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-slate-100">
                <span className="text-xs text-slate-500 font-semibold mr-2">Classificar como:</span>
                
                <button
                  onClick={() => handleSelect(item.id, 'analitica')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    userChoice === 'analitica'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
                  }`}
                >
                  <Binary className="w-3.5 h-3.5" />
                  <span>IA Analítica</span>
                </button>

                <button
                  onClick={() => handleSelect(item.id, 'generativa')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    userChoice === 'generativa'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>IA Generativa</span>
                </button>
              </div>

              {/* Feedback when selected */}
              {hasAnswered && (
                <div className={`mt-3.5 p-3 rounded-lg text-xs leading-relaxed flex items-start gap-2.5 ${
                  isCorrect 
                    ? 'bg-emerald-100/70 text-emerald-900 border border-emerald-300' 
                    : 'bg-amber-100/70 text-amber-900 border border-amber-300'
                }`}>
                  {isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="font-bold mb-0.5">
                      {isCorrect ? 'Correto!' : `Incorreto — A resposta correta é IA ${item.correctType === 'analitica' ? 'Analítica' : 'Generativa'}.`}
                    </div>
                    <div>{item.explanation}</div>
                    <div className="text-[11px] text-slate-600 mt-1 font-mono">
                      Referência: {item.citation}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Global summary & controls */}
        <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-700">
              Desempenho: <strong className="text-slate-900">{correctCount}</strong> de {total} corretas ({Math.round((correctCount / total) * 100)}%)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpar Escolhas</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
