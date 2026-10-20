import React, { useState } from 'react';
import { 
  BookOpen, 
  History, 
  Brain, 
  Layers, 
  ShieldAlert, 
  UserCheck, 
  Clock, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  ChevronDown,
  Info,
  Scale,
  Binary,
  GraduationCap,
  Heart,
  Users,
  Compass,
  Eye,
  AlertTriangle,
  Lock,
  ArrowRight
} from 'lucide-react';
import { 
  COURSE_INFO, 
  AI_DEFINITION, 
  TIMELINE_EVENTS, 
  CONCEPT_DEEP_DIVES, 
  AI_TYPES, 
  ANALYTICAL_VS_GENERATIVE, 
  SECTOR_APPLICATIONS, 
  EDUCATIONAL_BENEFITS, 
  EDUCATIONAL_LIMITATIONS, 
  TEACHER_VS_AI_PILLARS, 
  TEACHER_FUNDAMENTAL_FUNCTIONS,
  LEARNING_OBJECTIVES
} from '../../data/courseData.ts';

interface FullModuleGuideProps {
  onGoToSimulator: (simulatorName?: string) => void;
}

export const FullModuleGuide: React.FC<FullModuleGuideProps> = ({ onGoToSimulator }) => {
  const [activeSection, setActiveSection] = useState<'todos' | 'conceito' | 'tipos' | 'setores' | 'beneficios' | 'limitacoes' | 'papel'>('todos');
  const [selectedTimelineCategory, setSelectedTimelineCategory] = useState<string>('all');
  const [expandedLimitations, setExpandedLimitations] = useState<Record<string, boolean>>({
    pedagogicas: true,
    rgpd: true,
    cognitivas: true
  });

  const toggleLimitation = (id: string) => {
    setExpandedLimitations(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredTimeline = selectedTimelineCategory === 'all'
    ? TIMELINE_EVENTS
    : TIMELINE_EVENTS.filter(e => e.category === selectedTimelineCategory);

  return (
    <div className="space-y-10">
      {/* Quick Section Filter Bar */}
      <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-2xs flex items-center gap-2 overflow-x-auto">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2 flex-shrink-0">
          Navegar por Secção:
        </span>
        {[
          { id: 'todos', label: 'Ver Módulo Completo' },
          { id: 'conceito', label: '2. Conceito & Linha do Tempo' },
          { id: 'tipos', label: '3. Tipos (ANI/AGI) & Analítica vs Generativa' },
          { id: 'setores', label: '4. Aplicações nos 8 Setores' },
          { id: 'beneficios', label: '5. Benefícios na Educação' },
          { id: 'limitacoes', label: '6. As 8 Limitações & RGPD' },
          { id: 'papel', label: '7. O Papel do Professor' },
        ].map((sec) => (
          <button
            key={sec.id}
            onClick={() => setActiveSection(sec.id as any)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeSection === sec.id
                ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {sec.label}
          </button>
        ))}
      </div>

      {/* SECTION 2: CONCEITOS ESSENCIAIS E EVOLUÇÃO HISTÓRICA */}
      {(activeSection === 'todos' || activeSection === 'conceito') && (
        <section id="sec-conceito" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
            <History className="w-4 h-4" />
            Páginas 1 e 2 do PDF
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
            2. Conceitos Essenciais e Evolução Histórica da IA
          </h2>

          {/* Definition Callout Box */}
          <div className="bg-gradient-to-r from-indigo-50/70 via-indigo-50/40 to-slate-50 border-l-4 border-indigo-600 p-5 sm:p-6 rounded-r-xl mb-8">
            <h3 className="text-base font-bold text-indigo-950 mb-2 flex items-center gap-2">
              <Brain className="w-5 h-5 text-indigo-600" />
              {AI_DEFINITION.title} (Definição Oficial)
            </h3>
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed italic">
              «{AI_DEFINITION.exactText}»
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Evolução Histórica da IA (Linha do Tempo)
                </h3>
                <p className="text-xs text-slate-500">
                  Os 8 marcos fundamentais transcritos da pág. 2 do PDF
                </p>
              </div>

              {/* Timeline filter */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-400">Filtrar:</span>
                <button
                  onClick={() => setSelectedTimelineCategory('all')}
                  className={`px-2.5 py-1 rounded-md ${selectedTimelineCategory === 'all' ? 'bg-indigo-600 text-white font-semibold' : 'bg-slate-100 text-slate-600'}`}
                >
                  Todos (8)
                </button>
                <button
                  onClick={() => setSelectedTimelineCategory('foundations')}
                  className={`px-2.5 py-1 rounded-md ${selectedTimelineCategory === 'foundations' ? 'bg-indigo-600 text-white font-semibold' : 'bg-slate-100 text-slate-600'}`}
                >
                  Pioneiros (1950–56)
                </button>
                <button
                  onClick={() => setSelectedTimelineCategory('generative')}
                  className={`px-2.5 py-1 rounded-md ${selectedTimelineCategory === 'generative' ? 'bg-indigo-600 text-white font-semibold' : 'bg-slate-100 text-slate-600'}`}
                >
                  IA Generativa (2020+)
                </button>
              </div>
            </div>

            <div className="relative border-l-2 border-indigo-200 ml-4 pl-6 space-y-6">
              {filteredTimeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-indigo-600 group-hover:scale-125 group-hover:bg-indigo-600 transition-all" />

                  <div className="bg-slate-50 hover:bg-indigo-50/40 rounded-xl p-4 border border-slate-200 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-0.5 rounded-full">
                        {item.year}
                      </span>
                      <span className="font-bold text-sm text-slate-900">
                        {item.milestone}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      {item.description}
                    </p>
                    {item.impactInEducation && (
                      <div className="text-[11px] text-indigo-900 bg-white/80 p-2 rounded border border-indigo-100 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                        <span><strong>Reflexo Pedagógico:</strong> {item.impactInEducation}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Dives: Teste de Turing & Deep Learning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-slate-100">
            {CONCEPT_DEEP_DIVES.map((concept, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-100/70 px-2 py-0.5 rounded">
                    Aprofundamento de Conceitos (Pág. 2)
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-2 mb-1">
                    {concept.title}
                  </h4>
                  <p className="text-xs text-slate-500 italic mb-3">
                    {concept.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                    {concept.description}
                  </p>
                  <div className="text-xs text-indigo-950 bg-indigo-50 p-2.5 rounded-lg border border-indigo-100 mb-3">
                    <strong>Na Educação:</strong> {concept.pedagogicalContext}
                  </div>
                </div>

                {concept.title === 'Teste de Turing' && (
                  <button
                    onClick={() => onGoToSimulator('turing')}
                    className="mt-2 inline-flex items-center justify-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Experimentar o Simulador do Teste de Turing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: TIPOS DE IA & IA ANALÍTICA VS GENERATIVA */}
      {(activeSection === 'todos' || activeSection === 'tipos') && (
        <section id="sec-tipos" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Layers className="w-4 h-4" />
            Páginas 2 e 3 do PDF
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
            3. Tipos de IA e Distinção entre IA Analítica e Generativa
          </h2>

          {/* 3 Types Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {AI_TYPES.map((type) => (
              <div 
                key={type.id}
                className={`rounded-xl border p-5 flex flex-col justify-between ${
                  type.id === 'ani'
                    ? 'border-emerald-300 bg-emerald-50/20'
                    : 'border-slate-200 bg-slate-50/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold uppercase text-slate-600">
                      {type.id.toUpperCase()}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      type.id === 'ani'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      {type.statusBadge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {type.name}
                  </h3>
                  <div className="text-xs text-slate-500 mb-2">
                    {type.fullName}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed mb-3">
                    {type.definition}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-mono">
                  Referência: {type.references}
                </div>
              </div>
            ))}
          </div>

          {/* Analytical vs Generative Side-by-side */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white">
                  IA Analítica (Tradicional) vs. IA Generativa
                </h3>
                <p className="text-xs text-slate-400">
                  Comparativo conceptual central para a prática docente (Pág. 3)
                </p>
              </div>
              <button
                onClick={() => onGoToSimulator('classificacao')}
                className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Praticar no Simulador de Classificação</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Analytical */}
              <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Binary className="w-5 h-5 text-blue-400" />
                  <h4 className="font-bold text-base text-blue-300">
                    {ANALYTICAL_VS_GENERATIVE.analytical.title}
                  </h4>
                </div>
                <div className="text-xs text-slate-400 italic mb-3">
                  {ANALYTICAL_VS_GENERATIVE.analytical.references}
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                  {ANALYTICAL_VS_GENERATIVE.analytical.description}
                </p>
                <div className="text-xs text-slate-300 bg-slate-900/80 p-3 rounded-lg border border-slate-700/80">
                  <strong className="text-blue-300 block mb-1">Exemplo na Escola:</strong>
                  {ANALYTICAL_VS_GENERATIVE.analytical.schoolExample}
                </div>
              </div>

              {/* Generative */}
              <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <h4 className="font-bold text-base text-purple-300">
                    {ANALYTICAL_VS_GENERATIVE.generative.title}
                  </h4>
                </div>
                <div className="text-xs text-slate-400 italic mb-3">
                  {ANALYTICAL_VS_GENERATIVE.generative.references}
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                  {ANALYTICAL_VS_GENERATIVE.generative.description}
                </p>
                <div className="text-xs text-slate-300 bg-slate-900/80 p-3 rounded-lg border border-slate-700/80">
                  <strong className="text-purple-300 block mb-1">Exemplo na Escola:</strong>
                  {ANALYTICAL_VS_GENERATIVE.generative.schoolExample}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: APLICAÇÕES NOS DIFERENTES SETORES */}
      {(activeSection === 'todos' || activeSection === 'setores') && (
        <section id="sec-setores" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
            <GraduationCap className="w-4 h-4" />
            Página 3 do PDF
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            4. Aplicações da IA nos Diferentes Setores
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            A IA não atua apenas na educação: tem impacto transversal em múltiplos setores socioeconómicos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECTOR_APPLICATIONS.map((sector) => (
              <div 
                key={sector.id}
                className="bg-slate-50 hover:bg-indigo-50/30 rounded-xl p-4 border border-slate-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-200">
                    <span className="font-bold text-sm text-slate-900">
                      {sector.sector}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    {sector.utility}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase mb-1">
                    Exemplos Práticos:
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {sector.examples.map((ex, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 5: BENEFÍCIOS DA IA NA EDUCAÇÃO */}
      {(activeSection === 'todos' || activeSection === 'beneficios') && (
        <section id="sec-beneficios" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
            <CheckCircle2 className="w-4 h-4" />
            Páginas 3 e 4 do PDF
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            5. Benefícios da IA na Educação
          </h2>
          
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 sm:p-5 mb-6 text-xs sm:text-sm text-emerald-950 leading-relaxed italic">
            «A Inteligência Artificial pode apoiar significativamente o trabalho do professor na organização e criação de materiais didáticos ajustados ao perfil de cada aluno e fornecer indicadores sobre a evolução das aprendizagens. Para os alunos, promove maior motivação, autonomia, criatividade e aprendizagens mais significativas.»
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EDUCATIONAL_BENEFITS.map((ben) => (
              <div 
                key={ben.number}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                      {ben.number}
                    </span>
                    <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full">
                      {ben.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {ben.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                    {ben.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-slate-800">
                    <strong className="text-emerald-700 block mb-0.5">Na prática docente:</strong>
                    {ben.teacherPractice}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 6: LIMITAÇÕES DA IA NA EDUCAÇÃO */}
      {(activeSection === 'todos' || activeSection === 'limitacoes') && (
        <section id="sec-limitacoes" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              Páginas 4 e 5 do PDF
            </div>
            <button
              onClick={() => onGoToSimulator('dilemas')}
              className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-lg transition-colors cursor-pointer"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Simulador de Dilemas Éticos</span>
            </button>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            6. Limitações da IA na Educação: Quadro Crítico & RGPD
          </h2>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            «A Inteligência Artificial tem vindo a ganhar destaque na Educação, mas uma adoção crítica exige o reconhecimento claro das suas limitações, evitando expectativas irrealistas, riscos pedagógicos e decisões pouco fundamentadas.»
          </p>

          <div className="space-y-4">
            {EDUCATIONAL_LIMITATIONS.map((lim) => {
              const isExpanded = expandedLimitations[lim.id];

              return (
                <div 
                  key={lim.id}
                  className="rounded-xl border border-slate-200 overflow-hidden bg-white hover:border-slate-300 transition-all"
                >
                  <div 
                    onClick={() => toggleLimitation(lim.id)}
                    className="p-4 sm:p-5 flex items-center justify-between cursor-pointer bg-slate-50/60 hover:bg-slate-100/60 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        lim.severity === 'critica' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-slate-900">
                          {lim.dimension}
                        </h3>
                        <div className="text-xs text-slate-500">
                          {lim.severity === 'critica' ? 'Atenção Crítica / Risco Legal' : 'Desafio Pedagógico'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isExpanded ? <ChevronDown className="w-5 h-5 text-slate-400" /> : <ChevronRight className="w-5 h-5 text-slate-400" />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-4 sm:p-6 border-t border-slate-200 space-y-3 bg-white text-xs sm:text-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                          <strong className="text-slate-900 block mb-1 text-xs uppercase tracking-wider text-rose-800">
                            Descrição do Problema / Risco (PDF):
                          </strong>
                          <p className="text-slate-700 leading-relaxed">
                            {lim.problemDescription}
                          </p>
                        </div>

                        <div className="bg-indigo-50/60 p-3 rounded-lg border border-indigo-200">
                          <strong className="text-slate-900 block mb-1 text-xs uppercase tracking-wider text-indigo-800">
                            Implicação / Desafio Pedagógico (PDF):
                          </strong>
                          <p className="text-indigo-950 font-medium leading-relaxed">
                            {lim.pedagogicalChallenge}
                          </p>
                        </div>
                      </div>

                      <div className="text-slate-600 bg-white p-2.5 rounded border border-slate-100 text-xs flex items-center gap-2">
                        <Info className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <span><strong>Cenário na Escola:</strong> {lim.practicalExample}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* SECTION 7: O PAPEL DO PROFESSOR NA ERA DA IA */}
      {(activeSection === 'todos' || activeSection === 'papel') && (
        <section id="sec-papel" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
            <UserCheck className="w-4 h-4" />
            Página 5 do PDF
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            7. O Papel do Professor na Era da IA
          </h2>

          {/* Big Banner: A IA vai substituir o professor? NÃO. */}
          <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-2xl p-6 sm:p-7 mb-8 shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
                  Princípio Pedagógico Inabalável
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  A IA vai substituir o professor? NÃO.
                </h3>
                <p className="text-sm text-slate-200 mt-2 max-w-2xl leading-relaxed">
                  «A IA funciona como uma ferramenta de apoio, mas não substitui o papel pedagógico do professor. A comparação entre as capacidades humanas e as limitações tecnológicas demonstra a insubstituibilidade do docente.»
                </p>
              </div>
              <button
                onClick={() => onGoToSimulator('radar')}
                className="inline-flex items-center gap-2 bg-white text-indigo-900 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors flex-shrink-0 cursor-pointer shadow-xs"
              >
                <span>Explorar os 4 Pilares</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* The 4 Pillars Table from PDF */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 mb-8">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider font-semibold">
                <tr>
                  <th className="p-3.5 w-1/4">Pilar Humano</th>
                  <th className="p-3.5 w-3/8 text-indigo-300">O Professor (Dimensão Humana)</th>
                  <th className="p-3.5 w-3/8 text-slate-300">A Inteligência Artificial (Ferramenta)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {TEACHER_VS_AI_PILLARS.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 font-bold text-slate-900">
                      {p.pilar}
                    </td>
                    <td className="p-3.5 text-slate-800 bg-indigo-50/30 leading-relaxed font-medium">
                      {p.professorHuman}
                    </td>
                    <td className="p-3.5 text-slate-600 leading-relaxed">
                      {p.aiTool}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 4 Functions of the Teacher in the Digital Era */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              Funções Fundamentais do Professor na Era Digital (Pág. 5)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TEACHER_FUNDAMENTAL_FUNCTIONS.map((f) => (
                <div key={f.number} className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {f.number}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 mb-1">
                      {f.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
