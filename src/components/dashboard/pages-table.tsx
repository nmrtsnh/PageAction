import type { PageTableRow } from "@/types/page-data";
import {
  PriorityBadge,
  StatusBadge,
} from "@/lib/dashboard-badges";
import {
  formatPageStatus,
  formatPageType,
} from "@/lib/format-page-display";
import Link from "next/link";

type PagesTableProps = {
  rows: PageTableRow[];
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
            <tr key={row.id} className="transition hover:bg-indigo-50/40">
              <td className="px-4 py-3 font-medium text-slate-900">
                <Link
                  href={`/pages/${row.id}`}
                  className="cursor-pointer rounded-sm hover:text-indigo-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                >
                  {row.title}
                </Link>
              </td>
              <td className="px-4 py-3 text-slate-600">{row.url}</td>
              <td className="px-4 py-3 text-slate-700">
                {formatPageType(row.pageType)}
              </td>
              <td className="px-4 py-3 text-slate-700">{row.issueCount}</td>
              <td className="px-4 py-3">
                <PriorityBadge priority={row.highestPriority} />
              </td>
              <td className="px-4 py-3">
                <StatusBadge
                  status={row.status}
                  label={formatPageStatus(row.status)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
