import { Link } from 'react-router';
import { Card, CardFooter, CardHeader, CardTitle } from '~/common/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '~/common/components/ui/avatar';
import { Button } from '~/common/components/ui/button';
import { ChevronUpIcon, DotIcon } from 'lucide-react';
import { cn } from '~/lib/utils';
import { DateTime } from 'luxon';

interface PostCardProps {
    id: number;
    title: string;
    author: string;
    authorAvatarUrl: string | null;
    category: string;
    postedAt: Date;
    expanded?: boolean;
    votesCount?: number;
}

export function PostCard({
    id,
    title,
    author,
    authorAvatarUrl,
    category,
    postedAt,
    expanded = false,
    votesCount = 0
}: PostCardProps) {
    return (
        <Link to={`/community/${id}`} className="block">
            <Card
                className={cn(
                    'hover:bg-card/50 bg-transparent transition-colors',
                    expanded ? 'flex flex-row items-center justify-between' : ''
                )}
            >
                <CardHeader className="flex flex-row items-center gap-2">
                    <Avatar className="size-14">
                        <AvatarFallback>{author[0]}</AvatarFallback>
                        {authorAvatarUrl && <AvatarImage src={authorAvatarUrl} />}
                    </Avatar>
                    <div className="space-y-2">
                        <CardTitle>{title}</CardTitle>
                        <div className="text-muted-foreground flex gap-2 text-sm leading-tight">
                            <span>
                                {author} on {category}
                            </span>
                            <DotIcon className="h-4 w-4" />
                            <span>{DateTime.fromJSDate(postedAt).toRelative()}</span>
                        </div>
                    </div>
                </CardHeader>
                {!expanded && (
                    <CardFooter className="flex justify-end">
                        <Button variant="link">Reply &rarr;</Button>
                    </CardFooter>
                )}
                {expanded && (
                    <CardFooter className="flex justify-end pb-0">
                        <Button variant="outline" className="flex h-14 flex-col">
                            <ChevronUpIcon className="size-4 shrink-0" />
                            <span>{votesCount}</span>
                        </Button>
                    </CardFooter>
                )}
            </Card>
        </Link>
    );
}
