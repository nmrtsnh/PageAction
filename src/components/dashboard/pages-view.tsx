"use client";

import { PagesTable } from "@/components/dashboard/pages-table";
import {
  formatIssuePriority,
  formatPageStatus,
  formatPageType,
} from "@/lib/format-page-display";
import type {
  IssuePriority,
  PageStatus,
  PageTableRow,
  PageType,
} from "@/types/page-data";
import { useMemo, useState } from "react";

const ALL = "all" as const;

type StatusFilter = typeof ALL | PageStatus;
type PriorityFilter = typeof ALL | IssuePriority | "none";
type PageTypeFilter = typeof ALL | PageType;

const STATUS_OPTIONS: PageStatus[] = ["needs-review", "in-progress", "done"];
const PRIORITY_OPTIONS: (IssuePriority | "none")[] = ["high", "medium", "low", "none"];
const PAGE_TYPE_OPTIONS: PageType[] = [
  "home",
  "listing",
  "blog-index",
  "about",
  "blog-post",
];

type PagesViewProps = {
  rows: PageTableRow[];
};

export function PagesView({ rows }: PagesViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>(ALL);
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>(ALL);
  const [pageTypeFilter, setPageTypeFilter] = useState<PageTypeFilter>(ALL);

  const filteredRows = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return rows.filter((row) => {
      if (statusFilter !== ALL && row.status !== statusFilter) {
        return false;
      }
      if (priorityFilter !== ALL && row.highestPriority !== priorityFilter) {
        return false;
      }
      if (pageTypeFilter !== ALL && row.pageType !== pageTypeFilter) {
        return false;
      }
      if (q) {
        const titleMatch = row.title.toLowerCase().includes(q);
        const urlMatch = row.url.toLowerCase().includes(q);
        if (!titleMatch && !urlMatch) {
          return false;
        }
      }
      return true;
    });
  }, [rows, searchQuery, statusFilter, priorityFilter, pageTypeFilter]);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    statusFilter !== ALL ||
    priorityFilter !== ALL ||
    pageTypeFilter !== ALL;

  function resetFilters() {
    setSearchQuery("");
    setStatusFilter(ALL);
    setPriorityFilter(ALL);
    setPageTypeFilter(ALL);
  }

  const selectClassName =
    "rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-sm text-slate-800 shadow-sm transition hover:border-indigo-300 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-300";

  const inputClassName =
    "w-full min-w-0 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-sm text-slate-800 shadow-sm placeholder:text-slate-400 transition hover:border-indigo-300 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-300 sm:min-w-[16rem]";

  return (
    <div>
      <div className="mb-3 flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-2.5">
        <label className="flex w-full flex-col gap-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Search
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by page title or URL…"
            className={inputClassName}
            autoComplete="off"
          />
        </label>
        <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-nowrap sm:items-end sm:justify-between sm:gap-2.5">
          <div className="flex min-w-0 flex-1 flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-end sm:gap-x-2.5 sm:gap-y-1.5">
            <label className="flex flex-col gap-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Status
              <select
                className={selectClassName}
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value as StatusFilter)
                }
              >
                <option value={ALL}>All statuses</option>
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {formatPageStatus(s)}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Highest priority
              <select
                className={selectClassName}
                value={priorityFilter}
                onChange={(e) =>
                  setPriorityFilter(e.target.value as PriorityFilter)
                }
              >
                <option value={ALL}>All priorities</option>
                {PRIORITY_OPTIONS.map((p) => (
                  <option key={p} value={p}>
                    {formatIssuePriority(p)}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Page type
              <select
                className={selectClassName}
                value={pageTypeFilter}
                onChange={(e) =>
                  setPageTypeFilter(e.target.value as PageTypeFilter)
                }
              >
                <option value={ALL}>All types</option>
                {PAGE_TYPE_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {formatPageType(t)}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button
            type="button"
            onClick={resetFilters}
            disabled={!hasActiveFilters}
            className="inline-flex shrink-0 items-center justify-center self-start rounded-lg border border-slate-300 bg-white px-3 py-1 text-sm font-medium text-slate-800 transition hover:border-indigo-300 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:self-end"
          >
            Reset filters
          </button>
        </div>
      </div>

      {filteredRows.length === 0 ? (
        <p className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
          No pages match your search or filters. Try adjusting or reset to see
          all pages.
        </p>
      ) : (
        <PagesTable rows={filteredRows} />
      )}
    </div>
  );
}
