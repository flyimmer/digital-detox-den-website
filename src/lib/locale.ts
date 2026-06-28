export type Locale = "de" | "en";

const storageKey = "digital-detox-den-locale";

const routes = {
  de: {
    home: "/",
    selfTest: "/selbsttest",
    community: "/community",
  },
  en: {
    home: "/en",
    selfTest: "/en/self-test",
    community: "/en/community",
  },
} as const;

type RouteKey = keyof typeof routes.de;

export function getPath() {
  return window.location.pathname.replace(/\/$/, "") || "/";
}

export function getLocaleFromPath(path: string): Locale {
  return path === "/en" || path.startsWith("/en/") ? "en" : "de";
}

function getRouteKey(path: string): RouteKey {
  if (path === routes.de.selfTest || path === routes.en.selfTest) return "selfTest";
  if (path === routes.de.community || path === routes.en.community) return "community";
  return "home";
}

export function getLocalizedPath(path: string, locale: Locale) {
  return routes[locale][getRouteKey(path)];
}

export function readStoredLocale(): Locale | null {
  const stored = window.localStorage.getItem(storageKey);
  return stored === "de" || stored === "en" ? stored : null;
}

export function storeLocale(locale: Locale) {
  window.localStorage.setItem(storageKey, locale);
}

export function getPreferredLocale(): Locale {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.some((language) => language.toLowerCase().startsWith("de")) ? "de" : "en";
}

export function getRoutes(locale: Locale) {
  return routes[locale];
}
