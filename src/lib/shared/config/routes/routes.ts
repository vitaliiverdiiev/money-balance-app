type RouteKey = "home" | "dashboard" | "income" | "spendings";

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
};
