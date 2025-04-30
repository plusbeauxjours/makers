import type { Route } from "./+types/dashboard-ideas-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Ideas Dashboard | wemake" }];
};

export default function DashboardIdeasPage() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-semibold mb-6">Ideas Dashboard</h1>
      <div className="grid gap-6">{/* Ideas dashboard content will go here */}</div>
    </div>
  );
}
