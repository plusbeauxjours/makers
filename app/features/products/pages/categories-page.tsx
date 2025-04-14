import type { LoaderFunctionArgs, ActionFunctionArgs, MetaFunction } from "react-router";

export function loader({ request }: LoaderFunctionArgs) {
  return {};
}

export function action({ request }: ActionFunctionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Categories | Wemake" },
    { name: "description", content: "Browse products by category on Wemake" },
  ];
};

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Product Categories</h1>
      <p className="text-lg text-gray-600">Browse products by category</p>
    </div>
  );
}
