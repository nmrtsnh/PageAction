"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModuleIcon } from "@/components/layout/module-icon";

const navItems = [
  { href: "/dashboard", label: "Dashboard", module: "dashboard" as const },
  { href: "/pages", label: "Pages", module: "pages" as const },
  { href: "/content-ideas", label: "Content Ideas", module: "contentIdeas" as const },
  { href: "/seo-checklist", label: "SEO Checklist", module: "seoChecklist" as const },
  { href: "/growth-experiments", label: "Growth Experiments", module: "growthExperiments" as const },
  { href: "/insights", label: "Insights", module: "insights" as const },
];

export function WorkspaceNav() {
  const pathname = usePathname();

  return (
    <nav className="mb-4 overflow-x-auto rounded-xl border border-indigo-100 bg-white p-2">
      <ul className="flex min-w-max gap-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href === "/pages" && pathname.startsWith("/pages/"));

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`inline-flex rounded-md px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-500/30"
                    : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 active:bg-indigo-100"
                }`}
              >
                <ModuleIcon module={item.module} className="mr-1.5 h-3.5 w-3.5 opacity-85" />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
