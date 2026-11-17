import { ui } from "@/lib/i18n";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-muted">
      <div className="container-app py-6 text-center text-sm text-ink-faint">
        {ui.footer.rights}
      </div>
    </footer>
  );
}

export default Footer;
