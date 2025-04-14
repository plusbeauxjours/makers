import type { LoaderFunctionArgs, ActionFunctionArgs, MetaFunction } from "react-router";

export function loader({ request, params }: LoaderFunctionArgs) {
  const { category } = params;
  return { category };
}

export function action({ request }: ActionFunctionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Category | Wemake" },
    { name: "description", content: "Browse products in this category on Wemake" },
  ];
};

export default function CategoryPage({ loaderData }: { loaderData: { category: string } }) {
  const { category } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Category: {category}</h1>
      <p className="text-lg text-gray-600">Browse products in the {category} category</p>
    </div>
  );
}
