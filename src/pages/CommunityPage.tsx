import { AppLink } from "../components/Layout";
import { SEO } from "../components/SEO";

const communityUrl = "https://digital-detox-den.flenski.app/digital-detox-den/communities/";

export function CommunityPage() {
  return (
    <>
      <SEO
        title="Community"
        description="Die Digital Detox Den Community ist ein Ort für Austausch über Scroll-Muster, kleine Regeln und bewusstere digitale Gewohnheiten."
      />
      <section className="community-hero">
        <div>
          <p className="eyebrow">Community</p>
          <h1>Digital Detox Den Community</h1>
          <p>
            Ein Ort für Menschen, die weniger automatisch scrollen und bewusster mit Handy, Social Media und digitalen Gewohnheiten
            umgehen wollen.
          </p>
          <div className="hero-actions">
            <AppLink href={communityUrl} className="button primary">Zur Community</AppLink>
            <AppLink href="/selbsttest" className="button secondary">Erst Selbsttest machen</AppLink>
          </div>
        </div>
        <img src="/assets/icon.png" alt="Digital Detox Den Community Icon" className="community-icon" />
      </section>

      <section className="section community-grid">
        <article>
          <h2>Für wen sie ist</h2>
          <ul className="check-list">
            <li>Menschen, die abends zu lange scrollen</li>
            <li>Menschen, die Doomscrolling reduzieren wollen</li>
            <li>Menschen, die nicht komplett offline sein wollen</li>
            <li>Menschen, die kleine realistische Regeln suchen</li>
            <li>Menschen, die Austausch statt Selbstvorwürfe wollen</li>
          </ul>
        </article>
        <article>
          <h2>Was dort passiert</h2>
          <ul className="check-list">
            <li>Austausch über eigene Scroll-Muster</li>
            <li>Tipps und kleine Regeln</li>
            <li>Diskussionen zu Digital Detox</li>
            <li>Erfahrungsberichte</li>
            <li>Später eventuell Gruppenformate</li>
          </ul>
        </article>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">So passt der Selbsttest dazu</p>
          <h2>Bring dein Ergebnis mit.</h2>
        </div>
        <p>Mach zuerst den Selbsttest, finde deinen Scroll-Typ und bring dein Ergebnis mit in die Community.</p>
      </section>
    </>
  );
}
