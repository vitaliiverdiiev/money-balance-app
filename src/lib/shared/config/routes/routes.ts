type RouteKey = "home" | "dashboard";

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
};
