import { AppLink } from "../components/Layout";
import { SEO } from "../components/SEO";
import { guides } from "../data/guides";

export function GuidesPage() {
  return (
    <>
      <SEO
        title="Guides"
        description="Praktische Digital-Detox-Guides für bewussteren Umgang mit Handy, Social Media und Scroll-Gewohnheiten."
      />
      <section className="page-hero compact-hero">
        <p className="eyebrow">Guides</p>
        <h1>Kleine Regeln für echte Alltagssituationen.</h1>
        <p>Kurze Texte für alle, die bewusster mit dem Handy umgehen wollen - ohne Dogma, ohne Druck.</p>
      </section>

      <section className="section">
        <div className="guide-grid">
          {guides.map((guide) => (
            <AppLink href={`/guides/${guide.slug}`} className="guide-card" key={guide.slug}>
              <span>{guide.readingTime}</span>
              <h2>{guide.title}</h2>
              <p>{guide.description}</p>
            </AppLink>
          ))}
        </div>
      </section>
    </>
  );
}
