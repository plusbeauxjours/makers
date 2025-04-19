import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home-page.tsx"),
  ...prefix("products", [
    index("features/products/pages/products-page.tsx"),
    ...prefix("leaderboard", [
      index("features/products/pages/leaderboard-page.tsx"),
      route("/yearly/:year", "features/products/pages/leaderboard-yearly-page.tsx"),
      route("/monthly/:year/:month", "features/products/pages/leaderboard-monthly-page.tsx"),
      route("/weekly/:year/:week", "features/products/pages/leaderboard-weekly-page.tsx"),
      route("/daily/:year/:month/:day", "features/products/pages/leaderboard-daily-page.tsx"),
      route("/:period", "features/products/pages/leaderboard-redirect-page.tsx"),
    ]),
    ...prefix("categories", [
      index("features/products/pages/categories-page.tsx"),
      route("/:category", "features/products/pages/category-page.tsx"),
    ]),
    route("/search", "features/products/pages/search-page.tsx"),
    route("/submit", "features/products/pages/submit-page.tsx"),
    route("/promote", "features/products/pages/promote-page.tsx"),
    ...prefix("/:productId", [
      index("features/products/pages/product-redirect-page.tsx"),
      layout("features/products/layouts/product-overview-layout.tsx", [
        route("/overview", "features/products/pages/product-overview-page.tsx"),
        ...prefix("/reviews", [
          index("features/products/pages/product-reviews-page.tsx"),
          route("/new", "features/products/pages/new-product-review-page.tsx"),
        ]),
      ]),
    ]),
  ]),
] satisfies RouteConfig;
