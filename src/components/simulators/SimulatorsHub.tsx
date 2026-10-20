import React, { useState } from 'react';
import { 
  Bot, 
  GitCompare, 
  Scale, 
  UserCheck, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { TuringSimulator } from './TuringSimulator.tsx';
import { ClassificationSimulator } from './ClassificationSimulator.tsx';
import { EthicalDilemmaSimulator } from './EthicalDilemmaSimulator.tsx';
import { TeacherRadarMatrix } from './TeacherRadarMatrix.tsx';
import { PromptGenerator } from './PromptGenerator.tsx';

interface SimulatorsHubProps {
  initialSimulator?: string;
}

export const SimulatorsHub: React.FC<SimulatorsHubProps> = ({ initialSimulator = 'turing' }) => {
  const [activeSimulator, setActiveSimulator] = useState<string>(initialSimulator);

  const simulatorsList = [
    {
      id: 'turing',
      title: '1. Simulador do Teste de Turing (1950)',
      badge: 'Marco Histórico • Pág. 2',
      description: 'Experimente a teoria de Alan Turing: consiga distinguir as respostas de um professor humano vs. uma IA num diálogo escrito.',
      icon: Bot,
      color: 'from-indigo-600 to-indigo-800'
    },
    {
      id: 'classificacao',
      title: '2. Analítica vs. Generativa',
      badge: 'Conceito Central • Pág. 3',
      description: 'Classifique 6 práticas escolares reais segundo Mitchell (1997)/Bishop (2006) vs. Brown (2020)/Bommasani (2021).',
      icon: GitCompare,
      color: 'from-teal-600 to-slate-800'
    },
    {
      id: 'dilemas',
      title: '3. Dilemas Éticos & 8 Limitações',
      badge: 'RGPD & Desafios • Págs. 4-5',
      description: 'Tome decisões pedagógicas em casos reais de avaliação da autoria, alucinações cognitivas e privacidade com menores.',
      icon: Scale,
      color: 'from-rose-600 to-slate-900'
    },
    {
      id: 'radar',
      title: '4. O Professor Insubstituível',
      badge: 'Os 4 Pilares • Pág. 5',
      description: 'Explore o confronto entre a dimensão humana docente (afeto, empatia, ética) e as limitações das ferramentas.',
      icon: UserCheck,
      color: 'from-purple-600 to-indigo-900'
    },
    {
      id: 'prompts',
      title: '5. Laboratório de Prompts',
      badge: 'Prática de Sala de Aula',
      description: 'Gere comandos pedagógicos estruturados para as 13 ferramentas (ChatGPT, Diffit, MagicSchool, NotebookLM) com inclusão.',
      icon: Terminal,
      color: 'from-violet-600 to-slate-900'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Top Selector Grid */}
      <div>
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
            Laboratório Prático da Sessão
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-2">
            Simuladores & Dinâmicas Pedagógicas Interativas
          </h2>
          <p className="text-sm text-slate-600">
            Selecione uma das 5 atividades interativas desenhadas especificamente para apoiar os professores formandos durante a formação:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {simulatorsList.map((item) => {
            const Icon = item.icon;
            const isSelected = activeSimulator === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveSimulator(item.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-500/30 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg text-white bg-gradient-to-br ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                      {item.badge.split('•')[0]}
                    </span>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className={isSelected ? 'text-indigo-700 font-bold' : 'text-slate-400'}>
                    {isSelected ? 'Em execução' : 'Abrir simulador'}
                  </span>
                  <ArrowRight className={`w-3 h-3 ${isSelected ? 'text-indigo-600' : 'text-slate-300'}`} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Simulator Render */}
      <div className="transition-all">
        {activeSimulator === 'turing' && <TuringSimulator />}
        {activeSimulator === 'classificacao' && <ClassificationSimulator />}
        {activeSimulator === 'dilemas' && <EthicalDilemmaSimulator />}
        {activeSimulator === 'radar' && <TeacherRadarMatrix />}
        {activeSimulator === 'prompts' && <PromptGenerator />}
      </div>
    </div>
  );
};
