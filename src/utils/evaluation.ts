import type { QuizQuestion, AITool, ClassificationScenario } from '../types/index.ts';

export interface QuizResult {
  score: number;
  total: number;
  percentage: number;
  correctCount: number;
  wrongCount: number;
  gradeLabel: string;
  feedbackMessage: string;
}

export function calculateQuizScore(
  answers: Record<number, number>,
  questions: QuizQuestion[]
): QuizResult {
  const total = questions.length;
  if (total === 0) {
    return {
      score: 0,
      total: 0,
      percentage: 0,
      correctCount: 0,
      wrongCount: 0,
      gradeLabel: 'Sem questões',
      feedbackMessage: 'Não existem questões para avaliar.'
    };
  }

  let correctCount = 0;
  for (const q of questions) {
    if (answers[q.id] === q.correctIndex) {
      correctCount++;
    }
  }

  const score = correctCount;
  const wrongCount = total - correctCount;
  const percentage = Math.round((correctCount / total) * 100);

  let gradeLabel = 'Excelente!';
  let feedbackMessage = 'Excelente domínio dos fundamentos do Módulo 1! Está pronto para orientar a aplicação prática da IA na educação.';

  if (percentage < 50) {
    gradeLabel = 'Necessita de Revisão';
    feedbackMessage = 'Recomendamos rever os conceitos essenciais do Módulo 1, em especial as limitações pedagógicas, RGPD e o papel mediador do professor.';
  } else if (percentage < 75) {
    gradeLabel = 'Bom Aproveitamento';
    feedbackMessage = 'Bom desempenho! Considere revisitar a distinção entre IA Analítica e Generativa e os 4 pilares humanos da docência.';
  } else if (percentage < 90) {
    gradeLabel = 'Muito Bom!';
    feedbackMessage = 'Muito bom! Demonstra sólida compreensão dos conceitos, ferramentas e desafios éticos da IA na sala de aula.';
  }

  return {
    score,
    total,
    percentage,
    correctCount,
    wrongCount,
    gradeLabel,
    feedbackMessage
  };
}

export function filterTools(
  tools: AITool[],
  searchTerm: string,
  selectedCategory: string
): AITool[] {
  const cleanQuery = searchTerm.trim().toLowerCase();

  return tools.filter((tool) => {
    const matchesCategory =
      selectedCategory === 'todas' || tool.category === selectedCategory;

    if (!matchesCategory) return false;

    if (!cleanQuery) return true;

    return (
      tool.name.toLowerCase().includes(cleanQuery) ||
      tool.pedagogicalApplications.toLowerCase().includes(cleanQuery) ||
      tool.howToUseInClass.toLowerCase().includes(cleanQuery) ||
      tool.badge.toLowerCase().includes(cleanQuery)
    );
  });
}

export function evaluateClassification(
  userChoices: Record<number, 'analitica' | 'generativa'>,
  scenarios: ClassificationScenario[]
): { correct: number; total: number; percentage: number } {
  const total = scenarios.length;
  if (total === 0) return { correct: 0, total: 0, percentage: 0 };

  let correct = 0;
  for (const item of scenarios) {
    if (userChoices[item.id] === item.correctType) {
      correct++;
    }
  }

  const percentage = Math.round((correct / total) * 100);
  return { correct, total, percentage };
}

export function generatePromptTemplate(params: {
  toolName: string;
  discipline: string;
  schoolYear: string;
  learningGoal: string;
  resourceType: string;
  additionalNeeds?: string;
}): string {
  const { toolName, discipline, schoolYear, learningGoal, resourceType, additionalNeeds } = params;

  let prompt = `Atua como professor especialista e formador docente.
Estou a preparar uma atividade com a ferramenta ${toolName} para a disciplina de ${discipline}, destinada a alunos do ${schoolYear}.

Objetivo Pedagógico Central: ${learningGoal}
Recurso a Gerar: ${resourceType}

Diretrizes Pedagógicas:
1. Garante intencionalidade pedagógica clara e rigor científico/curricular.
2. Evita linguagem artificial; usa um tom motivador e acessível para a faixa etária.
3. Inclui critérios claros de avaliação formativa e momentos de reflexão crítica.`;

  if (additionalNeeds && additionalNeeds.trim().length > 0) {
    prompt += `\nAjustes de Inclusão / Diferenciação Pedagógica: ${additionalNeeds}`;
  }

  prompt += `\n\nPor favor, gera o recurso estruturado em etapas práticas de sala de aula.`;

  return prompt;
}
