/**
 * Tipos de dados para a plataforma de formação:
 * "Inteligência Artificial na Educação: Estratégias, Ferramentas e Práticas Pedagógicas"
 * Módulo 1: Fundamentos da Inteligência Artificial (IA)
 * Autora do Recurso: Carla Oliveira
 */

export interface LearningObjective {
  id: number;
  text: string;
  iconName: string;
}

export interface TimelineEvent {
  year: string;
  milestone: string;
  description: string;
  category: 'foundations' | 'symbolic' | 'ml' | 'deeplearning' | 'generative';
  impactInEducation?: string;
}

export interface ConceptDeepDive {
  title: string;
  subtitle: string;
  description: string;
  pedagogicalContext: string;
  keyPoints: string[];
}

export interface AIType {
  id: 'ani' | 'agi' | 'asi';
  name: string;
  fullName: string;
  definition: string;
  currentState: string;
  references: string;
  pedagogicalRelevance: string;
  statusBadge: string;
}

export interface SectorApplication {
  id: string;
  sector: string;
  icon: string;
  utility: string;
  examples: string[];
  educationConnection: string;
}

export interface EducationalBenefit {
  number: number;
  title: string;
  summary: string;
  teacherPractice: string;
  allowsTeacher: string;
  studentImpact: string;
  badge: string;
}

export interface EducationalLimitation {
  id: string;
  dimension: string;
  problemDescription: string;
  pedagogicalChallenge: string;
  severity: 'alta' | 'critica' | 'moderada';
  practicalExample: string;
}

export interface TeacherVsAIPillar {
  id: string;
  pilar: string;
  icon: string;
  professorHuman: string;
  aiTool: string;
  keyReflection: string;
}

export interface TeacherFunction {
  number: number;
  title: string;
  description: string;
}

export interface AITool {
  id: string;
  name: string;
  category: 'planeamento' | 'conteudo-visual' | 'adaptacao' | 'interacao-avaliacao' | 'pesquisa-analise';
  pedagogicalApplications: string;
  howToUseInClass: string;
  promptExample?: string;
  url?: string;
  badge: string;
}

export interface TuringScenario {
  id: number;
  prompt: string;
  context: string;
  responseA: {
    text: string;
    isHuman: boolean;
    analysis: string;
  };
  responseB: {
    text: string;
    isHuman: boolean;
    analysis: string;
  };
  alanTuringLesson: string;
}

export interface ClassificationScenario {
  id: number;
  scenario: string;
  correctType: 'analitica' | 'generativa';
  explanation: string;
  citation: string;
}

export interface EthicalDilemma {
  id: number;
  title: string;
  dimension: string;
  situation: string;
  options: {
    id: string;
    text: string;
    pedagogicalFeedback: string;
    isRecommended: boolean;
  }[];
  regulatoryContext: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  pdfSection: string;
}

export interface BibliographicReference {
  id: string;
  citation: string;
  focus: string;
}
