type SummaryCardProps = {
  label: string;
  value: number;
};

export function SummaryCard({ label, value }: SummaryCardProps) {
  return (
    <article className="rounded-xl border border-indigo-100 bg-white p-5">
      <p className="text-sm font-medium text-indigo-700">{label}</p>
      <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
    </article>
  );
}
