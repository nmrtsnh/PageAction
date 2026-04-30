import { ModuleIcon } from "@/components/layout/module-icon";
import { WorkspaceNav } from "@/components/layout/workspace-nav";
import { PAGEACTION_WORKSPACE_EYEBROW } from "@/lib/pageaction-copy";
import Link from "next/link";

const ideas = [
  {
    title: "Best Time to Visit Amsterdam by Month",
    format: "Blog refresh",
    stage: "Ready to brief",
    sourcePage: "Travel Blog",
    sourcePath: "/pages/p-3",
    relatedIssue: 'No answer-style snippets on "/blog/"',
    linkedExperiment: "Answer-first teaser on blog index",
    outcome: "Increase organic clicks to seasonal itinerary pages",
  },
  {
    title: "Is 5 Days Enough in Amsterdam? Quick Answer Block",
    format: "On-page content module",
    stage: "Drafting",
    sourcePage: "5-Day Amsterdam Itinerary",
    sourcePath: "/pages/p-5",
    relatedIssue: 'Missing direct trip-length answer on itinerary page',
    linkedExperiment: "Trip-length answer block near H1",
    outcome: "Increase engagement and reduce bounce from search traffic",
  },
  {
    title: "GlobeGlider Destination Coverage: Europe, Asia, Americas",
    format: "Homepage content section",
    stage: "Queued",
    sourcePage: "GlobeGlider Home",
    sourcePath: "/pages/p-1",
    relatedIssue: "Unclear destination coverage summary",
    linkedExperiment: "Homepage coverage summary card test",
    outcome: "Clarify value and improve signup intent",
  },
];

export default function ContentIdeasRoute() {
  const featuredCardClass =
    "rounded-xl border border-indigo-200 bg-gradient-to-b from-indigo-50 to-white p-5 shadow-sm ring-1 ring-indigo-100";
  const standardCardClass =
    "rounded-xl border border-slate-200 bg-white p-5 transition hover:border-indigo-200 hover:bg-indigo-50/30";

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
              <ModuleIcon module="contentIdeas" className="h-4 w-4" />
            </span>
            Content Ideas
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Plan GlobeGlider content with direct links to source pages, open
            issues, and active experiments.
          </p>
        </header>

        <section className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50/40 p-5">
          <h2 className="text-base font-semibold text-slate-900">
            Weekly planning focus
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Prioritize ideas tied to high-priority page issues in{" "}
            <Link href="/pages" className="text-indigo-700 hover:underline">
              Pages
            </Link>
            , then hand off the top two to{" "}
            <Link
              href="/growth-experiments"
              className="text-indigo-700 hover:underline"
            >
              Growth Experiments
            </Link>
            .
          </p>
        </section>

        <ul className="mt-6 space-y-3">
          {ideas.map((idea) => (
            <li
              key={idea.title}
              className={idea.stage === "Ready to brief" ? featuredCardClass : standardCardClass}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                  {idea.stage}
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                  {idea.format}
                </span>
              </div>
              <h2 className="mt-3 font-semibold text-slate-900">{idea.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{idea.outcome}</p>
              <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                <div>
                  <dt className="font-medium text-slate-700">Source page</dt>
                  <dd className="text-slate-600">
                    <Link href={idea.sourcePath} className="text-indigo-700 hover:underline">
                      {idea.sourcePage}
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Related issue</dt>
                  <dd className="text-slate-600">{idea.relatedIssue}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="font-medium text-slate-700">Linked experiment</dt>
                  <dd className="text-slate-600">
                    <Link
                      href="/growth-experiments"
                      className="text-indigo-700 hover:underline"
                    >
                      {idea.linkedExperiment}
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
