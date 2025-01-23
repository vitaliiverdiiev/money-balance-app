import Link from "next/link";
import { cn } from "@/shared/utils";

type Props = {
  label: string;
  href: string;
  currentPath: string;
};

export const NavLink: React.FC<Props> = ({ href, label, currentPath }) => {
  const currentStyles =
    // normalizePath(href) === normalizePath(currentPath)
    href.toLowerCase() === currentPath.toLowerCase()
      ? "font-bold text-brand-dark"
      : "";

  return (
    <li>
      <Link href={href} className={cn(currentStyles, "text-lg")}>
        {label}
      </Link>
    </li>
  );
};
