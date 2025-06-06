import { Button } from '~/common/components/ui/button';
import type { Route } from './+types/login-page';
import { Form, Link } from 'react-router';
import InputPair from '~/common/components/input-pair';
import AuthButtons from '../components/auth-butotn';

export const meta: Route.MetaFunction = () => {
    return [{ title: 'Login | wemake' }];
};

export default function LoginPage() {
    return (
        <div className="relative flex h-full flex-col items-center justify-center">
            <Button variant={'ghost'} asChild className="absolute top-8 right-8">
                <Link to="/auth/join">Join</Link>
            </Button>
            <div className="flex w-full max-w-md flex-col items-center justify-center gap-10">
                <h1 className="text-2xl font-semibold">Log in to your account</h1>
                <Form className="w-full space-y-4">
                    <InputPair
                        label="Email"
                        description="Enter your email address"
                        name="email"
                        id="email"
                        required
                        type="email"
                        placeholder="i.e wemake@example.com"
                    />
                    <InputPair
                        id="password"
                        label="Password"
                        description="Enter your password"
                        name="password"
                        required
                        type="password"
                        placeholder="i.e wemake@example.com"
                    />
                    <Button className="w-full" type="submit">
                        Log in
                    </Button>
                </Form>
                <AuthButtons />
            </div>
        </div>
    );
}
