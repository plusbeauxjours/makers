import type { LoaderFunctionArgs, ActionFunctionArgs, MetaFunction } from "react-router";

export function loader({ request }: LoaderFunctionArgs) {
  return {};
}

export function action({ request }: ActionFunctionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Submit Product | Wemake" },
    { name: "description", content: "Submit a new product to Wemake" },
  ];
};

export default function SubmitPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Submit a Product</h1>
      <p className="text-lg text-gray-600">Share your product with the Wemake community</p>
    </div>
  );
}
