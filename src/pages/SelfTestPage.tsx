import { useMemo, useState } from "react";
import { AppLink } from "../components/Layout";
import { SEO } from "../components/SEO";
import { quizQuestionsDe, quizQuestionsEn, resultTypesDe, resultTypesEn } from "../data/quiz";
import { type Locale } from "../lib/locale";
import { scoreQuiz, type Selections } from "../lib/scoring";

const communityUrl = "https://digital-detox-den.flenski.app/digital-detox-den/communities/";

const selfTestCopy = {
  de: {
    resultEyebrow: "Dein Ergebnis",
    resultTitle: "Dein Scroll-Typ:",
    resultSeoPrefix: "Dein Scroll-Typ:",
    resultSeoDescription: "Dein Ergebnis im Digital Detox Selbsttest:",
    thought: "Typischer Gedanke",
    trigger: "Dein stärkster Trigger",
    rule: "Deine erste Mini-Regel",
    quoteOpen: "„",
    quoteClose: "“",
    whyTitle: "Warum das wichtig ist",
    whyText:
      "Wenn Du Deinen Trigger kennst, musst Du nicht den ganzen Tag gegen Dein Handy kämpfen. Du kannst an genau der Situation ansetzen, in der der Autopilot startet.",
    communityCta: "In die Digital Detox Den Community gehen",
    restart: "Test neu starten",
    quizSeoTitle: "Selbsttest",
    quizSeoDescription:
      "Beantworte 8 kurze Fragen und finde Deinen Scroll-Typ, stärksten Trigger und eine erste Mini-Regel.",
    quizEyebrow: "Selbsttest",
    questionCounter: "Frage",
    questionCounterOf: "von",
    progressLabel: "Prozent abgeschlossen",
    back: "Zurück",
    next: "Weiter",
    showResult: "Ergebnis anzeigen",
  },
  en: {
    resultEyebrow: "Your result",
    resultTitle: "Your Scroll Type:",
    resultSeoPrefix: "Your Scroll Type:",
    resultSeoDescription: "Your Digital Detox self-test result:",
    thought: "Typical thought",
    trigger: "Your strongest trigger",
    rule: "Your first mini rule",
    quoteOpen: "\"",
    quoteClose: "\"",
    whyTitle: "Why this matters",
    whyText:
      "Once you know your trigger, you do not have to fight your phone all day. You can start with the specific moment where autopilot begins.",
    communityCta: "Go to the Digital Detox Den Community",
    restart: "Restart test",
    quizSeoTitle: "Self-test",
    quizSeoDescription:
      "Answer 8 short questions and find your scroll type, strongest trigger, and first mini rule.",
    quizEyebrow: "Self-test",
    questionCounter: "Question",
    questionCounterOf: "of",
    progressLabel: "percent complete",
    back: "Back",
    next: "Next",
    showResult: "Show result",
  },
};

const quizByLocale = {
  de: quizQuestionsDe,
  en: quizQuestionsEn,
};

const resultTypesByLocale = {
  de: resultTypesDe,
  en: resultTypesEn,
};

export function SelfTestPage({ locale }: { locale: Locale }) {
  const copy = selfTestCopy[locale];
  const quizQuestions = quizByLocale[locale];
  const resultTypes = resultTypesByLocale[locale];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selections, setSelections] = useState<Selections>({});
  const [showResult, setShowResult] = useState(false);
  const currentQuestion = quizQuestions[currentIndex];
  const selectedAnswer = selections[currentQuestion.id];
  const progress = Math.round(((currentIndex + 1) / quizQuestions.length) * 100);
  const result = useMemo(() => scoreQuiz(selections, quizQuestions), [quizQuestions, selections]);
  const resultType = resultTypes[result.resultId];

  function restart() {
    setSelections({});
    setCurrentIndex(0);
    setShowResult(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (showResult) {
    return (
      <>
        <SEO
          title={`${copy.resultSeoPrefix} ${resultType.name}`}
          description={`${copy.resultSeoDescription} ${resultType.name}.`}
        />
        <section className="quiz-shell result-shell">
          <p className="eyebrow">{copy.resultEyebrow}</p>
          <h1>{copy.resultTitle} {resultType.name}</h1>
          <p className="result-description">{resultType.description}</p>

          <div className="result-grid">
            <article>
              <span>{copy.thought}</span>
              <p>{copy.quoteOpen}{resultType.thought}{copy.quoteClose}</p>
            </article>
            <article>
              <span>{copy.trigger}</span>
              <p>{resultType.trigger}</p>
            </article>
            <article>
              <span>{copy.rule}</span>
              <p>{resultType.rule}</p>
            </article>
          </div>

          <div className="why-box">
            <h2>{copy.whyTitle}</h2>
            <p>{copy.whyText}</p>
          </div>

          <div className="hero-actions">
            <AppLink href={communityUrl} className="button primary">{copy.communityCta}</AppLink>
            <button type="button" className="button secondary" onClick={restart}>{copy.restart}</button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title={copy.quizSeoTitle}
        description={copy.quizSeoDescription}
      />
      <section className="quiz-shell">
        <div className="quiz-topline">
          <p className="eyebrow">{copy.quizEyebrow}</p>
          <span>
            {copy.questionCounter} {currentIndex + 1} {copy.questionCounterOf} {quizQuestions.length}
          </span>
        </div>
        <div className="progress-track" aria-label={`${progress} ${copy.progressLabel}`}>
          <div style={{ width: `${progress}%` }} />
        </div>

        <fieldset className="question-card">
          <legend>{currentQuestion.prompt}</legend>
          <div className="answer-list" role="radiogroup" aria-label={currentQuestion.prompt}>
            {currentQuestion.answers.map((answer) => (
              <label className="answer-card" key={answer.id}>
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={answer.id}
                  checked={selectedAnswer === answer.id}
                  onChange={() =>
                    setSelections((current) => ({
                      ...current,
                      [currentQuestion.id]: answer.id,
                    }))
                  }
                />
                <span>{answer.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="quiz-actions">
          <button
            type="button"
            className="button secondary"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((index) => Math.max(index - 1, 0))}
          >
            {copy.back}
          </button>
          <button
            type="button"
            className="button primary"
            disabled={!selectedAnswer}
            onClick={() => {
              if (currentIndex === quizQuestions.length - 1) {
                setShowResult(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                setCurrentIndex((index) => index + 1);
              }
            }}
          >
            {currentIndex === quizQuestions.length - 1 ? copy.showResult : copy.next}
          </button>
        </div>
      </section>
    </>
  );
}
