import { AppLink } from "../components/Layout";
import { SEO } from "../components/SEO";
import { getRoutes, type Locale } from "../lib/locale";

const homeCopy = {
  de: {
    seoTitle: "Welcher Scroll-Typ bist Du?",
    seoDescription:
      "Finde in 3 Minuten heraus, warum Du automatisch zum Handy greifst - und welcher erste Schritt zu Dir passt.",
    eyebrow: "Digital Detox Den",
    title: "Welcher Scroll-Typ bist Du?",
    subtitle: "Finde in 3 Minuten heraus, warum Du automatisch zum Handy greifst - und welcher erste Schritt zu Dir passt.",
    primaryCta: "Selbsttest starten",
    secondaryCta: "Zur Community",
    patternEyebrow: "Das Muster",
    patternTitle: "Nur kurz geöffnet, länger geblieben.",
    patternText:
      "Viele Menschen öffnen TikTok, Instagram, YouTube, Reddit, News oder Messenger „nur kurz“ und verlieren mehr Zeit als geplant. Oft ist nicht die App allein das Problem, sondern der Moment davor: Stress, Müdigkeit, Langeweile, Warten oder ein unklarer Start.",
    benefitsEyebrow: "Was Du bekommst",
    benefitsTitle: "Ein klares Ergebnis statt schlechtem Gewissen.",
    benefits: [
      "Deinen Scroll-Typ",
      "Deinen stärksten Trigger",
      "eine erste Mini-Regel",
      "den Einstieg in eine Community, die weiterhilft",
    ],
    products: [
      {
        number: "01",
        title: "Digital Detox Selbsttest",
        text: "Beantworte 8 kurze Fragen und finde heraus, welcher Scroll-Typ Du bist.",
      },
      {
        number: "02",
        title: "Community",
        text: "Echte Gespräche, Mini-Regeln und Menschen, die das genauso kennen wie Du.",
      },
    ],
    disclaimer:
      "Der Selbsttest ist keine medizinische Diagnose. Er ist ein praktisches Reflexionswerkzeug für alltägliche Handy-Gewohnheiten.",
  },
  en: {
    seoTitle: "What type of scroller are you?",
    seoDescription:
      "Find out in 3 minutes why you automatically reach for your phone and which first step fits you.",
    eyebrow: "Digital Detox Den",
    title: "What type of scroller are you?",
    subtitle: "Find out in 3 minutes why you automatically reach for your phone and which first step fits you.",
    primaryCta: "Start the self-test",
    secondaryCta: "Go to community",
    patternEyebrow: "The pattern",
    patternTitle: "Opened for a moment, stayed longer.",
    patternText:
      "Many people open TikTok, Instagram, YouTube, Reddit, news, or messaging apps for just a moment and lose more time than planned. Often the app itself is not the whole problem, but the moment before it: stress, tiredness, boredom, waiting, or an unclear start.",
    benefitsEyebrow: "What you get",
    benefitsTitle: "A clear result instead of a guilty conscience.",
    benefits: ["Your scroll type", "Your strongest trigger", "A first mini rule", "An entry point into a helpful community"],
    products: [
      {
        number: "01",
        title: "Digital Detox Self-Test",
        text: "Answer 8 short questions and find out what type of scroller you are.",
      },
      {
        number: "02",
        title: "Community",
        text: "Real conversations, mini rules, and people who know the same patterns.",
      },
    ],
    disclaimer:
      "The self-test is not a medical diagnosis. It is a practical reflection tool for everyday phone habits.",
  },
};

export function HomePage({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];
  const routes = getRoutes(locale);

  return (
    <>
      <SEO
        title={copy.seoTitle}
        description={copy.seoDescription}
      />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="hero-subtitle">{copy.subtitle}</p>
          <div className="hero-actions">
            <AppLink href={routes.selfTest} className="button primary">{copy.primaryCta}</AppLink>
            <AppLink href={routes.community} className="button secondary">{copy.secondaryCta}</AppLink>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring">
            <img src="/assets/icon.png" alt="" className="hero-icon" />
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">{copy.patternEyebrow}</p>
          <h2>{copy.patternTitle}</h2>
        </div>
        <p>{copy.patternText}</p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">{copy.benefitsEyebrow}</p>
          <h2>{copy.benefitsTitle}</h2>
        </div>
        <div className="feature-grid">
          {copy.benefits.map((item) => (
            <div className="feature" key={item}>
              <span className="feature-dot" aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="product-grid">
          <AppLink href={routes.selfTest} className="product-card">
            <span>{copy.products[0].number}</span>
            <h3>{copy.products[0].title}</h3>
            <p>{copy.products[0].text}</p>
          </AppLink>
          <AppLink href={routes.community} className="product-card">
            <span>{copy.products[1].number}</span>
            <h3>{copy.products[1].title}</h3>
            <p>{copy.products[1].text}</p>
          </AppLink>
        </div>
      </section>

      <section className="section disclaimer">
        <p>{copy.disclaimer}</p>
      </section>
    </>
  );
}
