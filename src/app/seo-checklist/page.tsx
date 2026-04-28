import { WorkspaceNav } from "@/components/layout/workspace-nav";
import { PAGEACTION_WORKSPACE_EYEBROW } from "@/lib/pageaction-copy";

const checklist = [
  "Add unique title and meta description on core pages",
  "Check heading hierarchy (H1 to H3) on templates",
  "Add internal links to related high-intent pages",
  "Refresh alt text on key visuals",
  "Review FAQ sections for answer-first clarity",
];

export default function SeoChecklistRoute() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-6xl p-6 md:p-10">
        <WorkspaceNav />
        <header className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {PAGEACTION_WORKSPACE_EYEBROW}
          </p>
          <h1 className="mt-2 text-3xl font-bold">SEO Checklist</h1>
          <p className="mt-2 text-sm text-slate-600">
            Keep essential optimization tasks visible and easy to complete.
          </p>
        </header>

        <ul className="mt-6 space-y-2 rounded-xl border border-slate-200 bg-white p-5">
          {checklist.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
              <span className="mt-0.5 inline-flex h-4 w-4 rounded-sm border border-slate-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
