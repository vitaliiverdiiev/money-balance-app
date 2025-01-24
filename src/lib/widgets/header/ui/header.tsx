import { Logo } from "@/widgets";
import { HeaderNav } from "./header-nav";
import { HeaderAuthLinks } from "./header-auth-links";
import { auth } from "~/src/modules/_auth/auth";
import { SignOutButton } from "~/src/modules/_auth/components";

export const Header: React.FC = async () => {
  const session = await auth();

  return (
    <header>
      <div className="container h-16 flex items-center justify-between">
        <Logo />
        <HeaderNav
          authLinks={
            <HeaderAuthLinks
              isSignedIn={!!session}
              signOutButton={<SignOutButton />}
            />
          }
        />
      </div>
    </header>
  );
};
