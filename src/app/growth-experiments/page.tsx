import { WorkspaceNav } from "@/components/layout/workspace-nav";
import { PAGEACTION_WORKSPACE_EYEBROW } from "@/lib/pageaction-copy";

const experiments = [
  {
    name: "Homepage hero headline variation",
    status: "Running",
    target: "Signup CTR",
  },
  {
    name: "FAQ block above fold on core pages",
    status: "Planned",
    target: "Engagement time",
  },
  {
    name: "Internal link module in blog posts",
    status: "Review",
    target: "Pages/session",
  },
];

export default function GrowthExperimentsRoute() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-6xl p-6 md:p-10">
        <WorkspaceNav />
        <header className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {PAGEACTION_WORKSPACE_EYEBROW}
          </p>
          <h1 className="mt-2 text-3xl font-bold">Growth Experiments</h1>
          <p className="mt-2 text-sm text-slate-600">
            Track a few focused website experiments without extra workflow overhead.
          </p>
        </header>

        <ul className="mt-6 space-y-3">
          {experiments.map((experiment) => (
            <li
              key={experiment.name}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <h2 className="font-semibold text-slate-900">{experiment.name}</h2>
              <p className="mt-1 text-sm text-slate-600">
                {experiment.status} · Target metric: {experiment.target}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
