import type {
  DashboardSummary,
  IssuePriority,
  PageDetail,
  PageRecord,
  PageTableRow,
  RecommendationAction,
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

export function getRecommendedActionsForPage(id: string): RecommendationAction[] {
  const page = mockPages.find((item) => item.id === id);

  if (!page) {
    return [];
  }

  function toAction(issue: PageRecord["issues"][number]): RecommendationAction {
    switch (issue.title) {
      case "Missing or weak meta description":
        return {
          title: "Add a stronger homepage meta description",
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Write a clear meta description that explains GlobeGlider's value and includes primary travel-planning keywords.",
          isQuickWin: issue.isQuickWin,
        };
      case "No clear product quick-answer":
        return {
          title: 'Add a short "What is GlobeGlider?" answer block near the top',
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Add a concise 2-3 sentence answer section near the hero area so users and answer engines understand the product immediately.",
          isQuickWin: issue.isQuickWin,
        };
      case "Unclear destination coverage summary":
        return {
          title: "Summarize destination coverage by key regions",
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Add a short region summary (for example Europe, Asia, Americas) to make scope clearer for both users and AI readers.",
          isQuickWin: issue.isQuickWin,
        };
      case "Weak heading structure":
        return {
          title: "Improve destination page heading hierarchy",
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Restructure headings so each destination section follows a clear H2/H3 hierarchy and scan-friendly flow.",
          isQuickWin: issue.isQuickWin,
        };
      case "Generic anchor text":
        return {
          title: "Replace generic links with descriptive anchor text",
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Update anchors like \"Read more\" to destination-specific labels that describe the linked content.",
          isQuickWin: issue.isQuickWin,
        };
      case "Missing quick-answer content":
        return {
          title: "Add quick-answer content for seasonal destination planning",
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Include short answer blocks such as \"best destinations by month\" to support direct answers and skimmability.",
          isQuickWin: issue.isQuickWin,
        };
      case "Unclear region grouping":
        return {
          title: "Group destinations by region or travel intent",
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Reorganize destination sections using explicit groups (region, trip style, or season) so navigation is clearer.",
          isQuickWin: issue.isQuickWin,
        };
      case "Weak search context intro":
        return {
          title: "Strengthen the blog index intro for search context",
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Add a focused opening paragraph that explains what topics the blog covers and who it helps.",
          isQuickWin: issue.isQuickWin,
        };
      case "No answer-style snippets":
        return {
          title: "Add concise answer-style snippets for common travel questions",
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Add short Q&A snippets on the blog index for high-intent queries to improve direct-answer usefulness.",
          isQuickWin: issue.isQuickWin,
        };
      case "Loose destination/theme grouping":
        return {
          title: "Organize blog posts by destination and travel theme",
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Create clear groupings (city guides, itineraries, tips) so users can find related posts faster.",
          isQuickWin: issue.isQuickWin,
        };
      case "Image alt text needs improvement":
        return {
          title: "Update supporting image alt text with descriptive context",
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Rewrite generic alt text to describe who or what is shown and why it matters on the page.",
          isQuickWin: issue.isQuickWin,
        };
      case "Missing mission Q&A summary":
        return {
          title: "Add a short mission Q&A summary to the About page",
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Add a brief Q&A block explaining GlobeGlider's mission and audience in plain language.",
          isQuickWin: issue.isQuickWin,
        };
      case "Title and H1 are too similar":
        return {
          title: "Differentiate the page title and H1 with stronger keyword variation",
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Revise the title tag and H1 so they target complementary phrases instead of repeating nearly identical wording.",
          isQuickWin: issue.isQuickWin,
        };
      case "Limited related internal links":
        return {
          title: "Add internal links to related Amsterdam or Netherlands content",
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Link this itinerary to nearby city guides and related country content to improve navigation and context.",
          isQuickWin: issue.isQuickWin,
        };
      case "Missing direct trip-length answer":
        return {
          title: 'Add a direct answer for "Is 5 days enough in Amsterdam?"',
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Add a short answer section near the top with a clear recommendation and quick rationale.",
          isQuickWin: issue.isQuickWin,
        };
      case "Neighborhood summaries are unclear":
        return {
          title: "Add clearer neighborhood summaries for route planning",
          category: issue.category,
          priority: issue.priority,
          explanation:
            "Include concise area-by-area summaries so readers can quickly compare where to stay and what to visit.",
          isQuickWin: issue.isQuickWin,
        };
      default:
        return {
          title: `Improve: ${issue.title}`,
          category: issue.category,
          priority: issue.priority,
          explanation: `Make this update: ${issue.description}`,
          isQuickWin: issue.isQuickWin,
        };
    }
  }

  return [...page.issues]
    .sort((a, b) => priorityRank[b.priority] - priorityRank[a.priority])
    .map((issue) => toAction(issue));
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
