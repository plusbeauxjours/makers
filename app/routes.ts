import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home-page.tsx"),
  ...prefix("products", [
    index("features/products/pages/products-page.tsx"),
    ...prefix("leaderboards", [
      index("features/products/pages/leaderboards-page.tsx"),
      route("/yearly/:year", "features/products/pages/yearly-leaderboards-page.tsx"),
      route("/monthly/:year/:month", "features/products/pages/monthly-leaderboards-page.tsx"),
      route("/weekly/:year/:week", "features/products/pages/weekly-leaderboards-page.tsx"),
      route("/daily/:year/:month/:day", "features/products/pages/daily-leaderboards-page.tsx"),
    ]),
    ...prefix("categories", [
      index("features/products/pages/categories-page.tsx"),
      route("/:category", "features/products/pages/category-page.tsx"),
    ]),
    ...prefix("search", [
      index("features/products/pages/search-page.tsx"),
      route("/:query", "features/products/pages/search-results-page.tsx"),
    ]),
    route("/submit", "features/products/pages/submit-page.tsx"),
    route("/promote", "features/products/pages/promote-page.tsx"),
  ]),
] satisfies RouteConfig;
