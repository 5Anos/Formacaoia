import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  Compass, 
  Eye, 
  Bot, 
  UserCheck, 
  Sparkles, 
  CheckCircle,
  HelpCircle,
  Award
} from 'lucide-react';
import { TEACHER_VS_AI_PILLARS, TEACHER_FUNDAMENTAL_FUNCTIONS } from '../../data/courseData.ts';

export const TeacherRadarMatrix: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('afeto');
  const [checkedPillars, setCheckedPillars] = useState<Record<string, boolean>>({
    afeto: true,
    interpessoal: true,
    etica: false,
    holistico: true
  });

  const selectedPillar = TEACHER_VS_AI_PILLARS.find(p => p.id === selectedPillarId) || TEACHER_VS_AI_PILLARS[0];

  const togglePillarCheck = (id: string) => {
    setCheckedPillars(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const activeCount = Object.values(checkedPillars).filter(Boolean).length;

  const getPillarIcon = (id: string) => {
    switch(id) {
      case 'afeto': return Heart;
      case 'interpessoal': return Users;
      case 'etica': return Compass;
      case 'holistico': return Eye;
      default: return Heart;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-indigo-100 border border-white/20">
            <UserCheck className="w-3.5 h-3.5" />
            Matriz Interativa de Insubstituibilidade Docente
          </span>
          <span className="text-xs bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 px-2.5 py-0.5 rounded-full font-bold">
            A IA vai substituir o professor? NÃO.
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Os 4 Pilares Humanos do Professor vs. As Limitações da IA
        </h3>
        <p className="text-sm text-indigo-100 max-w-3xl leading-relaxed">
          O Módulo 1 (Pág. 5) estabelece categoricamente: a IA é apenas uma ferramenta de apoio.
          O ato pedagógico verdadeiro assenta na dimensão relacional, afetiva, crítica e holística que nenhum modelo computacional possui.
        </p>
      </div>

      <div className="p-5 sm:p-7">
        {/* The 4 Pillar Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {TEACHER_VS_AI_PILLARS.map((p) => {
            const Icon = getPillarIcon(p.id);
            const isSelected = selectedPillarId === p.id;
            const isChecked = checkedPillars[p.id];

            return (
              <button
                key={p.id}
                onClick={() => setSelectedPillarId(p.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-500/30 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span 
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePillarCheck(p.id);
                    }}
                    className={`w-5 h-5 rounded-md flex items-center justify-center text-xs transition-colors ${
                      isChecked ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                    }`}
                    title="Marcar como praticado ativamente na sua sala de aula"
                  >
                    ✓
                  </span>
                </div>
                <div className="font-bold text-sm text-slate-900 leading-snug">
                  {p.pilar}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  {isChecked ? 'Mobilizado na sua prática' : 'Clique para assinalar'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Face-Off */}
        <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 mb-6">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-md">
              Pilar em Destaque: {selectedPillar.pilar}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* The Human Teacher */}
            <div className="bg-white rounded-xl p-5 border border-indigo-200 shadow-2xs">
              <div className="flex items-center gap-2 font-bold text-sm text-indigo-900 mb-3 pb-2 border-b border-indigo-100">
                <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs">
                  👨‍🏫
                </div>
                <div>
                  <div>O Professor (Dimensão Humana)</div>
                  <div className="text-[10px] text-indigo-600 font-semibold uppercase">Insubstituível</div>
                </div>
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {selectedPillar.professorHuman}
              </p>
            </div>

            {/* The AI Tool */}
            <div className="bg-white rounded-xl p-5 border border-slate-300 shadow-2xs">
              <div className="flex items-center gap-2 font-bold text-sm text-slate-800 mb-3 pb-2 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-slate-800 text-white flex items-center justify-center text-xs">
                  🤖
                </div>
                <div>
                  <div>A Inteligência Artificial (Ferramenta)</div>
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Limitações Tecnológicas</div>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedPillar.aiTool}
              </p>
            </div>
          </div>

          {/* Key reflection box */}
          <div className="bg-indigo-900 text-white p-4 rounded-xl text-xs sm:text-sm flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-indigo-200 block mb-0.5">Reflexão Pedagógica para a Sessão:</strong>
              {selectedPillar.keyReflection}
            </div>
          </div>
        </div>

        {/* 4 Fundamental Functions of the Teacher */}
        <div className="border border-slate-200 rounded-xl p-5 bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-5 h-5 text-indigo-600" />
            <h4 className="font-bold text-sm sm:text-base text-slate-900">
              As 4 Funções Fundamentais do Professor na Era Digital (Pág. 5)
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TEACHER_FUNDAMENTAL_FUNCTIONS.map((func) => (
              <div 
                key={func.number}
                className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  {func.number}
                </span>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug mb-1">
                    {func.title}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {func.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
