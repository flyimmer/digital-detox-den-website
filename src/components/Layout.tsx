import type { ReactNode } from "react";
import { navigate } from "../App";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/selbsttest", label: "Selbsttest" },
  { href: "/community", label: "Community" },
];

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

export function Layout({ children, currentPath }: { children: ReactNode; currentPath: string }) {
  return (
    <>
      <header className="site-header">
        <AppLink href="/" className="brand" ariaLabel="Digital Detox Den Startseite">
          <img src="/assets/icon.png" alt="" className="brand-icon" />
          <span>Digital Detox Den</span>
        </AppLink>
        <nav className="site-nav" aria-label="Hauptnavigation">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? currentPath === "/" : currentPath === item.href || currentPath.startsWith(`${item.href}/`);
            return (
              <AppLink key={item.href} href={item.href} className="nav-link">
                <span aria-current={isActive ? "page" : undefined}>{item.label}</span>
              </AppLink>
            );
          })}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div>
          <img src="/assets/icon.png" alt="" className="footer-icon" />
          <span>Digital Detox Den</span>
        </div>
        <p>Mehr Leben. Weniger Autopilot.</p>
      </footer>
    </>
  );
}
