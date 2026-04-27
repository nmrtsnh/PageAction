export type IssueCategory = "SEO" | "AEO" | "GEO";
export type IssuePriority = "high" | "medium" | "low";
export type PageType =
  | "home"
  | "listing"
  | "blog-index"
  | "about"
  | "blog-post";
export type PageStatus = "needs-review" | "in-progress" | "done";

export type PageIssue = {
  title: string;
  category: IssueCategory;
  priority: IssuePriority;
  description: string;
  isQuickWin: boolean;
};

export type PageRecord = {
  id: string;
  title: string;
  url: string;
  pageType: PageType;
  status: PageStatus;
  priority: IssuePriority;
  issues: PageIssue[];
};

export type DashboardSummary = {
  totalPages: number;
  pagesWithIssues: number;
  highPriorityIssues: number;
  quickWins: number;
};

export type PageTableRow = {
  id: string;
  title: string;
  url: string;
  pageType: PageType;
  issueCount: number;
  highestPriority: IssuePriority | "none";
  status: PageStatus;
};

export type PageDetail = {
  id: string;
  title: string;
  url: string;
  pageType: PageType;
  status: PageStatus;
  priority: IssuePriority;
  highestPriority: IssuePriority | "none";
  totalIssueCount: number;
  issues: PageIssue[];
};
