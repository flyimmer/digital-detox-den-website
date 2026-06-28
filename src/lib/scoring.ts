import { quizQuestions, resultOrder, type QuizQuestion, type ResultTypeId } from "../data/quiz";

export type Selections = Record<string, string>;

export type ScoringResult = {
  resultId: ResultTypeId;
  scores: Record<ResultTypeId, number>;
};

const tieBreakQuestionIds = ["q1", "q8", "q2"];

function emptyScores(): Record<ResultTypeId, number> {
  return resultOrder.reduce(
    (scores, id) => {
      scores[id] = 0;
      return scores;
    },
    {} as Record<ResultTypeId, number>,
  );
}

function getAnswerScore(questions: QuizQuestion[], questionId: string, answerId: string | undefined, typeId: ResultTypeId) {
  const question = questions.find((item) => item.id === questionId);
  const answer = question?.answers.find((item) => item.id === answerId);
  return answer?.scores[typeId] ?? 0;
}

export function scoreQuiz(selections: Selections, questions = quizQuestions): ScoringResult {
  const scores = emptyScores();

  for (const question of questions) {
    const selectedAnswer = question.answers.find((answer) => answer.id === selections[question.id]);
    if (!selectedAnswer) continue;

    for (const [typeId, points] of Object.entries(selectedAnswer.scores) as [ResultTypeId, number][]) {
      scores[typeId] += points;
    }
  }

  const maxScore = Math.max(...Object.values(scores));
  let candidates = resultOrder.filter((id) => scores[id] === maxScore);

  for (const questionId of tieBreakQuestionIds) {
    if (candidates.length === 1) break;
    const bestQuestionScore = Math.max(...candidates.map((id) => getAnswerScore(questions, questionId, selections[questionId], id)));
    const narrowed = candidates.filter((id) => getAnswerScore(questions, questionId, selections[questionId], id) === bestQuestionScore);
    if (bestQuestionScore > 0 && narrowed.length > 0) {
      candidates = narrowed;
    }
  }

  return {
    resultId: candidates[0] ?? "evening_scroller",
    scores,
  };
}
