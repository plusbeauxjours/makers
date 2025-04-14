import type { LoaderFunctionArgs, ActionFunctionArgs, MetaFunction } from "react-router";

export function loader({ request }: LoaderFunctionArgs) {
  return {};
}

export function action({ request }: ActionFunctionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Promote Product | Wemake" },
    { name: "description", content: "Promote your product on Wemake" },
  ];
};

export default function PromotePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Promote a Product</h1>
      <p className="text-lg text-gray-600">Increase visibility for your product on Wemake</p>
    </div>
  );
}
