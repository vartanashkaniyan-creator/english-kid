import { ui } from "@/lib/i18n";
import { StatusCard } from "@/components/ui/StatusCard";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center py-20 sm:py-28 lg:py-32 text-center">
      <span className="inline-flex items-center rounded-full bg-success-soft px-4 py-1.5 text-sm font-medium text-success-deep">
        {ui.home.status}
      </span>
      <h1 className="mt-6 text-4xl sm:text-4.5xl font-bold text-ink tracking-tight">
        {ui.home.welcomeTitle}
      </h1>
      <p className="mt-4 max-w-xl text-ink-soft text-lg leading-relaxed">
        {ui.home.welcomeBody}
      </p>
      <StatusCard label={ui.home.footerNote} />
    </section>
  );
}
