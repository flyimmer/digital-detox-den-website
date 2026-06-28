import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
import {
  getLocaleFromPath,
  getLocalizedPath,
  getPath,
  getPreferredLocale,
  readStoredLocale,
  storeLocale,
  type Locale,
} from "./lib/locale";
import { CommunityPage } from "./pages/CommunityPage";
import { HomePage } from "./pages/HomePage";
import { SelfTestPage } from "./pages/SelfTestPage";

export function navigate(path: string) {
  if (window.location.pathname !== path) {
    window.history.pushState({}, "", path);
  }
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function RouteView({ path, locale }: { path: string; locale: Locale }) {
  if (path === "/" || path === "/en") return <HomePage locale={locale} />;
  if (path === "/selbsttest" || path === "/en/self-test") return <SelfTestPage locale={locale} />;
  if (path === "/community" || path === "/en/community") return <CommunityPage locale={locale} />;
  return <HomePage locale={locale} />;
}

export default function App() {
  const [path, setPath] = useState(getPath);
  const locale = getLocaleFromPath(path);

  useEffect(() => {
    const updatePath = () => setPath(getPath());
    window.addEventListener("popstate", updatePath);
    return () => window.removeEventListener("popstate", updatePath);
  }, []);

  useEffect(() => {
    const storedLocale = readStoredLocale();
    if (storedLocale) return;

    if (getLocaleFromPath(path) === "en") {
      storeLocale("en");
      return;
    }

    const preferredLocale = getPreferredLocale();
    storeLocale(preferredLocale);
    if (preferredLocale !== getLocaleFromPath(path)) {
      navigate(getLocalizedPath(path, preferredLocale));
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function changeLocale(nextLocale: Locale) {
    storeLocale(nextLocale);
    navigate(getLocalizedPath(path, nextLocale));
  }

  return (
    <Layout currentPath={path} locale={locale} onLocaleChange={changeLocale}>
      <RouteView path={path} locale={locale} />
    </Layout>
  );
}
