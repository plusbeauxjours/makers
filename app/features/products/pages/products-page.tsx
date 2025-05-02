import { type LoaderFunctionArgs, type ActionFunctionArgs, type MetaFunction, redirect } from 'react-router';

export function loader() {
    return redirect('/products/leaderboard');
}

export function action({ request }: ActionFunctionArgs) {
    return {};
}

export const meta: MetaFunction = () => {
    return [{ title: 'Products | Wemake' }, { name: 'description', content: 'Discover amazing products on Wemake' }];
};

export default function ProductsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-4xl font-bold">Products</h1>
            <p className="text-lg text-gray-600">Discover amazing products from our community</p>
        </div>
    );
}
