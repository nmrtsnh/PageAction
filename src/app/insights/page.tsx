import { SummaryCard } from "@/components/dashboard/summary-card";
import { ModuleIcon } from "@/components/layout/module-icon";
import { WorkspaceNav } from "@/components/layout/workspace-nav";
import { PAGEACTION_WORKSPACE_EYEBROW } from "@/lib/pageaction-copy";
import Link from "next/link";

const weeklyInsights = [
  {
    title: "Biggest lift: itinerary intent clarity",
    summary:
      'Pages with direct-answer updates, especially "/blog/city-guides/amsterdam-5-day-itinerary/", show stronger scroll depth this week.',
    references: [
      { label: "5-Day Amsterdam Itinerary page", href: "/pages/p-5" },
      { label: "Trip-length answer idea", href: "/content-ideas" },
      { label: "Trip-length answer experiment", href: "/growth-experiments" },
    ],
  },
  {
    title: "Primary risk: destination discoverability",
    summary:
      '"/destinations/" still has high-priority structure issues, creating friction for crawlers and users exploring regions.',
    references: [
      { label: "Destinations page", href: "/pages/p-2" },
      { label: "SEO checklist actions", href: "/seo-checklist" },
    ],
  },
  {
    title: "Next decision",
    summary:
      "Prioritize answer-first content refreshes before launching new experiments to strengthen baseline quality.",
    references: [
      { label: "Content Ideas planning", href: "/content-ideas" },
      { label: "Dashboard priorities", href: "/dashboard" },
    ],
  },
];

export default function InsightsRoute() {
  const featuredCardClass =
    "rounded-xl border border-indigo-200 bg-gradient-to-b from-indigo-50 to-white p-5 shadow-sm ring-1 ring-indigo-100";
  const standardCardClass = "rounded-xl border border-slate-200 bg-white p-5";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-6xl p-6 md:p-10">
        <WorkspaceNav />
        <header className="rounded-xl border border-indigo-100 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
            {PAGEACTION_WORKSPACE_EYEBROW}
          </p>
          <h1 className="mt-2 inline-flex items-center gap-2 text-3xl font-bold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-100 text-indigo-700">
              <ModuleIcon module="insights" className="h-4 w-4" />
            </span>
            Insights
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Weekly growth intelligence for GlobeGlider with linked evidence
            from pages, content, and experiments.
          </p>
        </header>

        <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <SummaryCard label="Pages improved this week" value={6} />
          <SummaryCard label="Experiments running" value={1} />
          <SummaryCard label="New content ideas" value={3} />
        </section>

        <div className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50/40 p-5">
          <h2 className="text-base font-semibold">At a glance</h2>
          <p className="mt-2 text-sm text-slate-600">
            Page fixes are moving in the right direction, with the biggest
            upside still in answer-first updates tied to high-priority issues.
          </p>
          <p className="mt-2 text-xs font-medium text-indigo-700">
            Why this matters: Weekly signals guide what to prioritize next across modules.
          </p>
        </div>

        <section className="mt-5 space-y-2.5">
          {weeklyInsights.length === 0 ? (
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-5 text-sm text-slate-600">
              No insights published yet. Add one weekly observation to guide next actions.
            </div>
          ) : (
            weeklyInsights.map((item) => (
              <article
                key={item.title}
                className={item.title.startsWith("Biggest lift") ? featuredCardClass : standardCardClass}
              >
                <h2 className="text-base font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-1.5 text-sm text-slate-600">{item.summary}</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {item.references.map((reference) => (
                    <Link
                      key={reference.label}
                      href={reference.href}
                      className="inline-flex rounded-md border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-1"
                    >
                      {reference.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
