import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Scale, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCcw, 
  BookOpen, 
  FileLock, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { ETHICAL_DILEMMAS } from '../../data/courseData.ts';

export const EthicalDilemmaSimulator: React.FC = () => {
  const [activeDilemmaIndex, setActiveDilemmaIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const dilemma = ETHICAL_DILEMMAS[activeDilemmaIndex];

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (activeDilemmaIndex < ETHICAL_DILEMMAS.length - 1) {
      setActiveDilemmaIndex(prev => prev + 1);
      setSelectedOption(null);
    }
  };

  const handleReset = () => {
    setActiveDilemmaIndex(0);
    setSelectedOption(null);
  };

  const chosenOptionObj = dilemma.options.find(o => o.id === selectedOption);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-indigo-950 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-400/30">
            <Scale className="w-3.5 h-3.5" />
            Simulador de Decisão Pedagógica & Dilemas Éticos
          </span>
          <span className="text-xs text-rose-200 font-mono">
            Dilema {activeDilemmaIndex + 1} de {ETHICAL_DILEMMAS.length}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          {dilemma.title}
        </h3>
        <p className="text-sm text-rose-100 max-w-3xl leading-relaxed">
          Baseado nas 8 Dimensões de Limitações da IA (Págs. 4 e 5 do PDF).
          Coloque-se na pele do docente e decida qual a melhor intervenção face a riscos de RGPD, alucinações, dependência cognitiva ou avaliação da autoria.
        </p>
      </div>

      <div className="p-5 sm:p-7">
        {/* Situation Card */}
        <div className="bg-rose-50/50 border border-rose-200/80 rounded-xl p-5 mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-800 uppercase tracking-wide mb-2">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            Cenário Real em Sala de Aula ({dilemma.dimension})
          </div>
          <p className="text-base text-slate-800 leading-relaxed font-medium">
            {dilemma.situation}
          </p>
          <div className="mt-3 text-xs text-slate-500 flex items-center gap-1.5 font-mono">
            <FileLock className="w-3.5 h-3.5 text-slate-400" />
            Enquadramento: {dilemma.regulatoryContext}
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          <h4 className="text-sm font-bold text-slate-900 mb-2">
            Como deve o professor intervir nesta situação?
          </h4>

          {dilemma.options.map((option) => {
            const isSelected = selectedOption === option.id;

            return (
              <button
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? (option.isRecommended
                        ? 'border-emerald-500 bg-emerald-50/70 ring-2 ring-emerald-400/30'
                        : 'border-rose-400 bg-rose-50/70 ring-2 ring-rose-300')
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${
                    isSelected
                      ? (option.isRecommended ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white')
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {option.id.toUpperCase()}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-slate-900 leading-snug">
                      {option.text}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback area */}
        {chosenOptionObj && (
          <div className={`p-4 rounded-xl border mb-6 flex items-start gap-3 ${
            chosenOptionObj.isRecommended
              ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
              : 'bg-rose-50 border-rose-300 text-rose-950'
          }`}>
            {chosenOptionObj.isRecommended ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className="text-sm font-bold mb-1">
                {chosenOptionObj.isRecommended 
                  ? 'Abordagem Pedagógica Recomendada!' 
                  : 'Risco Pedagógico ou Legal Identificado!'}
              </p>
              <p className="text-xs sm:text-sm leading-relaxed">
                {chosenOptionObj.pedagogicalFeedback}
              </p>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Voltar ao 1.º Dilema</span>
          </button>

          {activeDilemmaIndex < ETHICAL_DILEMMAS.length - 1 ? (
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`inline-flex items-center gap-2 font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg transition-colors ${
                selectedOption
                  ? 'bg-slate-900 hover:bg-slate-800 text-white cursor-pointer'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>Avançar para o Próximo Dilema</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Analisou todos os dilemas éticos!
              </span>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-slate-700"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
