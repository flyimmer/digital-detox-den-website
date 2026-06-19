import { useMemo, useState } from "react";
import { AppLink } from "../components/Layout";
import { SEO } from "../components/SEO";
import { quizQuestions, resultTypes } from "../data/quiz";
import { scoreQuiz, type Selections } from "../lib/scoring";

const communityUrl = "https://digital-detox-den.flenski.app/digital-detox-den/communities/";

export function SelfTestPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selections, setSelections] = useState<Selections>({});
  const [showResult, setShowResult] = useState(false);
  const currentQuestion = quizQuestions[currentIndex];
  const selectedAnswer = selections[currentQuestion.id];
  const progress = Math.round(((currentIndex + 1) / quizQuestions.length) * 100);
  const result = useMemo(() => scoreQuiz(selections), [selections]);
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
          title={`Dein Scroll-Typ: ${resultType.name}`}
          description={`Dein Ergebnis im Digital Detox Selbsttest: ${resultType.name}.`}
        />
        <section className="quiz-shell result-shell">
          <p className="eyebrow">Dein Ergebnis</p>
          <h1>Dein Scroll-Typ: {resultType.name}</h1>
          <p className="result-description">{resultType.description}</p>

          <div className="result-grid">
            <article>
              <span>Typischer Gedanke</span>
              <p>„{resultType.thought}“</p>
            </article>
            <article>
              <span>Dein stärkster Trigger</span>
              <p>{resultType.trigger}</p>
            </article>
            <article>
              <span>Deine erste Mini-Regel</span>
              <p>{resultType.rule}</p>
            </article>
          </div>

          <div className="why-box">
            <h2>Warum das wichtig ist</h2>
            <p>
              Wenn Du Deinen Trigger kennst, musst Du nicht den ganzen Tag gegen Dein Handy kämpfen. Du kannst an genau der
              Situation ansetzen, in der der Autopilot startet.
            </p>
          </div>

          <div className="hero-actions">
            <AppLink href={communityUrl} className="button primary">In die Digital Detox Den Community gehen</AppLink>
            <button type="button" className="button secondary" onClick={restart}>Test neu starten</button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Selbsttest"
        description="Beantworte 8 kurze Fragen und finde Deinen Scroll-Typ, stärksten Trigger und eine erste Mini-Regel."
      />
      <section className="quiz-shell">
        <div className="quiz-topline">
          <p className="eyebrow">Selbsttest</p>
          <span>
            Frage {currentIndex + 1} von {quizQuestions.length}
          </span>
        </div>
        <div className="progress-track" aria-label={`${progress} Prozent abgeschlossen`}>
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
            Zurück
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
            {currentIndex === quizQuestions.length - 1 ? "Ergebnis anzeigen" : "Weiter"}
          </button>
        </div>
      </section>
    </>
  );
}
