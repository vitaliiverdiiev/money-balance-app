import { GithubLogo, GoogleLogo, X } from "@phosphor-icons/react/dist/ssr";

export const ICON_MAP = {
  close : X,
  github: GithubLogo,
  google: GoogleLogo,
} as const;

export type IIconName = keyof typeof ICON_MAP;
