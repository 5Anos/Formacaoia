import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw, 
  HelpCircle, 
  BookOpen, 
  Share2, 
  Printer, 
  Sparkles,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { QUIZ_QUESTIONS, COURSE_INFO } from '../../data/courseData.ts';
import { calculateQuizScore } from '../../utils/evaluation.ts';

export const CourseQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<number, boolean>>({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [traineeName, setTraineeName] = useState('');

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const selectedAnswerIndex = userAnswers[currentQuestion.id];
  const isCurrentSubmitted = submittedQuestions[currentQuestion.id];

  const handleSelectOption = (index: number) => {
    if (isCurrentSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: index
    }));
  };

  const handleConfirmAnswer = () => {
    if (selectedAnswerIndex === undefined) return;
    setSubmittedQuestions(prev => ({
      ...prev,
      [currentQuestion.id]: true
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setSubmittedQuestions({});
    setIsQuizCompleted(false);
  };

  const quizResult = calculateQuizScore(userAnswers, QUIZ_QUESTIONS);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Quiz Top Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            <Award className="w-3.5 h-3.5" />
            Desafio Formativo do Módulo 1
          </span>
          <span className="text-xs text-emerald-200 font-mono">
            {isQuizCompleted ? 'Concluído' : `Questão ${currentQuestionIndex + 1} de ${QUIZ_QUESTIONS.length}`}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Avaliação de Consolidação: Fundamentos da IA na Educação
        </h3>
        <p className="text-sm text-emerald-100 max-w-3xl leading-relaxed">
          10 perguntas estruturadas com base direta no documento transcrito por <strong>Carla Oliveira</strong>.
          Ideal para verificação de conceitos essenciais, identificação de limitações e reflexão sobre a prática docente.
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 rounded-full h-2 mt-4 overflow-hidden border border-slate-700">
          <div 
            className="bg-emerald-500 h-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + (isQuizCompleted ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-5 sm:p-7">
        {!isQuizCompleted ? (
          <div>
            {/* Question Card */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{currentQuestion.pdfSection}</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {currentQuestion.question}
              </h4>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswerIndex === idx;
                const isCorrect = idx === currentQuestion.correctIndex;
                const showCorrectness = isCurrentSubmitted;

                let optionStyle = 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800';

                if (showCorrectness) {
                  if (isCorrect) {
                    optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium ring-2 ring-emerald-300';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'border-rose-400 bg-rose-50 text-rose-950 ring-2 ring-rose-200';
                  } else {
                    optionStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-indigo-600 bg-indigo-50/60 text-indigo-950 font-medium ring-2 ring-indigo-400/40';
                }

                return (
                  <button
                    key={idx}
                    disabled={isCurrentSubmitted}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${optionStyle}`}
                  >
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm leading-relaxed flex-1">
                      {option}
                    </span>
                    {showCorrectness && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    )}
                    {showCorrectness && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after submit */}
            {isCurrentSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed">
                <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  Fundamentação Pedagógica (Transcrição do PDF):
                </div>
                <p>{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-400">
                Responda com base nos conceitos do Módulo 1
              </span>

              {!isCurrentSubmitted ? (
                <button
                  onClick={handleConfirmAnswer}
                  disabled={selectedAnswerIndex === undefined}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    selectedAnswerIndex !== undefined
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer shadow-xs'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>Confirmar Resposta</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-xs"
                >
                  <span>{currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Próxima Questão' : 'Ver Resultado Final'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Results and Symbolic Completion Certificate */
          <div className="space-y-6">
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-4 shadow-inner">
                <Award className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 mb-1">
                {quizResult.gradeLabel}
              </h4>
              <p className="text-sm text-slate-600 max-w-lg mx-auto mb-4">
                {quizResult.feedbackMessage}
              </p>

              <div className="inline-flex items-center gap-6 bg-slate-50 border border-slate-200 px-6 py-3 rounded-2xl">
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {quizResult.score} / {quizResult.total}
                  </div>
                  <div className="text-xs text-slate-500">Respostas Corretas</div>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <div className="text-2xl font-bold text-emerald-600">
                    {quizResult.percentage}%
                  </div>
                  <div className="text-xs text-slate-500">Aproveitamento</div>
                </div>
              </div>
            </div>

            {/* Certificate Form */}
            <div className="max-w-2xl mx-auto bg-gradient-to-b from-indigo-50/50 to-white rounded-2xl p-6 border-2 border-indigo-200 shadow-sm print:border-slate-800">
              <div className="text-center pb-4 mb-4 border-b border-indigo-100">
                <div className="text-[11px] font-bold text-indigo-700 uppercase tracking-widest mb-1">
                  Comprovativo Simbólico de Conclusão do Módulo 1
                </div>
                <h5 className="text-lg font-bold text-slate-900">
                  {COURSE_INFO.trainingTitle}
                </h5>
                <p className="text-xs text-slate-500">
                  {COURSE_INFO.moduleTitle} • Autora: {COURSE_INFO.author}
                </p>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nome do Formando / Docente:
                </label>
                <input
                  type="text"
                  value={traineeName}
                  onChange={(e) => setTraineeName(e.target.value)}
                  placeholder="Introduza o seu nome para o comprovativo..."
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {traineeName && (
                <div className="p-4 bg-white rounded-xl border border-indigo-100 text-center my-4">
                  <p className="text-xs text-slate-500 italic mb-1">Certifica-se que o docente</p>
                  <p className="text-base font-extrabold text-indigo-950 uppercase tracking-wide">
                    {traineeName}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Concluiu com êxito as atividades formativas do Módulo 1 ({quizResult.percentage}% de aproveitamento),
                    demonstrando domínio sobre os conceitos fundamentais, limitações e o papel do professor.
                  </p>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Repetir Quiz</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Imprimir Comprovativo</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
