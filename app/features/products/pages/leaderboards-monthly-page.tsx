import type { LoaderFunctionArgs, ActionFunctionArgs, MetaFunction } from "react-router";

export function loader({ request, params }: LoaderFunctionArgs) {
  const { year, month } = params;
  return { year, month };
}

export function action({ request }: ActionFunctionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Monthly Leaderboards | Wemake" },
    { name: "description", content: "View monthly product leaderboards on Wemake" },
  ];
};

export default function LeaderboardsMonthlyPage({
  loaderData,
}: {
  loaderData: { year: string; month: string };
}) {
  const { year, month } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Monthly Leaderboards - {year}/{month}
      </h1>
      <p className="text-lg text-gray-600">
        Discover the most popular products of {month}/{year}
      </p>
    </div>
  );
}
