import {
  CategoryBadge,
  PriorityBadge,
  StatusBadge,
} from "@/lib/dashboard-badges";
import { WorkspaceNav } from "@/components/layout/workspace-nav";
import {
  formatPageStatus,
  formatPageType,
} from "@/lib/format-page-display";
import { getPageDetailWithRecommendations } from "@/lib/mock-page-audits";
import { PAGEACTION_WORKSPACE_EYEBROW } from "@/lib/pageaction-copy";
import Link from "next/link";

type PageDetailViewProps = {
  params: Promise<{ id: string }>;
};

export default async function PageDetailView({ params }: PageDetailViewProps) {
  const { id } = await params;
  const result = getPageDetailWithRecommendations(id);

  if (!result) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto w-full max-w-6xl p-6 md:p-10">
          <WorkspaceNav />
          <p className="text-sm text-slate-600">Page not found.</p>
          <Link href="/pages" className="mt-4 inline-block text-sm text-indigo-700 hover:underline">
            Back to Pages
          </Link>
        </div>
      </main>
    );
  }

  const { detail, actions } = result;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-6xl p-6 md:p-10">
        <WorkspaceNav />
        <header className="rounded-xl border border-indigo-100 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
            {PAGEACTION_WORKSPACE_EYEBROW}
          </p>
          <h1 className="mt-2 text-2xl font-bold">{detail.title}</h1>
          <p className="mt-2 text-sm text-slate-600">{detail.url}</p>
          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <p>
              <span className="font-semibold text-slate-700">Page type:</span>{" "}
              <span className="text-slate-600">{formatPageType(detail.pageType)}</span>
            </p>
            <p>
              <span className="font-semibold text-slate-700">Current status:</span>{" "}
              <StatusBadge
                status={detail.status}
                label={formatPageStatus(detail.status)}
              />
            </p>
            <p>
              <span className="font-semibold text-slate-700">Highest priority:</span>{" "}
              <PriorityBadge priority={detail.highestPriority} />
            </p>
            <p>
              <span className="font-semibold text-slate-700">Page priority:</span>{" "}
              <PriorityBadge priority={detail.priority} />
            </p>
            <p>
              <span className="font-semibold text-slate-700">Total issue count:</span>{" "}
              <span className="text-slate-600">{detail.totalIssueCount}</span>
            </p>
          </div>
          <Link href="/pages" className="mt-5 inline-block text-sm text-indigo-700 hover:underline">
            Back to Pages
          </Link>
        </header>

        <section className="mt-6 rounded-xl border border-indigo-100 bg-white p-6">
          <h2 className="text-lg font-semibold">Recommendations / Actions</h2>
          <p className="mt-1 text-sm text-slate-600">
            Prioritized actions based on the current issue set for this page.
          </p>
          <ul className="mt-4 space-y-3">
            {actions.map((action, index) => (
              <li
                key={`${action.title}-${index}`}
                className="rounded-lg border border-slate-200 p-4"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-slate-900">{action.title}</h3>
                  <CategoryBadge category={action.category} />
                  <PriorityBadge priority={action.priority} />
                  {action.isQuickWin && (
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                      Quick win
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-600">{action.explanation}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-xl border border-indigo-100 bg-white p-6">
          <h2 className="text-lg font-semibold">Issues</h2>
          <ul className="mt-4 space-y-3">
            {detail.issues.map((issue, index) => (
              <li
                key={`${issue.title}-${index}`}
                className="rounded-lg border border-slate-200 p-4"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-slate-900">{issue.title}</h3>
                  <CategoryBadge category={issue.category} />
                  <PriorityBadge priority={issue.priority} />
                </div>
                <p className="mt-2 text-sm text-slate-600">{issue.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
