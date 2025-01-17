import Link from "next/link";
import { routes } from "@/shared/config";

export const Logo = () => {
  return (
    <Link href={routes.home.path()} className="text-xl">
      <span className="text-green-500">Money</span>Balace
    </Link>
  );
};
