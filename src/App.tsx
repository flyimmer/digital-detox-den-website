import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
import { CommunityPage } from "./pages/CommunityPage";
import { HomePage } from "./pages/HomePage";
import { SelfTestPage } from "./pages/SelfTestPage";

function getPath() {
  return window.location.pathname.replace(/\/$/, "") || "/";
}

export function navigate(path: string) {
  if (window.location.pathname !== path) {
    window.history.pushState({}, "", path);
  }
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function RouteView({ path }: { path: string }) {
  if (path === "/") return <HomePage />;
  if (path === "/selbsttest") return <SelfTestPage />;
  if (path === "/community") return <CommunityPage />;
  return <HomePage />;
}

export default function App() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const updatePath = () => setPath(getPath());
    window.addEventListener("popstate", updatePath);
    return () => window.removeEventListener("popstate", updatePath);
  }, []);

  return (
    <Layout currentPath={path}>
      <RouteView path={path} />
    </Layout>
  );
}
