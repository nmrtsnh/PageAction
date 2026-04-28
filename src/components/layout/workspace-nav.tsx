"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/pages", label: "Pages" },
  { href: "/content-ideas", label: "Content Ideas" },
  { href: "/seo-checklist", label: "SEO Checklist" },
  { href: "/growth-experiments", label: "Growth Experiments" },
  { href: "/insights", label: "Insights" },
];

export function WorkspaceNav() {
  const pathname = usePathname();

  return (
    <nav className="mb-4 overflow-x-auto rounded-xl border border-slate-200 bg-white p-2">
      <ul className="flex min-w-max gap-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href === "/pages" && pathname.startsWith("/pages/"));

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`inline-flex rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
