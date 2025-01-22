import Link from "next/link";
import { routes } from "@/shared/config";

export const AlreadyHaveAccount = () => {
  return (
    <div className="inline-flex items-center justify-center gap-1">
      <span>Already have an account?</span>
      <Link
        href={routes.signIn.path()}
        className="font-medium text-green-700 underline underline-offset-2"
      >
        {routes.signIn.label}
      </Link>
    </div>
  );
};
