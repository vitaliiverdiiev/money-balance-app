import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      lc_username: string | null;
      org: string | null;
    } & DefaultSession["user"];
  }
}
