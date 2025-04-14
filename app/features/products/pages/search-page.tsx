import type { LoaderFunctionArgs, ActionFunctionArgs, MetaFunction } from "react-router";

export function loader({ request }: LoaderFunctionArgs) {
  return {};
}

export function action({ request }: ActionFunctionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Search Products | Wemake" },
    { name: "description", content: "Search for products on Wemake" },
  ];
};

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Search Products</h1>
      <p className="text-lg text-gray-600">Find products that match your interests</p>
    </div>
  );
}
