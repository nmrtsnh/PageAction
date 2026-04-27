import type { IssueCategory, IssuePriority, PageStatus } from "@/types/page-data";
import { formatIssuePriority } from "@/lib/format-page-display";

export const priorityBadgeClassName: Record<
  IssuePriority | "none",
  string
> = {
  high: "bg-rose-50 text-rose-700",
  medium: "bg-amber-50 text-amber-700",
  low: "bg-emerald-50 text-emerald-700",
  none: "bg-slate-100 text-slate-600",
};

export const statusBadgeClassName: Record<PageStatus, string> = {
  "needs-review": "bg-rose-50 text-rose-700",
  "in-progress": "bg-amber-50 text-amber-700",
  done: "bg-emerald-50 text-emerald-700",
};

type PriorityBadgeProps = {
  priority: IssuePriority | "none";
};

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${priorityBadgeClassName[priority]}`}
    >
      {formatIssuePriority(priority)}
    </span>
  );
}

type StatusBadgeProps = {
  status: PageStatus;
  label: string;
};

export function StatusBadge({ status, label }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusBadgeClassName[status]}`}
    >
      {label}
    </span>
  );
}

type CategoryBadgeProps = {
  category: IssueCategory;
};

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
      {category}
    </span>
  );
}
