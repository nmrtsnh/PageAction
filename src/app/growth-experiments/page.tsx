import { ModuleIcon } from "@/components/layout/module-icon";
import { WorkspaceNav } from "@/components/layout/workspace-nav";
import { PAGEACTION_WORKSPACE_EYEBROW } from "@/lib/pageaction-copy";
import Link from "next/link";

const experiments = [
  {
    name: "Answer-first teaser on blog index",
    status: "Running",
    hypothesis:
      'If "/blog/" includes concise monthly travel answer snippets, users will click deeper into destination guides.',
    targetPage: "Travel Blog",
    targetPath: "/pages/p-3",
    metric: "CTR from blog index to destination posts",
    successSignal: "Increase by 12% over 2 weeks",
    relatedIdea: "Best Time to Visit Amsterdam by Month",
  },
  {
    name: "Trip-length answer block near H1",
    status: "Planned",
    hypothesis:
      'If the Amsterdam itinerary directly answers "Is 5 days enough?" above the fold, bounce rate will decrease.',
    targetPage: "5-Day Amsterdam Itinerary",
    targetPath: "/pages/p-5",
    metric: "Bounce rate from organic traffic",
    successSignal: "Reduce by 8% in first 14 days",
    relatedIdea: "Is 5 Days Enough in Amsterdam? Quick Answer Block",
  },
  {
    name: "Homepage coverage summary card test",
    status: "Review",
    hypothesis:
      "If homepage clearly summarizes destination coverage by region, signup intent should improve.",
    targetPage: "GlobeGlider Home",
    targetPath: "/pages/p-1",
    metric: "Signup CTA click-through rate",
    successSignal: "Increase by 10% vs previous week",
    relatedIdea: "GlobeGlider Destination Coverage: Europe, Asia, Americas",
  },
];

export default function GrowthExperimentsRoute() {
  const featuredCardClass =
    "rounded-xl border border-indigo-200 bg-gradient-to-b from-indigo-50 to-white p-5 shadow-sm ring-1 ring-indigo-100 transition hover:border-indigo-300";
  const standardCardClass =
    "rounded-xl border border-slate-200 bg-white p-5 transition hover:border-indigo-200 hover:bg-indigo-50/30";
  const trackerMetaClass =
    "mt-3.5 grid gap-2 rounded-lg border border-indigo-100 bg-indigo-50/40 p-3 text-sm sm:grid-cols-2";

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
              <ModuleIcon module="growthExperiments" className="h-4 w-4" />
            </span>
            Growth Experiments
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Run focused GlobeGlider tests with clear hypotheses, target pages,
            and success metrics.
          </p>
        </header>

        <section className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50/40 p-5">
          <h2 className="text-base font-semibold text-slate-900">
            Experiment pipeline
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Pull ideas from{" "}
            <Link href="/content-ideas" className="text-indigo-700 hover:underline">
              Content Ideas
            </Link>
            , run tests here, then publish outcomes in{" "}
            <Link href="/insights" className="text-indigo-700 hover:underline">
              Insights
            </Link>
            .
          </p>
        </section>

        <ul className="mt-5 space-y-2.5">
          {experiments.map((experiment) => (
            <li
              key={experiment.name}
              className={experiment.status === "Running" ? featuredCardClass : standardCardClass}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-semibold text-slate-900">{experiment.name}</h2>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    experiment.status === "Running"
                      ? "bg-emerald-50 text-emerald-700"
                      : experiment.status === "Planned"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-slate-100 text-slate-700"
                  }`}
                >
                  Status: {experiment.status}
                </span>
              </div>
              <div className="mt-3 rounded-lg border border-slate-100 bg-white/70 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Hypothesis
                </p>
                <p className="mt-1 text-sm text-slate-700">{experiment.hypothesis}</p>
              </div>
              <dl className={trackerMetaClass}>
                <div>
                  <dt className="font-medium text-slate-700">Target page</dt>
                  <dd className="text-slate-600">
                    <Link href={experiment.targetPath} className="text-indigo-700 hover:underline">
                      {experiment.targetPage}
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Primary metric</dt>
                  <dd className="text-slate-600">{experiment.metric}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Success signal</dt>
                  <dd className="text-slate-600">{experiment.successSignal}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Related idea</dt>
                  <dd className="text-slate-600">
                    <Link href="/content-ideas" className="text-indigo-700 hover:underline">
                      {experiment.relatedIdea}
                    </Link>
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
