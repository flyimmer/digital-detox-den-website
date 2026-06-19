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
            Eine echte Gemeinschaft für alle, die ihren Autopiloten kennen - und ihn gemeinsam ein bisschen leiser drehen wollen.
            Kein Druck. Keine Perfektion. Einfach Menschen mit denselben Mustern.
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
          <h2>Kommt Dir das bekannt vor?</h2>
          <ul className="check-list">
            <li>Du scrollst abends länger als geplant - obwohl Du es eigentlich weißt.</li>
            <li>Du willst weniger, aber nicht komplett offline gehen.</li>
            <li>Du suchst ehrlichen Austausch - keine Selbstkritik und keinen erhobenen Zeigefinger.</li>
            <li>Du willst kleine Regeln, die im echten Alltag wirklich halten.</li>
            <li>Du möchtest wissen, dass andere das genauso kennen wie Du.</li>
          </ul>
        </article>
        <article>
          <h2>Was Dich erwartet</h2>
          <ul className="check-list">
            <li>Offene Gespräche über Scroll-Muster - ganz ohne Scham</li>
            <li>Mini-Regeln, die andere wirklich ausprobiert haben und die funktionieren</li>
            <li>Erfahrungen, die Du sonst kaum laut aussprechen würdest</li>
            <li>Gemeinsame Challenges - nur wenn Du Lust hast, kein Druck</li>
            <li>Für alle aus München: ab und zu auch etwas offline</li>
          </ul>
        </article>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Dein Einstieg in die Community</p>
          <h2>Bring Dein Muster mit.</h2>
        </div>
        <p>
          Der Selbsttest zeigt Dir, wo Dein Autopilot anspringt - und warum. Bring Deinen Scroll-Typ in die Community
          und finde Menschen, die genau dort ansetzen, wo Du gerade stehst. Das Gespräch darüber ist oft der beste erste Schritt.
        </p>
      </section>
    </>
  );
}
