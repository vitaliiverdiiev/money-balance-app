import Link from "next/link";
import { Logo } from "@/widgets";
import { routes } from "@/shared/config";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="container h-16 flex items-center justify-between">
        <Logo />

        <ul className="flex items-center gap-8">
          <li>
            <Link href={routes.dashboard.path()}>{routes.dashboard.label}</Link>
          </li>
          <li>
            <Link href={routes.income.path()}>{routes.income.label}</Link>
          </li>
          <li>
            <Link href={routes.spendings.path()}>{routes.spendings.label}</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
