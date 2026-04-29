import { WorkspaceNav } from "@/components/layout/workspace-nav";
import { PAGEACTION_WORKSPACE_EYEBROW } from "@/lib/pageaction-copy";
import Link from "next/link";

const checklistGroups = [
  {
    title: "Critical page fixes",
    description: "Resolve blockers from Pages first.",
    items: [
      {
        task: "Fix heading hierarchy on Destinations page sections",
        page: "Destinations",
        pagePath: "/pages/p-2",
      },
      {
        task: "Differentiate title tag and H1 on Amsterdam itinerary",
        page: "5-Day Amsterdam Itinerary",
        pagePath: "/pages/p-5",
      },
    ],
  },
  {
    title: "Answer-first content structure",
    description: "Expand quick-answer coverage for search and assistants.",
    items: [
      {
        task: 'Add concise "What is GlobeGlider?" answer block near homepage hero',
        page: "GlobeGlider Home",
        pagePath: "/pages/p-1",
      },
      {
        task: "Add monthly destination quick-answer snippets on blog index",
        page: "Travel Blog",
        pagePath: "/pages/p-3",
      },
    ],
  },
  {
    title: "Internal linking and context",
    description: "Connect high-intent pages with clearer navigation paths.",
    items: [
      {
        task: "Add contextual links between Amsterdam and Netherlands guides",
        page: "5-Day Amsterdam Itinerary",
        pagePath: "/pages/p-5",
      },
      {
        task: "Group destinations by region and intent labels",
        page: "Destinations",
        pagePath: "/pages/p-2",
      },
    ],
  },
];

export default function SeoChecklistRoute() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-6xl p-6 md:p-10">
        <WorkspaceNav />
        <header className="rounded-xl border border-indigo-100 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
            {PAGEACTION_WORKSPACE_EYEBROW}
          </p>
          <h1 className="mt-2 text-3xl font-bold">SEO Checklist</h1>
          <p className="mt-2 text-sm text-slate-600">
            Workflow-based SEO tasks tied to GlobeGlider pages that need action.
          </p>
        </header>

        <p className="mt-6 text-sm text-slate-600">
          Review issues in{" "}
          <Link href="/pages" className="text-indigo-700 hover:underline">
            Pages
          </Link>
          , execute the grouped tasks here, and send content-driven actions to{" "}
          <Link href="/content-ideas" className="text-indigo-700 hover:underline">
            Content Ideas
          </Link>
          .
        </p>

        <ul className="mt-4 space-y-3">
          {checklistGroups.map((group) => (
            <li key={group.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-slate-900">{group.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{group.description}</p>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={`${group.title}-${item.task}`}
                    className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                  >
                    <span className="mt-0.5 inline-flex h-4 w-4 rounded-sm border border-indigo-300 bg-white" />
                    <span>
                      {item.task}{" "}
                      <Link href={item.pagePath} className="text-indigo-700 hover:underline">
                        ({item.page})
                      </Link>
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
