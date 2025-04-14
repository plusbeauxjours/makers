import type { LoaderFunctionArgs, ActionFunctionArgs, MetaFunction } from "react-router";

export function loader({ request, params }: LoaderFunctionArgs) {
  const { year } = params;
  return { year };
}

export function action({ request }: ActionFunctionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Yearly Leaderboards | Wemake" },
    { name: "description", content: "View yearly product leaderboards on Wemake" },
  ];
};

export default function LeaderboardsYearlyPage({ loaderData }: { loaderData: { year: string } }) {
  const { year } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Yearly Leaderboards - {year}</h1>
      <p className="text-lg text-gray-600">Discover the most popular products of {year}</p>
    </div>
  );
}
