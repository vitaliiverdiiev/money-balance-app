type RouteKey =
  | "home"
  | "dashboard"
  | "income"
  | "spendings"
  | "signIn"
  | "signUp";

type Route = {
  label: string;
  path: () => string;
};

type Routes = Record<RouteKey, Route>;

export const routes: Routes = {
  home: {
    label: "Home",
    path : () => "/",
  },
  dashboard: {
    label: "Dashboard",
    path : () => "/dashboard",
  },
  income: {
    label: "Income",
    path : () => "/income",
  },
  spendings: {
    label: "Spendings",
    path : () => "/spendings",
  },
  signIn: {
    label: "Sign in",
    path : () => "/auth/sign-in",
  },
  signUp: {
    label: "Sign up",
    path : () => "/auth/sign-up",
  },
};
