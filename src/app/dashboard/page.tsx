import { SummaryCard } from "@/components/dashboard/summary-card";
import { WorkspaceNav } from "@/components/layout/workspace-nav";
import { PAGEACTION_WORKSPACE_EYEBROW } from "@/lib/pageaction-copy";
import { getPageSummary } from "@/lib/mock-page-audits";
import Link from "next/link";

const priorityPages = [
  {
    name: "Destinations",
    issue: "Fix heading hierarchy and tighten region grouping",
    href: "/pages/p-2",
    priority: "High priority",
  },
  {
    name: "5-Day Amsterdam Itinerary",
    issue: "Add direct trip-length answer and stronger title variation",
    href: "/pages/p-5",
    priority: "High priority",
  },
  {
    name: "Travel Blog",
    issue: "Ship answer snippets for seasonal travel queries",
    href: "/pages/p-3",
    priority: "Medium priority",
  },
];

const contentOpportunities = [
  {
    title: "Best Time to Visit Amsterdam by Month",
    source: "From Travel Blog: missing answer snippets",
  },
  {
    title: "Is 5 Days Enough in Amsterdam? Quick Answer Block",
    source: "From Amsterdam itinerary: direct answer gap",
  },
];

const activeExperiments = [
  {
    name: "Answer-first teaser on blog index",
    metric: "CTR to destination posts",
    status: "Running",
  },
  {
    name: "Trip-length answer block near H1",
    metric: "Bounce rate from organic",
    status: "Planned",
  },
];

export default function DashboardRoute() {
  const summary = getPageSummary();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-6xl p-6 md:p-10">
        <WorkspaceNav />
        <header className="rounded-xl border border-indigo-100 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
            {PAGEACTION_WORKSPACE_EYEBROW}
          </p>
          <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600">
            GlobeGlider command center for page quality, content execution, and
            weekly growth decisions.
          </p>
        </header>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard label="Total pages" value={summary.totalPages} />
          <SummaryCard label="Pages with issues" value={summary.pagesWithIssues} />
          <SummaryCard
            label="High priority issues"
            value={summary.highPriorityIssues}
          />
          <SummaryCard label="Quick wins" value={summary.quickWins} />
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-5 lg:col-span-2">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-base font-semibold text-slate-900">
                Top pages needing attention
              </h2>
              <Link href="/pages" className="text-sm text-indigo-700 hover:underline">
                Open pages
              </Link>
            </div>
            <ul className="mt-4 space-y-3">
              {priorityPages.map((page) => (
                <li key={page.name} className="rounded-lg border border-slate-200 p-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link href={page.href} className="font-semibold text-slate-900 hover:underline">
                      {page.name}
                    </Link>
                    <span className="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-semibold text-rose-700">
                      {page.priority}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{page.issue}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-5">
            <h2 className="text-base font-semibold text-slate-900">This week</h2>
            <p className="mt-2 text-sm text-slate-600">
              Ship two high-priority fixes, publish one answer-first update, and
              keep one experiment live with clean tracking.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/seo-checklist"
                className="inline-flex rounded-md border border-indigo-200 bg-white px-2.5 py-1 text-xs font-medium text-indigo-700 hover:bg-indigo-100"
              >
                SEO Checklist
              </Link>
              <Link
                href="/insights"
                className="inline-flex rounded-md border border-indigo-200 bg-white px-2.5 py-1 text-xs font-medium text-indigo-700 hover:bg-indigo-100"
              >
                Insights
              </Link>
            </div>
          </article>
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-base font-semibold text-slate-900">
                New content opportunities
              </h2>
              <Link href="/content-ideas" className="text-sm text-indigo-700 hover:underline">
                Open planning board
              </Link>
            </div>
            <ul className="mt-4 space-y-2">
              {contentOpportunities.map((opportunity) => (
                <li
                  key={opportunity.title}
                  className="rounded-lg border border-slate-100 bg-slate-50 p-3"
                >
                  <p className="font-medium text-slate-900">{opportunity.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{opportunity.source}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-base font-semibold text-slate-900">Active experiments</h2>
              <Link
                href="/growth-experiments"
                className="text-sm text-indigo-700 hover:underline"
              >
                Open experiments
              </Link>
            </div>
            <ul className="mt-4 space-y-2">
              {activeExperiments.map((experiment) => (
                <li
                  key={experiment.name}
                  className="rounded-lg border border-slate-100 bg-slate-50 p-3"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium text-slate-900">{experiment.name}</p>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                      {experiment.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    Core metric: {experiment.metric}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/pages"
            className="inline-flex items-center rounded-lg border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            Open Pages
          </Link>
          <Link
            href="/content-ideas"
            className="inline-flex items-center rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-100"
          >
            Open Content Ideas
          </Link>
          <Link
            href="/growth-experiments"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Open Experiments
          </Link>
        </div>
      </div>
    </main>
  );
}
