import type { Route } from './+types/dashboard-product-page';

export const meta: Route.MetaFunction = () => {
    return [{ title: 'Product Dashboard | wemake' }];
};

export default function DashboardProductPage() {
    return (
        <div className="container py-8">
            <h1 className="mb-6 text-2xl font-semibold">Product Dashboard</h1>
            <div className="grid gap-6">{/* Product dashboard content will go here */}</div>
        </div>
    );
}
