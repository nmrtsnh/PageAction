import { SummaryCard } from "@/components/dashboard/summary-card";
import { getPageSummary } from "@/lib/mock-page-audits";
import Link from "next/link";

export default function Home() {
  const summary = getPageSummary();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-6xl p-6 md:p-10">
        <header className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Page Optimization Workspace
          </p>
          <h1 className="mt-2 text-3xl font-bold">PageAction</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600">
            PageAction helps small teams review website pages, detect SEO, AEO,
            and GEO issues, assign priority, and decide what to fix first.
          </p>
        </header>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard label="Total pages" value={summary.totalPages} />
          <SummaryCard
            label="Pages with issues"
            value={summary.pagesWithIssues}
          />
          <SummaryCard
            label="High priority issues"
            value={summary.highPriorityIssues}
          />
          <SummaryCard label="Quick wins" value={summary.quickWins} />
        </section>

        <div className="mt-6">
          <Link
            href="/pages"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
          >
            View all pages
          </Link>
        </div>
      </div>
    </main>
  );
}
