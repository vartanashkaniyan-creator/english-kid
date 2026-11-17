interface StatusCardProps {
  label: string;
}

export function StatusCard({ label }: StatusCardProps) {
  return (
    <div className="mt-10 w-full max-w-sm rounded-2xl border border-line bg-surface-muted px-6 py-4 shadow-soft">
      <p className="text-sm text-ink-soft">{label}</p>
    </div>
  );
}

export default StatusCard;
