import type { PageTableRow } from "@/types/page-data";
import Link from "next/link";

type PagesTableProps = {
  rows: PageTableRow[];
};

const priorityClassName: Record<PageTableRow["highestPriority"], string> = {
  high: "bg-rose-50 text-rose-700",
  medium: "bg-amber-50 text-amber-700",
  low: "bg-emerald-50 text-emerald-700",
  none: "bg-slate-100 text-slate-600",
};

const statusClassName: Record<PageTableRow["status"], string> = {
  "needs-review": "bg-rose-50 text-rose-700",
  "in-progress": "bg-amber-50 text-amber-700",
  done: "bg-emerald-50 text-emerald-700",
};

export function PagesTable({ rows }: PagesTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-4 py-3 font-semibold">Page title</th>
            <th className="px-4 py-3 font-semibold">URL</th>
            <th className="px-4 py-3 font-semibold">Page type</th>
            <th className="px-4 py-3 font-semibold">Issue count</th>
            <th className="px-4 py-3 font-semibold">Highest priority</th>
            <th className="px-4 py-3 font-semibold">Current status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-slate-50">
              <td className="px-4 py-3 font-medium text-slate-900">
                <Link href={`/pages/${row.id}`} className="hover:underline">
                  {row.title}
                </Link>
              </td>
              <td className="px-4 py-3 text-slate-600">{row.url}</td>
              <td className="px-4 py-3 text-slate-700">{row.pageType}</td>
              <td className="px-4 py-3 text-slate-700">{row.issueCount}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${priorityClassName[row.highestPriority]}`}
                >
                  {row.highestPriority}
                </span>
              </td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusClassName[row.status]}`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
