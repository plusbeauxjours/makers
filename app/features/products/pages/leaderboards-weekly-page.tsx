import type { LoaderFunctionArgs, ActionFunctionArgs, MetaFunction } from "react-router";

export function loader({ request, params }: LoaderFunctionArgs) {
  const { year, week } = params;
  return { year, week };
}

export function action({ request }: ActionFunctionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Weekly Leaderboards | Wemake" },
    { name: "description", content: "View weekly product leaderboards on Wemake" },
  ];
};

export default function LeaderboardsWeeklyPage({
  loaderData,
}: {
  loaderData: { year: string; week: string };
}) {
  const { year, week } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Weekly Leaderboards - {year} Week {week}
      </h1>
      <p className="text-lg text-gray-600">
        Discover the most popular products of week {week} in {year}
      </p>
    </div>
  );
}
