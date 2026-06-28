import type { ReactNode } from "react";
import { navigate } from "../App";
import { getRoutes, type Locale } from "../lib/locale";

const layoutCopy = {
  de: {
    brandLabel: "Digital Detox Den Startseite",
    navLabel: "Hauptnavigation",
    nav: {
      home: "Home",
      selfTest: "Selbsttest",
      community: "Community",
    },
    footer: "Mehr Leben. Weniger Autopilot.",
    languageLabel: "Sprache wählen",
  },
  en: {
    brandLabel: "Digital Detox Den home",
    navLabel: "Main navigation",
    nav: {
      home: "Home",
      selfTest: "Self-test",
      community: "Community",
    },
    footer: "More life. Less autopilot.",
    languageLabel: "Choose language",
  },
};

export function AppLink({
  href,
  children,
  className,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      className={className}
      href={href}
      aria-label={ariaLabel}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      onClick={(event) => {
        if (isExternal || event.metaKey || event.ctrlKey || event.shiftKey) return;
        event.preventDefault();
        navigate(href);
      }}
    >
      {children}
    </a>
  );
}

export function Layout({
  children,
  currentPath,
  locale,
  onLocaleChange,
}: {
  children: ReactNode;
  currentPath: string;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}) {
  const copy = layoutCopy[locale];
  const routeMap = getRoutes(locale);
  const navItems = [
    { href: routeMap.home, label: copy.nav.home },
    { href: routeMap.selfTest, label: copy.nav.selfTest },
    { href: routeMap.community, label: copy.nav.community },
  ];

  return (
    <>
      <header className="site-header">
        <AppLink href={routeMap.home} className="brand" ariaLabel={copy.brandLabel}>
          <img src="/assets/icon.png" alt="" className="brand-icon" />
          <span>Digital Detox Den</span>
        </AppLink>
        <div className="header-actions">
          <nav className="site-nav" aria-label={copy.navLabel}>
            {navItems.map((item) => {
              const isActive =
                item.href === "/" || item.href === "/en"
                  ? currentPath === item.href
                  : currentPath === item.href || currentPath.startsWith(`${item.href}/`);
              return (
                <AppLink key={item.href} href={item.href} className="nav-link">
                  <span aria-current={isActive ? "page" : undefined}>{item.label}</span>
                </AppLink>
              );
            })}
          </nav>
          <div className="language-switch" aria-label={copy.languageLabel}>
            {(["de", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={locale === item}
                onClick={() => onLocaleChange(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div>
          <img src="/assets/icon.png" alt="" className="footer-icon" />
          <span>Digital Detox Den</span>
        </div>
        <p>{copy.footer}</p>
      </footer>
    </>
  );
}
