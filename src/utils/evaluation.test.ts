import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateQuizScore, filterTools, evaluateClassification, generatePromptTemplate } from './evaluation.ts';
import { QUIZ_QUESTIONS, AI_TOOLS, CLASSIFICATION_SCENARIOS } from '../data/courseData.ts';

test('calculateQuizScore correctly handles 100% correct answers', () => {
  const perfectAnswers: Record<number, number> = {};
  for (const q of QUIZ_QUESTIONS) {
    perfectAnswers[q.id] = q.correctIndex;
  }

  const result = calculateQuizScore(perfectAnswers, QUIZ_QUESTIONS);
  assert.equal(result.score, QUIZ_QUESTIONS.length);
  assert.equal(result.total, QUIZ_QUESTIONS.length);
  assert.equal(result.percentage, 100);
  assert.equal(result.wrongCount, 0);
  assert.equal(result.gradeLabel, 'Excelente!');
});

test('calculateQuizScore handles partial answers and lower scores', () => {
  const answers: Record<number, number> = {
    [QUIZ_QUESTIONS[0].id]: QUIZ_QUESTIONS[0].correctIndex, // 1 correct
    [QUIZ_QUESTIONS[1].id]: 99, // wrong
  };

  const result = calculateQuizScore(answers, QUIZ_QUESTIONS);
  assert.equal(result.score, 1);
  assert.equal(result.wrongCount, QUIZ_QUESTIONS.length - 1);
  assert.equal(result.percentage, 10);
  assert.equal(result.gradeLabel, 'Necessita de Revisão');
});

test('filterTools filters by category and search term correctly', () => {
  const diffitOnly = filterTools(AI_TOOLS, 'diffit', 'todas');
  assert.equal(diffitOnly.length, 1);
  assert.equal(diffitOnly[0].name, 'Diffit');

  const planningOnly = filterTools(AI_TOOLS, '', 'planeamento');
  assert.ok(planningOnly.length >= 2);
  for (const tool of planningOnly) {
    assert.equal(tool.category, 'planeamento');
  }
});

test('evaluateClassification scores user choices properly', () => {
  const userChoices: Record<number, 'analitica' | 'generativa'> = {};
  for (const s of CLASSIFICATION_SCENARIOS) {
    userChoices[s.id] = s.correctType;
  }

  const result = evaluateClassification(userChoices, CLASSIFICATION_SCENARIOS);
  assert.equal(result.correct, CLASSIFICATION_SCENARIOS.length);
  assert.equal(result.percentage, 100);
});

test('generatePromptTemplate outputs a well-structured teacher prompt', () => {
  const prompt = generatePromptTemplate({
    toolName: 'Diffit',
    discipline: 'História',
    schoolYear: '8.º Ano',
    learningGoal: 'Compreender a Revolução Industrial',
    resourceType: 'Texto adaptado com vocabulário de apoio',
    additionalNeeds: 'Alunos com dificuldades de descodificação leitora'
  });

  assert.ok(prompt.includes('Diffit'));
  assert.ok(prompt.includes('História'));
  assert.ok(prompt.includes('8.º Ano'));
  assert.ok(prompt.includes('Ajustes de Inclusão'));
});
