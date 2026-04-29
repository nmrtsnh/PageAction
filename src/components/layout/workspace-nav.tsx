"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "DB" },
  { href: "/pages", label: "Pages", icon: "PG" },
  { href: "/content-ideas", label: "Content Ideas", icon: "CI" },
  { href: "/seo-checklist", label: "SEO Checklist", icon: "SEO" },
  { href: "/growth-experiments", label: "Growth Experiments", icon: "EXP" },
  { href: "/insights", label: "Insights", icon: "IN" },
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
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              >
                <span className="mr-1.5 text-[10px] font-semibold opacity-80">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
