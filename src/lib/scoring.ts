import { quizQuestions, resultOrder, type ResultTypeId } from "../data/quiz";

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

function getAnswerScore(questionId: string, answerId: string | undefined, typeId: ResultTypeId) {
  const question = quizQuestions.find((item) => item.id === questionId);
  const answer = question?.answers.find((item) => item.id === answerId);
  return answer?.scores[typeId] ?? 0;
}

export function scoreQuiz(selections: Selections): ScoringResult {
  const scores = emptyScores();

  for (const question of quizQuestions) {
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
    const bestQuestionScore = Math.max(...candidates.map((id) => getAnswerScore(questionId, selections[questionId], id)));
    const narrowed = candidates.filter((id) => getAnswerScore(questionId, selections[questionId], id) === bestQuestionScore);
    if (bestQuestionScore > 0 && narrowed.length > 0) {
      candidates = narrowed;
    }
  }

  return {
    resultId: candidates[0] ?? "evening_scroller",
    scores,
  };
}
