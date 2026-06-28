import { AppLink } from "../components/Layout";
import { SEO } from "../components/SEO";
import { getRoutes, type Locale } from "../lib/locale";

const communityUrl = "https://digital-detox-den.flenski.app/digital-detox-den/communities/";

const communityCopy = {
  de: {
    seoDescription:
      "Die Digital Detox Den Community ist ein Ort für Austausch über Scroll-Muster, kleine Regeln und bewusstere digitale Gewohnheiten.",
    eyebrow: "Community",
    title: "Digital Detox Den Community",
    intro:
      "Eine echte Gemeinschaft für alle, die ihren Autopiloten kennen - und ihn gemeinsam ein bisschen leiser drehen wollen. Kein Druck. Keine Perfektion. Einfach Menschen mit denselben Mustern.",
    primaryCta: "Zur Community",
    secondaryCta: "Erst Selbsttest machen",
    knownTitle: "Kommt Dir das bekannt vor?",
    knownItems: [
      "Du scrollst abends länger als geplant - obwohl Du es eigentlich weißt.",
      "Du willst weniger, aber nicht komplett offline gehen.",
      "Du suchst ehrlichen Austausch - keine Selbstkritik und keinen erhobenen Zeigefinger.",
      "Du willst kleine Regeln, die im echten Alltag wirklich halten.",
      "Du möchtest wissen, dass andere das genauso kennen wie Du.",
    ],
    expectTitle: "Was Dich erwartet",
    expectItems: [
      "Offene Gespräche über Scroll-Muster - ganz ohne Scham",
      "Mini-Regeln, die andere wirklich ausprobiert haben und die funktionieren",
      "Erfahrungen, die Du sonst kaum laut aussprechen würdest",
      "Gemeinsame Challenges - nur wenn Du Lust hast, kein Druck",
      "Für alle aus München: ab und zu auch etwas offline",
    ],
    entryEyebrow: "Dein Einstieg in die Community",
    entryTitle: "Bring Dein Muster mit.",
    entryText:
      "Der Selbsttest zeigt Dir, wo Dein Autopilot anspringt - und warum. Bring Deinen Scroll-Typ in die Community und finde Menschen, die genau dort ansetzen, wo Du gerade stehst. Das Gespräch darüber ist oft der beste erste Schritt.",
    iconAlt: "Digital Detox Den Community Icon",
  },
  en: {
    seoDescription:
      "The Digital Detox Den Community is a place to talk about scroll patterns, small rules, and more conscious digital habits.",
    eyebrow: "Community",
    title: "Digital Detox Den Community",
    intro:
      "A real community for people who know their autopilot and want to turn it down together. No pressure. No perfection. Just people with the same patterns.",
    primaryCta: "Go to community",
    secondaryCta: "Take the self-test first",
    knownTitle: "Does this sound familiar?",
    knownItems: [
      "You scroll longer than planned in the evening, even though you already know the pattern.",
      "You want less phone time, but you do not want to go completely offline.",
      "You want honest exchange, not self-criticism or finger-pointing.",
      "You want small rules that actually hold up in real life.",
      "You want to know that other people recognize the same pattern.",
    ],
    expectTitle: "What to expect",
    expectItems: [
      "Open conversations about scroll patterns without shame",
      "Mini rules that other people have actually tested and that work",
      "Experiences you might rarely say out loud elsewhere",
      "Shared challenges when you want them, without pressure",
      "For people in Munich: occasional offline moments too",
    ],
    entryEyebrow: "Your entry point into the community",
    entryTitle: "Bring your pattern with you.",
    entryText:
      "The self-test shows you where your autopilot starts and why. Bring your scroll type into the community and find people who start where you are right now. Talking about it is often the best first step.",
    iconAlt: "Digital Detox Den Community icon",
  },
};

export function CommunityPage({ locale }: { locale: Locale }) {
  const copy = communityCopy[locale];
  const routes = getRoutes(locale);

  return (
    <>
      <SEO
        title="Community"
        description={copy.seoDescription}
      />
      <section className="community-hero">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.intro}</p>
          <div className="hero-actions">
            <AppLink href={communityUrl} className="button primary">{copy.primaryCta}</AppLink>
            <AppLink href={routes.selfTest} className="button secondary">{copy.secondaryCta}</AppLink>
          </div>
        </div>
        <img src="/assets/icon.png" alt={copy.iconAlt} className="community-icon" />
      </section>

      <section className="section community-grid">
        <article>
          <h2>{copy.knownTitle}</h2>
          <ul className="check-list">
            {copy.knownItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>{copy.expectTitle}</h2>
          <ul className="check-list">
            {copy.expectItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">{copy.entryEyebrow}</p>
          <h2>{copy.entryTitle}</h2>
        </div>
        <p>{copy.entryText}</p>
      </section>
    </>
  );
}
