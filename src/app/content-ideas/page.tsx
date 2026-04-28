import { WorkspaceNav } from "@/components/layout/workspace-nav";
import { PAGEACTION_WORKSPACE_EYEBROW } from "@/lib/pageaction-copy";

const ideas = [
  {
    title: "Startup Website Copy Teardown",
    channel: "Blog",
    stage: "Drafting",
  },
  {
    title: "Homepage SEO Checklist for Founders",
    channel: "Newsletter",
    stage: "Ready",
  },
  {
    title: "How to Prioritize Page Fixes Weekly",
    channel: "LinkedIn",
    stage: "Planned",
  },
];

export default function ContentIdeasRoute() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-6xl p-6 md:p-10">
        <WorkspaceNav />
        <header className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {PAGEACTION_WORKSPACE_EYEBROW}
          </p>
          <h1 className="mt-2 text-3xl font-bold">Content Ideas</h1>
          <p className="mt-2 text-sm text-slate-600">
            A lightweight planning board for growth-focused content opportunities.
          </p>
        </header>

        <ul className="mt-6 space-y-3">
          {ideas.map((idea) => (
            <li
              key={idea.title}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <h2 className="font-semibold text-slate-900">{idea.title}</h2>
              <p className="mt-1 text-sm text-slate-600">
                {idea.channel} · {idea.stage}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
