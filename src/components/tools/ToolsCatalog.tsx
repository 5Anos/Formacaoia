import React, { useState } from 'react';
import { 
  Wrench, 
  Search, 
  Filter, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  BookOpen, 
  Layers, 
  Compass, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { AI_TOOLS } from '../../data/courseData.ts';
import { filterTools } from '../../utils/evaluation.ts';
import type { AITool } from '../../types/index.ts';

export const ToolsCatalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredTools = filterTools(AI_TOOLS, searchTerm, selectedCategory);

  const categories = [
    { id: 'todas', label: 'Todas as 13 Ferramentas' },
    { id: 'planeamento', label: 'Planeamento & Gestão' },
    { id: 'adaptacao', label: 'Diferenciação & Inclusão' },
    { id: 'interacao-avaliacao', label: 'Avaliação & Interação' },
    { id: 'conteudo-visual', label: 'Visual, Vídeo & Voz' },
    { id: 'pesquisa-analise', label: 'Pesquisa & Documentos' },
  ];

  const handleCopyPrompt = (tool: AITool) => {
    if (tool.promptExample) {
      navigator.clipboard.writeText(tool.promptExample);
      setCopiedId(tool.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
            <Wrench className="w-3.5 h-3.5" />
            Secção 8 do PDF Oficial
          </span>
          <span className="text-xs text-indigo-300 font-mono">
            {filteredTools.length} de {AI_TOOLS.length} ferramentas
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          As 13 Ferramentas de IA Mencionadas no Módulo
        </h3>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Catálogo interativo com as ferramentas de inteligência artificial destacadas no recurso por <strong>Carla Oliveira</strong>,
          com as respetivas aplicações pedagógicas, sugestões de integração em sala de aula e modelos de comandos (prompts).
        </p>
      </div>

      <div className="p-5 sm:p-7">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar por nome, finalidade (ex: quizzes, rubricas, diferenciar, PDF)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <Filter className="w-4 h-4 text-slate-400 hidden sm:inline" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between p-5"
            >
              <div>
                {/* Badge & Title */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-bold text-base text-slate-900 leading-tight">
                    {tool.name}
                  </h4>
                  <span className="text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-full flex-shrink-0">
                    {tool.badge}
                  </span>
                </div>

                {/* Exact application from PDF */}
                <div className="mb-3">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                    Aplicação Pedagógica (PDF):
                  </div>
                  <p className="text-xs sm:text-sm text-indigo-950 font-medium leading-relaxed bg-indigo-50/50 p-2.5 rounded-lg border border-indigo-100">
                    {tool.pedagogicalApplications}
                  </p>
                </div>

                {/* Practical how-to in classroom */}
                <div className="mb-3 text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800 block mb-0.5">Como aplicar na prática docente:</strong>
                  {tool.howToUseInClass}
                </div>
              </div>

              {/* Prompt template & external link */}
              <div className="pt-3 border-t border-slate-100 space-y-2 mt-2">
                {tool.promptExample && (
                  <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-200 text-[11px] text-slate-700 relative">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-slate-900 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-indigo-600" />
                        Exemplo de Prompt:
                      </span>
                      <button
                        onClick={() => handleCopyPrompt(tool)}
                        className="text-slate-500 hover:text-indigo-600 flex items-center gap-1 text-[10px] cursor-pointer"
                        title="Copiar prompt para a área de transferência"
                      >
                        {copiedId === tool.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedId === tool.id ? 'Copiado!' : 'Copiar'}</span>
                      </button>
                    </div>
                    <p className="italic text-slate-600 line-clamp-3">
                      «{tool.promptExample}»
                    </p>
                  </div>
                )}

                {tool.url && (
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Aceder a {tool.name.split(' ')[0]}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200">
            <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-700">Nenhuma ferramenta encontrada</h4>
            <p className="text-xs text-slate-500 mt-1">
              Tente pesquisar por outro termo ou selecione a categoria "Todas".
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
