import type { LoaderFunctionArgs, ActionFunctionArgs, MetaFunction } from "react-router";

export function loader({ request, params }: LoaderFunctionArgs) {
  const { query } = params;
  return { query };
}

export function action({ request }: ActionFunctionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Search Results | Wemake" },
    { name: "description", content: "View search results on Wemake" },
  ];
};

export default function SearchResultsPage({ loaderData }: { loaderData: { query: string } }) {
  const { query } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Search Results for "{query}"</h1>
      <p className="text-lg text-gray-600">Products matching your search query</p>
    </div>
  );
}
