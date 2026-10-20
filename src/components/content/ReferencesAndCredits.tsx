import React from 'react';
import { 
  FileText, 
  BookMarked, 
  Download, 
  ExternalLink, 
  User, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { BIBLIOGRAPHIC_REFERENCES, COURSE_INFO } from '../../data/courseData.ts';

export const ReferencesAndCredits: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Bibliographic References Section */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
          <BookMarked className="w-4 h-4" />
          Página 6 do PDF Oficial
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          9. Referências Bibliográficas e Créditos
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Fundamentação teórica integral citada no documento do Módulo 1 (Carla Oliveira, 2026):
        </p>

        <div className="space-y-3">
          {BIBLIOGRAPHIC_REFERENCES.map((ref) => (
            <div 
              key={ref.id}
              className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex-1">
                <p className="text-xs sm:text-sm font-serif text-slate-800 leading-relaxed font-medium">
                  {ref.citation}
                </p>
                <p className="text-xs text-indigo-700 mt-1">
                  <strong>Enfoque no Módulo:</strong> {ref.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ficha Técnica Card */}
      <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
          <FileCheck className="w-4 h-4" />
          Ficha Técnica & Enquadramento da Formação
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
          Informações Técnicas do Recurso
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <span className="text-xs text-indigo-200 block mb-1">Título Original (Genially):</span>
            <span className="font-mono font-bold text-white text-sm">
              {COURSE_INFO.originalTitle}
            </span>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <span className="text-xs text-indigo-200 block mb-1">Autora do Recurso Original:</span>
            <span className="font-bold text-white text-sm">
              {COURSE_INFO.author}
            </span>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <span className="text-xs text-indigo-200 block mb-1">Data de Criação:</span>
            <span className="font-bold text-white text-sm">
              {COURSE_INFO.creationDate}
            </span>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <span className="text-xs text-indigo-200 block mb-1">Imagens e Conceitos:</span>
            <span className="font-bold text-white text-xs">
              Alan Turing, Teste de Turing, ChatGPT, NotebookLM, Gemini.
            </span>
          </div>
        </div>

        {/* Download original document banner */}
        <div className="bg-indigo-900/60 border border-indigo-700/60 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">
              Documento Original do Módulo 1 (PDF)
            </h4>
            <p className="text-xs text-indigo-200 mt-0.5">
              Ficheiro completo de 6 páginas com a transcrição integral e guia de estudo para guardar ou imprimir.
            </p>
          </div>

          <a
            href={COURSE_INFO.pdfFileUrl}
            download="Recurso-Modulo1-Fundamentos-IA-CarlaOliveira.pdf"
            className="inline-flex items-center gap-2 bg-white text-indigo-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors shadow-xs flex-shrink-0"
          >
            <Download className="w-4 h-4 text-indigo-700" />
            <span>Descarregar PDF Oficial</span>
          </a>
        </div>
      </section>
    </div>
  );
};
