import { AppLink } from "../components/Layout";
import { SEO } from "../components/SEO";

export function HomePage() {
  return (
    <>
      <SEO
        title="Welcher Scroll-Typ bist Du?"
        description="Finde in 3 Minuten heraus, warum Du automatisch zum Handy greifst - und welcher erste Schritt zu Dir passt."
      />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Digital Detox Den</p>
          <h1>Welcher Scroll-Typ bist Du?</h1>
          <p className="hero-subtitle">
            Finde in 3 Minuten heraus, warum Du automatisch zum Handy greifst - und welcher erste Schritt zu Dir passt.
          </p>
          <div className="hero-actions">
            <AppLink href="/selbsttest" className="button primary">Selbsttest starten</AppLink>
            <AppLink href="/community" className="button secondary">Zur Community</AppLink>
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
          <p className="eyebrow">Das Muster</p>
          <h2>Nur kurz geöffnet, länger geblieben.</h2>
        </div>
        <p>
          Viele Menschen öffnen TikTok, Instagram, YouTube, Reddit, News oder Messenger „nur kurz“ und verlieren mehr Zeit als geplant.
          Oft ist nicht die App allein das Problem, sondern der Moment davor: Stress, Müdigkeit, Langeweile, Warten oder ein unklarer Start.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Was Du bekommst</p>
          <h2>Ein klares Ergebnis statt schlechtem Gewissen.</h2>
        </div>
        <div className="feature-grid">
          {["Deinen Scroll-Typ", "Deinen stärksten Trigger", "eine erste Mini-Regel", "den Einstieg in eine Community, die weiterhilft"].map((item) => (
            <div className="feature" key={item}>
              <span className="feature-dot" aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="product-grid">
          <AppLink href="/selbsttest" className="product-card">
            <span>01</span>
            <h3>Digital Detox Selbsttest</h3>
            <p>Beantworte 8 kurze Fragen und finde heraus, welcher Scroll-Typ Du bist.</p>
          </AppLink>
          <AppLink href="/guides" className="product-card">
            <span>02</span>
            <h3>Guides</h3>
            <p>Kurze Texte für echte Alltagssituationen - von Abend-Scrolling bis Doomscrolling.</p>
          </AppLink>
          <AppLink href="/community" className="product-card">
            <span>03</span>
            <h3>Community</h3>
            <p>Echte Gespräche, Mini-Regeln und Menschen, die das genauso kennen wie Du.</p>
          </AppLink>
        </div>
      </section>

      <section className="section disclaimer">
        <p>
          Der Selbsttest ist keine medizinische Diagnose. Er ist ein praktisches Reflexionswerkzeug für alltägliche Handy-Gewohnheiten.
        </p>
      </section>
    </>
  );
}
