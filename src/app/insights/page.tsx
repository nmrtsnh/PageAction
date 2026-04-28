import { SummaryCard } from "@/components/dashboard/summary-card";
import { WorkspaceNav } from "@/components/layout/workspace-nav";
import { PAGEACTION_WORKSPACE_EYEBROW } from "@/lib/pageaction-copy";

export default function InsightsRoute() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-6xl p-6 md:p-10">
        <WorkspaceNav />
        <header className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {PAGEACTION_WORKSPACE_EYEBROW}
          </p>
          <h1 className="mt-2 text-3xl font-bold">Insights</h1>
          <p className="mt-2 text-sm text-slate-600">
            Snapshot trends to support weekly growth decisions.
          </p>
        </header>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <SummaryCard label="Pages improved this week" value={6} />
          <SummaryCard label="Experiments running" value={1} />
          <SummaryCard label="New content ideas" value={3} />
        </section>

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-base font-semibold">This week at a glance</h2>
          <p className="mt-2 text-sm text-slate-600">
            Page fixes are trending in the right direction. The next leverage
            point is content updates that support high-priority page topics.
          </p>
        </div>
      </div>
    </main>
  );
}
