import type { LoaderFunctionArgs, ActionFunctionArgs, MetaFunction } from "react-router";

export function loader({ request }: LoaderFunctionArgs) {
  return {};
}

export function action({ request }: ActionFunctionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboards | Wemake" },
    { name: "description", content: "View product leaderboards on Wemake" },
  ];
};

export default function LeaderboardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Product Leaderboards</h1>
      <p className="text-lg text-gray-600">
        Discover the most popular products across different time periods
      </p>
    </div>
  );
}
