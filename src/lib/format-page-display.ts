import type { IssuePriority, PageStatus, PageType } from "@/types/page-data";

const pageStatusLabels: Record<PageStatus, string> = {
  "needs-review": "Needs review",
  "in-progress": "In progress",
  done: "Done",
};

const pageTypeLabels: Record<PageType, string> = {
  home: "Home",
  listing: "Listing",
  "blog-index": "Blog index",
  about: "About",
  "blog-post": "Blog post",
};

export function formatPageStatus(status: PageStatus): string {
  return pageStatusLabels[status];
}

export function formatPageType(pageType: PageType): string {
  return pageTypeLabels[pageType];
}

const issuePriorityLabels: Record<IssuePriority | "none", string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
  none: "None",
};

export function formatIssuePriority(priority: IssuePriority | "none"): string {
  return issuePriorityLabels[priority];
}
