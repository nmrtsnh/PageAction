import { getPageDetailById } from "@/lib/mock-pages";
import Link from "next/link";

type PageDetailViewProps = {
  params: Promise<{ id: string }>;
};

const priorityClassName = {
  high: "bg-rose-50 text-rose-700",
  medium: "bg-amber-50 text-amber-700",
  low: "bg-emerald-50 text-emerald-700",
  none: "bg-slate-100 text-slate-600",
} as const;

const statusClassName = {
  "needs-review": "bg-rose-50 text-rose-700",
  "in-progress": "bg-amber-50 text-amber-700",
  done: "bg-emerald-50 text-emerald-700",
} as const;

export default async function PageDetailView({ params }: PageDetailViewProps) {
  const { id } = await params;
  const detail = getPageDetailById(id);

  if (!detail) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto w-full max-w-6xl p-6 md:p-10">
          <p className="text-sm text-slate-600">Page not found.</p>
          <Link href="/pages" className="mt-4 inline-block text-sm text-blue-700 hover:underline">
            Back to Pages
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-6xl p-6 md:p-10">
        <header className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Page Detail
          </p>
          <h1 className="mt-2 text-2xl font-bold">{detail.title}</h1>
          <p className="mt-2 text-sm text-slate-600">{detail.url}</p>
          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <p>
              <span className="font-semibold text-slate-700">Page type:</span>{" "}
              <span className="text-slate-600">{detail.pageType}</span>
            </p>
            <p>
              <span className="font-semibold text-slate-700">Current status:</span>{" "}
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusClassName[detail.status]}`}
              >
                {detail.status}
              </span>
            </p>
            <p>
              <span className="font-semibold text-slate-700">Highest priority:</span>{" "}
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${priorityClassName[detail.highestPriority]}`}
              >
                {detail.highestPriority}
              </span>
            </p>
            <p>
              <span className="font-semibold text-slate-700">Page priority:</span>{" "}
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${priorityClassName[detail.priority]}`}
              >
                {detail.priority}
              </span>
            </p>
            <p>
              <span className="font-semibold text-slate-700">Total issue count:</span>{" "}
              <span className="text-slate-600">{detail.totalIssueCount}</span>
            </p>
          </div>
          <Link href="/pages" className="mt-5 inline-block text-sm text-blue-700 hover:underline">
            Back to Pages
          </Link>
        </header>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Issues</h2>
          <ul className="mt-4 space-y-3">
            {detail.issues.map((issue, index) => (
              <li key={`${issue.category}-${index}`} className="rounded-lg border border-slate-200 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-slate-900">{issue.title}</h3>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                    {issue.category}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${priorityClassName[issue.priority]}`}
                  >
                    {issue.priority}
                  </span>
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
