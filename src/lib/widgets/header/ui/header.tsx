import Link from "next/link";
import { routes } from "@/shared/config";
import { Logo } from "@/widgets";
import { auth, SignOutButton } from "@/entities";
import { HeaderAuthLinks } from "./header-auth-links";

export const Header: React.FC = async () => {
  const session = await auth();

  return (
    <header>
      <div className="container h-16 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-16">
          <ul className="flex items-center gap-8">
            <li>
              <Link href={routes.dashboard.path()}>
                {routes.dashboard.label}
              </Link>
            </li>
            <li>
              <Link href={routes.income.path()}>{routes.income.label}</Link>
            </li>
            <li>
              <Link href={routes.spendings.path()}>
                {routes.spendings.label}
              </Link>
            </li>
          </ul>

          <HeaderAuthLinks
            isSignedIn={!!session}
            signOutButton={<SignOutButton />}
          />
        </div>
      </div>
    </header>
  );
};
