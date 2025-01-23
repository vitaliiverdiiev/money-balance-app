import { Logo } from "@/widgets";
import { auth, SignOutButton } from "@/entities";
import { HeaderNav } from "./header-nav";
import { HeaderAuthLinks } from "./header-auth-links";

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
