import { ui } from "@/lib/i18n";

export function Header() {
  return (
    <header className="border-b border-line bg-surface/80 backdrop-blur sticky top-0 z-10">
      <div className="container-app flex h-16 items-center justify-between">
        <a href="/" className="text-xl font-bold text-ink">
          {ui.appName}
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-ink-soft">
          <a href="#" className="hover:text-ink transition-colors">
            {ui.nav.home}
          </a>
          <a href="#" className="hover:text-ink transition-colors">
            {ui.nav.courses}
          </a>
          <a href="#" className="hover:text-ink transition-colors">
            {ui.nav.about}
          </a>
          <a href="#" className="hover:text-ink transition-colors">
            {ui.nav.contact}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
