import { AppLink } from "../components/Layout";
import { SEO } from "../components/SEO";
import { getGuide } from "../data/guides";

export function GuideArticlePage({ slug }: { slug: string }) {
  const guide = getGuide(slug);

  if (!guide) {
    return (
      <section className="page-hero compact-hero">
        <h1>Guide nicht gefunden</h1>
        <AppLink href="/guides" className="button secondary">Zur Guide-Übersicht</AppLink>
      </section>
    );
  }

  return (
    <>
      <SEO title={guide.title} description={guide.metaDescription} />
      <article className="article">
        <header>
          <p className="eyebrow">{guide.readingTime} Lesezeit</p>
          <h1>{guide.title}</h1>
          <p>{guide.intro}</p>
        </header>

        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}

        <section>
          <h2>Konkrete Tipps</h2>
          <ul className="tip-list">
            {guide.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <aside className="cta-band">
          <div>
            <p className="eyebrow">Selbsttest</p>
            <h2>Welcher Scroll-Typ bist du?</h2>
          </div>
          <AppLink href="/selbsttest" className="button primary">Selbsttest starten</AppLink>
        </aside>
      </article>
    </>
  );
}
