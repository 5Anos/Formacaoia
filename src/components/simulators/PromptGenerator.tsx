import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  Sparkles, 
  Wrench, 
  Info, 
  BookOpen, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { generatePromptTemplate } from '../../utils/evaluation.ts';
import { AI_TOOLS } from '../../data/courseData.ts';

export const PromptGenerator: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState('Diffit');
  const [discipline, setDiscipline] = useState('História e Geografia');
  const [schoolYear, setSchoolYear] = useState('7.º Ano (3.º Ciclo)');
  const [learningGoal, setLearningGoal] = useState('Compreender as causas e consequências da expansão marítima');
  const [resourceType, setResourceType] = useState('Texto adaptado em 2 níveis de leitura com vocabulário de apoio e 4 questões formativas');
  const [inclusionNeeds, setInclusionNeeds] = useState('Alunos com dificuldades de descodificação leitora e 2 alunos de PLNM');
  const [copied, setCopied] = useState(false);

  const promptGenerated = generatePromptTemplate({
    toolName: selectedTool,
    discipline,
    schoolYear,
    learningGoal,
    resourceType,
    additionalNeeds: inclusionNeeds
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(promptGenerated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentToolObj = AI_TOOLS.find(t => t.name.toLowerCase().includes(selectedTool.toLowerCase())) || AI_TOOLS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-violet-950 via-slate-900 to-indigo-950 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-400/30">
            <Terminal className="w-3.5 h-3.5" />
            Laboratório Prático de Prompts Pedagógicos
          </span>
          <span className="text-xs text-violet-200 font-mono">
            Engenharia de Prompt para Docentes
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Gerador de Prompts Didáticos Alinhados ao Módulo 1
        </h3>
        <p className="text-sm text-violet-100 max-w-3xl leading-relaxed">
          Configure os parâmetros da sua aula e gere um prompt com intencionalidade pedagógica,
          diferenciação para inclusão e critérios de verificação contra alucinações, pronto a testar no ChatGPT, Diffit, MagicSchool ou NotebookLM.
        </p>
      </div>

      <div className="p-5 sm:p-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form controls (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Ferramenta-Alvo do Módulo
              </label>
              <select
                value={selectedTool}
                onChange={(e) => setSelectedTool(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              >
                <option value="ChatGPT (OpenAI)">ChatGPT (OpenAI) — Planos e exercícios</option>
                <option value="Diffit">Diffit — Diferenciação e níveis de leitura</option>
                <option value="MagicSchool.ai">MagicSchool.ai — Rubricas e testes</option>
                <option value="Curipod">Curipod — Apresentações participativas</option>
                <option value="NotebookLM (Google)">NotebookLM (Google) — Síntese fundamentada</option>
                <option value="Gamma">Gamma — Apresentações estruturadas</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Disciplina / Área Curricular
              </label>
              <input
                type="text"
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                placeholder="Ex: Português, Matemática, Ciências..."
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Ano de Escolaridade
              </label>
              <select
                value={schoolYear}
                onChange={(e) => setSchoolYear(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              >
                <option value="1.º Ciclo (3.º / 4.º Ano)">1.º Ciclo (3.º / 4.º Ano)</option>
                <option value="2.º Ciclo (5.º / 6.º Ano)">2.º Ciclo (5.º / 6.º Ano)</option>
                <option value="7.º Ano (3.º Ciclo)">7.º Ano (3.º Ciclo)</option>
                <option value="8.º Ano (3.º Ciclo)">8.º Ano (3.º Ciclo)</option>
                <option value="9.º Ano (3.º Ciclo)">9.º Ano (3.º Ciclo)</option>
                <option value="Ensino Secundário (10.º a 12.º Ano)">Ensino Secundário (10.º a 12.º Ano)</option>
                <option value="Ensino Profissional">Ensino Profissional</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Objetivo Pedagógico Central
              </label>
              <textarea
                rows={2}
                value={learningGoal}
                onChange={(e) => setLearningGoal(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                placeholder="Qual a aprendizagem essencial que os alunos devem alcançar?"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Tipo de Recurso a Gerar
              </label>
              <input
                type="text"
                value={resourceType}
                onChange={(e) => setResourceType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                placeholder="Ex: Rubrica de avaliação formativa, quiz, plano de aula..."
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Ajuste de Inclusão / Diferenciação (Opcional)
              </label>
              <input
                type="text"
                value={inclusionNeeds}
                onChange={(e) => setInclusionNeeds(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                placeholder="Ex: Alunos com dislexia, PLNM, linguagem pictográfica..."
              />
            </div>
          </div>

          {/* Generated prompt & output (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-slate-900 text-slate-100 rounded-xl p-5 border border-slate-800">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-indigo-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  prompt_didatico_estruturado.txt
                </span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copiado para a Área de Transferência!' : 'Copiar Prompt'}</span>
                </button>
              </div>

              <pre className="text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed overflow-x-auto max-h-[380px] p-3 bg-slate-950/70 rounded-lg border border-slate-800/80">
                {promptGenerated}
              </pre>
            </div>

            {/* Checklist de Validação Pedagógica */}
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="text-indigo-300 font-semibold flex items-center gap-1">
                <Info className="w-3 h-3" />
                Checklist Pedagógica do Módulo 1 antes de usar em sala de aula:
              </div>
              <p>• Valide factos e datas históricas (prevenção contra alucinações cognitivas).</p>
              <p>• Não insira nomes reais de alunos nem dados pessoais protegidos pelo RGPD.</p>
              <p>• Preserve a sua mediação: adapte o resultado à realidade da sua turma.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
