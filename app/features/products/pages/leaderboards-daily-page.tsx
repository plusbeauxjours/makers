import type { LoaderFunctionArgs, ActionFunctionArgs, MetaFunction } from "react-router";

export function loader({ request, params }: LoaderFunctionArgs) {
  const { year, month, day } = params;
  return { year, month, day };
}

export function action({ request }: ActionFunctionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Daily Leaderboards | Wemake" },
    { name: "description", content: "View daily product leaderboards on Wemake" },
  ];
};

export default function LeaderboardsDailyPage({
  loaderData,
}: {
  loaderData: { year: string; month: string; day: string };
}) {
  const { year, month, day } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Daily Leaderboards - {year}/{month}/{day}
      </h1>
      <p className="text-lg text-gray-600">
        Discover the most popular products of {month}/{day}/{year}
      </p>
    </div>
  );
}
