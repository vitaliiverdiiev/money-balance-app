"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/shared/config";

type Props = {
  isSignedIn: boolean;
  signOutButton: React.ReactNode;
};

export const HeaderAuthLinks: React.FC<Props> = ({
  isSignedIn,
  signOutButton,
}) => {
  const pathname = usePathname();

  return isSignedIn ? (
    signOutButton
  ) : pathname.includes("sign-in") ? (
    <Link href={routes.signUp.path()} className="font-semibold">
      {routes.signUp.label}
    </Link>
  ) : (
    <Link href={routes.signIn.path()} className="font-semibold">
      {routes.signIn.label}
    </Link>
  );
};
