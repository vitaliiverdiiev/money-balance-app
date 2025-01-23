"use client";

import { usePathname } from "next/navigation";
import { routes } from "@/shared/config";
import { NavLink } from "@/shared/ui/nav-link";

export const HeaderNav: React.FC<{ authLinks: React.ReactNode }> = ({
  authLinks,
}) => {
  const path = usePathname();
  return (
    <nav className="flex items-center gap-16">
      <ul className="flex items-center gap-8">
        <NavLink
          label={routes.dashboard.label}
          href={routes.dashboard.path()}
          currentPath={path}
        />
        <NavLink
          label={routes.income.label}
          href={routes.income.path()}
          currentPath={path}
        />
        <NavLink
          label={routes.spendings.label}
          href={routes.spendings.path()}
          currentPath={path}
        />
        <NavLink
          label={routes.todos.label}
          href={routes.todos.path()}
          currentPath={path}
        />
      </ul>
      {authLinks}
    </nav>
  );
};
