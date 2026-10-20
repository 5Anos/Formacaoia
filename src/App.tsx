/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { HeroBanner } from './components/HeroBanner.tsx';
import { FullModuleGuide } from './components/content/FullModuleGuide.tsx';
import { SimulatorsHub } from './components/simulators/SimulatorsHub.tsx';
import { CourseQuiz } from './components/simulators/CourseQuiz.tsx';
import { ToolsCatalog } from './components/tools/ToolsCatalog.tsx';
import { ReferencesAndCredits } from './components/content/ReferencesAndCredits.tsx';
import { PresentationModal } from './components/PresentationModal.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('conteudo');
  const [presentationOpen, setPresentationOpen] = useState<boolean>(false);
  const [selectedSimulator, setSelectedSimulator] = useState<string>('turing');

  const handleGoToSimulator = (simulatorId?: string) => {
    if (simulatorId) {
      setSelectedSimulator(simulatorId);
    }
    setActiveTab('simuladores');
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Header & Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPresentation={() => setPresentationOpen(true)}
      />

      {/* Hero Banner or Compact Tab Header */}
      {activeTab === 'conteudo' ? (
        <HeroBanner onSelectTab={setActiveTab} />
      ) : (
        <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 text-white border-b border-indigo-900/50 py-5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs text-indigo-300 mb-1">
                <button 
                  onClick={() => setActiveTab('conteudo')} 
                  className="hover:underline hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  Módulo 1: Fundamentos
                </button>
                <span>/</span>
                <span className="font-semibold text-white">
                  {activeTab === 'simuladores' && 'Simuladores & Dinâmicas'}
                  {activeTab === 'quiz' && 'Desafio do Formando'}
                  {activeTab === 'ferramentas' && '13 Ferramentas Docentes'}
                  {activeTab === 'fontes' && 'Referências & Créditos'}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {activeTab === 'simuladores' && 'Laboratório de Simulação & Atividades Práticas'}
                {activeTab === 'quiz' && 'Desafio de Consolidação do Módulo 1'}
                {activeTab === 'ferramentas' && 'Catálogo das 13 Ferramentas de IA'}
                {activeTab === 'fontes' && 'Referências Bibliográficas e Ficha Técnica'}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setActiveTab('conteudo')} 
                className="text-xs font-semibold text-indigo-200 hover:text-white bg-indigo-900/60 hover:bg-indigo-800/80 px-3.5 py-2 rounded-lg border border-indigo-700/60 transition-colors cursor-pointer"
              >
                ← Ver Guia Teórico Completo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex-1 w-full">
        {activeTab === 'conteudo' && (
          <FullModuleGuide onGoToSimulator={handleGoToSimulator} />
        )}

        {activeTab === 'simuladores' && (
          <SimulatorsHub initialSimulator={selectedSimulator} />
        )}

        {activeTab === 'quiz' && (
          <CourseQuiz />
        )}

        {activeTab === 'ferramentas' && (
          <ToolsCatalog />
        )}

        {activeTab === 'fontes' && (
          <ReferencesAndCredits />
        )}
      </main>

      {/* Presentation / Projector Fullscreen Mode */}
      <PresentationModal
        isOpen={presentationOpen}
        onClose={() => setPresentationOpen(false)}
      />

      {/* Footer */}
      <Footer onSelectTab={setActiveTab} />
    </div>
  );
}
