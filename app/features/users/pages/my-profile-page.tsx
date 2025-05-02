import type { Route } from './+types/my-profile-page';

export const meta: Route.MetaFunction = () => {
    return [{ title: 'My Profile | wemake' }];
};

export default function MyProfilePage() {
    return (
        <div className="container py-8">
            <h1 className="mb-6 text-2xl font-semibold">My Profile</h1>
            <div className="grid gap-6">{/* Profile content will go here */}</div>
        </div>
    );
}
