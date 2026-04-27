import type {
  DashboardSummary,
  IssuePriority,
  PageDetail,
  PageRecord,
  PageTableRow,
} from "@/types/page-data";

const mockPages: PageRecord[] = [
  {
    id: "p-1",
    title: "GlobeGlider Home",
    url: "/",
    pageType: "home",
    status: "needs-review",
    priority: "medium",
    issues: [
      {
        title: "Missing or weak meta description",
        category: "SEO",
        priority: "medium",
        description: "Meta description is missing or too weak for the homepage.",
        isQuickWin: true,
      },
      {
        title: "No clear product quick-answer",
        category: "AEO",
        priority: "medium",
        description:
          "The page does not clearly answer \"What is GlobeGlider?\" near the top.",
        isQuickWin: false,
      },
      {
        title: "Unclear destination coverage summary",
        category: "GEO",
        priority: "low",
        description:
          "The homepage does not clearly summarize destination coverage for AI-readable context.",
        isQuickWin: true,
      },
    ],
  },
  {
    id: "p-2",
    title: "Destinations",
    url: "/destinations/",
    pageType: "listing",
    status: "in-progress",
    priority: "high",
    issues: [
      {
        title: "Weak heading structure",
        category: "SEO",
        priority: "high",
        description: "Destination sections need a clearer heading structure.",
        isQuickWin: false,
      },
      {
        title: "Generic anchor text",
        category: "SEO",
        priority: "medium",
        description: "Some links use generic anchor text like \"Read more\".",
        isQuickWin: true,
      },
      {
        title: "Missing quick-answer content",
        category: "AEO",
        priority: "medium",
        description:
          "The page is missing quick-answer content such as \"best destinations by month\".",
        isQuickWin: false,
      },
      {
        title: "Unclear region grouping",
        category: "GEO",
        priority: "medium",
        description:
          "Destinations are not grouped clearly by region or travel intent.",
        isQuickWin: false,
      },
    ],
  },
  {
    id: "p-3",
    title: "Travel Blog",
    url: "/blog/",
    pageType: "blog-index",
    status: "needs-review",
    priority: "medium",
    issues: [
      {
        title: "Weak search context intro",
        category: "SEO",
        priority: "medium",
        description:
          "The blog index needs a stronger intro paragraph for search context.",
        isQuickWin: true,
      },
      {
        title: "No answer-style snippets",
        category: "AEO",
        priority: "high",
        description:
          "The page does not include concise answer-style snippets for common travel questions.",
        isQuickWin: false,
      },
      {
        title: "Loose destination/theme grouping",
        category: "GEO",
        priority: "low",
        description:
          "Posts are not grouped clearly enough by destination or travel theme.",
        isQuickWin: false,
      },
    ],
  },
  {
    id: "p-4",
    title: "About GlobeGlider",
    url: "/about/",
    pageType: "about",
    status: "done",
    priority: "low",
    issues: [
      {
        title: "Image alt text needs improvement",
        category: "SEO",
        priority: "low",
        description:
          "Some profile or supporting images may need more descriptive alt text.",
        isQuickWin: true,
      },
      {
        title: "Missing mission Q&A summary",
        category: "AEO",
        priority: "low",
        description:
          "The page could use a short Q&A-style summary of GlobeGlider's mission.",
        isQuickWin: true,
      },
    ],
  },
  {
    id: "p-5",
    title: "5-Day Amsterdam Itinerary",
    url: "/blog/city-guides/amsterdam-5-day-itinerary/",
    pageType: "blog-post",
    status: "needs-review",
    priority: "high",
    issues: [
      {
        title: "Title and H1 are too similar",
        category: "SEO",
        priority: "high",
        description:
          "The H1 and title tag are too similar and need stronger keyword variation.",
        isQuickWin: false,
      },
      {
        title: "Limited related internal links",
        category: "SEO",
        priority: "medium",
        description:
          "Internal links to related Amsterdam or Netherlands content are limited.",
        isQuickWin: false,
      },
      {
        title: "Missing direct trip-length answer",
        category: "AEO",
        priority: "high",
        description:
          "The post does not directly answer \"Is 5 days enough in Amsterdam?\"",
        isQuickWin: false,
      },
      {
        title: "Neighborhood summaries are unclear",
        category: "GEO",
        priority: "medium",
        description:
          "The post could use clearer neighborhood or area summaries for AI-readable trip planning.",
        isQuickWin: true,
      },
    ],
  },
];

export function getPageSummary(): DashboardSummary {
  const totalPages = mockPages.length;
  const pagesWithIssues = mockPages.filter((page) => page.issues.length > 0).length;
  const highPriorityIssues = mockPages.flatMap((page) => page.issues).filter(
    (issue) => issue.priority === "high",
  ).length;
  const quickWins = mockPages.flatMap((page) => page.issues).filter(
    (issue) => issue.isQuickWin,
  ).length;

  return {
    totalPages,
    pagesWithIssues,
    highPriorityIssues,
    quickWins,
  };
}

const priorityRank: Record<IssuePriority, number> = {
  high: 3,
  medium: 2,
  low: 1,
};

function getHighestPriority(issues: PageRecord["issues"]): IssuePriority | "none" {
  if (issues.length === 0) {
    return "none";
  }

  return issues.reduce<IssuePriority>(
    (top, issue) =>
      priorityRank[issue.priority] > priorityRank[top] ? issue.priority : top,
    "low",
  );
}

export function getPageTableRows(): PageTableRow[] {
  return mockPages.map((page) => ({
    id: page.id,
    title: page.title,
    url: page.url,
    pageType: page.pageType,
    issueCount: page.issues.length,
    highestPriority: getHighestPriority(page.issues),
    status: page.status,
  }));
}

export function getPageDetailById(id: string): PageDetail | null {
  const page = mockPages.find((item) => item.id === id);

  if (!page) {
    return null;
  }

  return {
    id: page.id,
    title: page.title,
    url: page.url,
    pageType: page.pageType,
    status: page.status,
    priority: page.priority,
    highestPriority: getHighestPriority(page.issues),
    totalIssueCount: page.issues.length,
    issues: page.issues,
  };
}
