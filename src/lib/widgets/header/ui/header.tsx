import Link from "next/link";
import { Logo } from "@/widgets";
import { routes } from "@/shared/config";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="container h-16 flex items-center justify-between">
        <Logo />

        <Link href={routes.dashboard.path()}>{routes.dashboard.label}</Link>
      </div>
    </header>
  );
};
