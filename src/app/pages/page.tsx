import { PagesView } from "@/components/dashboard/pages-view";
import { PAGEACTION_WORKSPACE_EYEBROW } from "@/lib/pageaction-copy";
import { getPageTableRows } from "@/lib/mock-page-audits";
import Link from "next/link";

export default function PagesRoute() {
  const rows = getPageTableRows();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-6xl p-6 md:p-10">
        <p className="mb-3">
          <Link
            href="/"
            className="text-sm text-slate-600 transition hover:text-slate-900 hover:underline"
          >
            Back to Overview
          </Link>
        </p>
        <header className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {PAGEACTION_WORKSPACE_EYEBROW}
          </p>
          <h1 className="mt-2 text-3xl font-bold">Pages</h1>
          <p className="mt-2 text-sm text-slate-600">
            Review all website pages, issue volume, priority level, and current
            fix status.
          </p>
        </header>
        <PagesView rows={rows} />
      </div>
    </main>
  );
}
