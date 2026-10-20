import React, { useState } from 'react';
import { 
  Bot, 
  User, 
  HelpCircle, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Sparkles, 
  BookOpen, 
  Info,
  ChevronRight,
  Eye
} from 'lucide-react';
import { TURING_SCENARIOS } from '../../data/courseData.ts';

export const TuringSimulator: React.FC = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedGuess, setSelectedGuess] = useState<'A-human' | 'B-human' | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [historyResults, setHistoryResults] = useState<{ [key: number]: boolean }>({});

  const scenario = TURING_SCENARIOS[currentScenarioIndex];

  const handleGuess = (guess: 'A-human' | 'B-human') => {
    setSelectedGuess(guess);
    setRevealed(true);

    const isCorrect = 
      (guess === 'A-human' && scenario.responseA.isHuman) ||
      (guess === 'B-human' && scenario.responseB.isHuman);

    setHistoryResults(prev => ({
      ...prev,
      [scenario.id]: isCorrect
    }));
  };

  const handleNext = () => {
    if (currentScenarioIndex < TURING_SCENARIOS.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setSelectedGuess(null);
      setRevealed(false);
    }
  };

  const handleReset = () => {
    setCurrentScenarioIndex(0);
    setSelectedGuess(null);
    setRevealed(false);
    setHistoryResults({});
  };

  const isGuessedCorrectly = selectedGuess && (
    (selectedGuess === 'A-human' && scenario.responseA.isHuman) ||
    (selectedGuess === 'B-human' && scenario.responseB.isHuman)
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
            <Bot className="w-3.5 h-3.5" />
            Simulador Histórico (Marco de 1950)
          </span>
          <div className="flex items-center gap-2 text-xs text-indigo-200">
            <span>Caso {currentScenarioIndex + 1} de {TURING_SCENARIOS.length}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>Alan Turing (Mind, 1950)</span>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Simulador do Teste de Turing: Quem é o Professor Humano?
        </h3>
        <p className="text-sm text-indigo-100 max-w-3xl leading-relaxed">
          Em 1950, Alan Turing propôs o «Jogo da Imitação»: um interrogador conversa por escrito com duas entidades sem as ver
          (um humano e uma máquina). Se a máquina responder de forma tão natural que não se distinga, ela simula inteligência.
          <strong> Conseguirá identificar qual destas respostas foi escrita por um professor de carne e osso?</strong>
        </p>
      </div>

      <div className="p-5 sm:p-7">
        {/* Scenario context prompt */}
        <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-4 sm:p-5 mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-800 uppercase tracking-wide mb-1.5">
            <HelpCircle className="w-4 h-4 text-indigo-600" />
            Situação Pedagógica Apresentada às Duas Entidades
          </div>
          <p className="text-base sm:text-lg font-semibold text-slate-900">
            {scenario.prompt}
          </p>
          <p className="text-xs text-slate-500 mt-1 italic">
            {scenario.context}
          </p>
        </div>

        {/* Responses comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {/* Candidate A */}
          <div className={`rounded-xl border p-5 transition-all relative ${
            revealed 
              ? (scenario.responseA.isHuman 
                  ? 'border-emerald-500 bg-emerald-50/40 ring-2 ring-emerald-400/40' 
                  : 'border-slate-300 bg-slate-50/70')
              : 'border-slate-300 bg-white hover:border-indigo-300 shadow-xs'
          }`}>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200/80">
              <span className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-slate-900 text-white text-xs flex items-center justify-center font-mono">
                  A
                </span>
                Candidato Anónimo A
              </span>
              {revealed && (
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                  scenario.responseA.isHuman 
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                    : 'bg-indigo-100 text-indigo-800 border border-indigo-300'
                }`}>
                  {scenario.responseA.isHuman ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  {scenario.responseA.isHuman ? 'HUMANO (Docente)' : 'MÁQUINA (IA)'}
                </span>
              )}
            </div>

            <p className="text-sm text-slate-800 leading-relaxed italic bg-white/70 p-3.5 rounded-lg border border-slate-200/60 mb-3">
              «{scenario.responseA.text}»
            </p>

            {revealed && (
              <div className="mt-3 text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                <strong className="text-slate-900 block mb-1">Análise dos Padrões:</strong>
                {scenario.responseA.analysis}
              </div>
            )}
          </div>

          {/* Candidate B */}
          <div className={`rounded-xl border p-5 transition-all relative ${
            revealed 
              ? (scenario.responseB.isHuman 
                  ? 'border-emerald-500 bg-emerald-50/40 ring-2 ring-emerald-400/40' 
                  : 'border-slate-300 bg-slate-50/70')
              : 'border-slate-300 bg-white hover:border-indigo-300 shadow-xs'
          }`}>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200/80">
              <span className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-slate-900 text-white text-xs flex items-center justify-center font-mono">
                  B
                </span>
                Candidato Anónimo B
              </span>
              {revealed && (
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                  scenario.responseB.isHuman 
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                    : 'bg-indigo-100 text-indigo-800 border border-indigo-300'
                }`}>
                  {scenario.responseB.isHuman ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  {scenario.responseB.isHuman ? 'HUMANO (Docente)' : 'MÁQUINA (IA)'}
                </span>
              )}
            </div>

            <p className="text-sm text-slate-800 leading-relaxed italic bg-white/70 p-3.5 rounded-lg border border-slate-200/60 mb-3">
              «{scenario.responseB.text}»
            </p>

            {revealed && (
              <div className="mt-3 text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                <strong className="text-slate-900 block mb-1">Análise dos Padrões:</strong>
                {scenario.responseB.analysis}
              </div>
            )}
          </div>
        </div>

        {/* Voting controls */}
        {!revealed ? (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center">
            <h4 className="text-sm font-bold text-slate-800 mb-3">
              Qual das duas respostas foi produzida pelo SER HUMANO?
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleGuess('A-human')}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <User className="w-4 h-4" />
                <span>O Candidato A é o Ser Humano</span>
              </button>
              <span className="text-xs text-slate-400 font-semibold uppercase">ou</span>
              <button
                onClick={() => handleGuess('B-human')}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <User className="w-4 h-4" />
                <span>O Candidato B é o Ser Humano</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Feedback box */}
            <div className={`p-4 rounded-xl border flex items-start gap-3 ${
              isGuessedCorrectly 
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
                : 'bg-amber-50 border-amber-200 text-amber-900'
            }`}>
              {isGuessedCorrectly ? (
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className="text-sm font-bold">
                  {isGuessedCorrectly 
                    ? 'Acertou! Excelente sensibilidade pedagógica.' 
                    : 'Não acertou, e isso é precisamente o que Turing demonstrou!'}
                </p>
                <p className="text-xs mt-1 leading-relaxed">
                  {scenario.alanTuringLesson}
                </p>
              </div>
            </div>

            {/* Navigation to next scenario */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar Teste</span>
              </button>

              {currentScenarioIndex < TURING_SCENARIOS.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Próximo Caso do Teste</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Completou todos os casos do Teste de Turing!
                  </span>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-slate-700"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Repetir</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Theoretical summary note */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-500">
          <Info className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Nota Pedagógica (Transcrição Pág. 2 do PDF):</strong> O Teste de Turing foi um exercício teórico publicado por Alan Turing em 1950. 
            Na era dos Grandes Modelos de Linguagem (LLMs), a máquina consegue imitar a sintaxe, mas permanece desprovida de vivência corporal, intenção moral, consciência e empatia docente genuína.
          </p>
        </div>
      </div>
    </div>
  );
};
