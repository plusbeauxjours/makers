import Hero from '~/common/components/hero';
import { Button } from '~/common/components/ui/button';
import { ProductCard } from '../components/product-card';
import { Link } from 'react-router';
import type { Route } from './+types/leaderboard-page';

export const meta: Route.MetaFunction = () => {
    return [{ title: 'leaderboard | wemake' }, { name: 'description', content: 'Top products leaderboard' }];
};

export default function LeaderboardPage() {
    return (
        <div className="space-y-20">
            <Hero title="leaderboard" subtitle="The most popular products on wemake" />
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <h2 className="text-3xl leading-tight font-bold tracking-tight">Daily Leaderboard</h2>
                    <p className="text-foreground text-xl font-light">The most popular products on wemake by day.</p>
                </div>
                {Array.from({ length: 7 }).map((_, index) => (
                    <ProductCard
                        key={`productId-${index}`}
                        id={`productId-${index}`}
                        name="Product Name"
                        description="Product Description"
                        commentsCount={12}
                        viewsCount={12}
                        votesCount={120}
                    />
                ))}
                <Button variant="link" asChild className="self-center text-lg">
                    <Link to="/products/leaderboard/daily">Explore all products &rarr;</Link>
                </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <h2 className="text-3xl leading-tight font-bold tracking-tight">Weekly Leaderboard</h2>
                    <p className="text-foreground text-xl font-light">The most popular products on wemake by week.</p>
                </div>
                {Array.from({ length: 7 }).map((_, index) => (
                    <ProductCard
                        key={`productId-${index}`}
                        id={`productId-${index}`}
                        name="Product Name"
                        description="Product Description"
                        commentsCount={12}
                        viewsCount={12}
                        votesCount={120}
                    />
                ))}
                <Button variant="link" asChild className="self-center text-lg">
                    <Link to="/products/leaderboard/weekly">Explore all products &rarr;</Link>
                </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <h2 className="text-3xl leading-tight font-bold tracking-tight">Monthly Leaderboard</h2>
                    <p className="text-foreground text-xl font-light">The most popular products on wemake by month.</p>
                </div>
                {Array.from({ length: 7 }).map((_, index) => (
                    <ProductCard
                        key={`productId-${index}`}
                        id={`productId-${index}`}
                        name="Product Name"
                        description="Product Description"
                        commentsCount={12}
                        viewsCount={12}
                        votesCount={120}
                    />
                ))}
                <Button variant="link" asChild className="self-center text-lg">
                    <Link to="/products/leaderboard/monthly">Explore all products &rarr;</Link>
                </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <h2 className="text-3xl leading-tight font-bold tracking-tight">Yearly Leaderboard</h2>
                    <p className="text-foreground text-xl font-light">The most popular products on wemake by year.</p>
                </div>
                {Array.from({ length: 7 }).map((_, index) => (
                    <ProductCard
                        key={`productId-${index}`}
                        id={`productId-${index}`}
                        name="Product Name"
                        description="Product Description"
                        commentsCount={12}
                        viewsCount={12}
                        votesCount={120}
                    />
                ))}
                <Button variant="link" asChild className="self-center text-lg">
                    <Link to="/products/leaderboard/yearly">Explore all products &rarr;</Link>
                </Button>
            </div>
        </div>
    );
}
