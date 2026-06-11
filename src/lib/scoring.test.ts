import { describe, expect, it } from "vitest";
import { scoreQuiz, type Selections } from "./scoring";

const neutral = { q7: "a" };

describe("scoreQuiz", () => {
  it.each([
    ["evening_scroller", { q1: "a", q2: "a", q3: "e", q4: "e", q5: "a", q6: "a", q8: "a" }],
    ["stress_checker", { q1: "b", q2: "f", q3: "b", q4: "b", q5: "e", q6: "b", q8: "b" }],
    ["news_refresher", { q1: "d", q2: "c", q3: "c", q4: "d", q5: "d", q6: "d", q8: "d" }],
    ["shorts_loop", { q1: "e", q2: "b", q3: "a", q4: "a", q5: "b", q6: "e", q8: "c" }],
    ["work_procrastinator", { q1: "c", q2: "f", q3: "d", q4: "c", q5: "c", q6: "c", q8: "c" }],
    ["chat_checker", { q1: "d", q2: "d", q3: "c", q4: "a", q5: "d", q6: "d", q8: "f" }],
  ])("can produce %s", (expected, selections) => {
    expect(scoreQuiz({ ...neutral, ...(selections as Selections) }).resultId).toBe(expected);
  });

  it("uses question 1 as the first tie breaker", () => {
    const result = scoreQuiz({
      q1: "b",
      q2: "f",
      q3: "a",
      q4: "a",
      q5: "e",
      q6: "a",
      q7: "a",
      q8: "e",
    });

    expect(result.resultId).toBe("stress_checker");
  });
});
