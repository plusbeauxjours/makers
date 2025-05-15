import Hero from '~/common/components/hero';
import type { Route } from './+types/community-page';
import { Await, Form, Link, useSearchParams } from 'react-router';
import { Button } from '~/common/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from '~/common/components/ui/dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';
import { PERIOD_OPTIONS, SORT_OPTIONS } from '../constants';
import { Input } from '~/common/components/ui/input';
import { PostCard } from '../components/post-card';
import { getPosts, getTopics } from '../queries_supabase';
import { Suspense } from 'react';
export const meta: Route.MetaFunction = () => {
    return [{ title: 'Community | wemake' }];
};

export const loader = async () => {
    // const topics = await getTopics();
    // const posts = await getPosts();
    // const [topics, posts] = await Promise.all([getTopics(), getPosts()]);
    const topics = getTopics();
    const posts = getPosts();
    return { topics, posts };
};

export default function CommunityPage({ loaderData }: Route.ComponentProps) {
    const { topics, posts } = loaderData;
    const [searchParams, setSearchParams] = useSearchParams();
    const sorting = searchParams.get('sorting') || 'newest';
    const period = searchParams.get('period') || 'all';
    return (
        <div className="space-y-20">
            <Hero title="Community" subtitle="Ask questions, share ideas, and connect with other developers" />
            <div className="grid grid-cols-6 items-start gap-40">
                <div className="col-span-4 space-y-10">
                    <div className="flex justify-between">
                        <div className="w-full space-y-5">
                            <div className="flex items-center gap-5">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center gap-1">
                                        <span className="text-sm capitalize">{sorting}</span>
                                        <ChevronDownIcon className="size-5" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        {SORT_OPTIONS.map((option) => (
                                            <DropdownMenuCheckboxItem
                                                className="cursor-pointer capitalize"
                                                key={option}
                                                onCheckedChange={(checked: boolean) => {
                                                    if (checked) {
                                                        searchParams.set('sorting', option);
                                                        setSearchParams(searchParams);
                                                    }
                                                }}
                                            >
                                                {option}
                                            </DropdownMenuCheckboxItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                {sorting === 'popular' && (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="flex items-center gap-1">
                                            <span className="text-sm capitalize">{period}</span>
                                            <ChevronDownIcon className="size-5" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {PERIOD_OPTIONS.map((option) => (
                                                <DropdownMenuCheckboxItem
                                                    className="cursor-pointer capitalize"
                                                    key={option}
                                                    onCheckedChange={(checked: boolean) => {
                                                        if (checked) {
                                                            searchParams.set('period', option);
                                                            setSearchParams(searchParams);
                                                        }
                                                    }}
                                                >
                                                    {option}
                                                </DropdownMenuCheckboxItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                )}
                            </div>
                            <Form className="w-2/3">
                                <Input type="text" name="search" placeholder="Search for discussions" />
                            </Form>
                        </div>
                        <Button asChild>
                            <Link to={`/community/submit`}>Create Discussion</Link>
                        </Button>
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Await resolve={posts}>
                            {(data) => (
                                <div className="space-y-5">
                                    {data.map((post) => (
                                        <PostCard
                                            key={post.post_id}
                                            id={post.post_id}
                                            title={post.title}
                                            author={post.author}
                                            authorAvatarUrl={post.author_avatar}
                                            category={post.topic}
                                            postedAt={post.created_at}
                                            votesCount={post.upvotes}
                                            expanded
                                        />
                                    ))}
                                </div>
                            )}
                        </Await>
                    </Suspense>
                </div>
                <aside className="col-span-2 space-y-5">
                    <span className="text-muted-foreground text-sm font-bold uppercase">Topics</span>
                    <Suspense fallback={<div>Loading topics...</div>}>
                        <Await resolve={topics}>
                            {(topicsData) => (
                                <div className="flex flex-col items-start gap-2">
                                    {topicsData.map((topic) => (
                                        <Button asChild variant={'link'} key={topic.slug} className="pl-0">
                                            <Link to={`/community?topic=${topic.slug}`}>{topic.name}</Link>
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </Await>
                    </Suspense>
                </aside>
            </div>
        </div>
    );
}
