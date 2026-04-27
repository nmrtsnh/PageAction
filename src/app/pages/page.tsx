import { PagesTable } from "@/components/dashboard/pages-table";
import { PAGEACTION_WORKSPACE_EYEBROW } from "@/lib/pageaction-copy";
import { getPageTableRows } from "@/lib/mock-page-audits";

export default function PagesView() {
  const rows = getPageTableRows();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-6xl p-6 md:p-10">
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
        <PagesTable rows={rows} />
      </div>
    </main>
  );
}
