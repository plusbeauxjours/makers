import { DotIcon, HeartIcon } from 'lucide-react';
import { EyeIcon } from 'lucide-react';
import Hero from '~/common/components/hero';
import { Button } from '~/common/components/ui/button';
import type { Route } from './+types/idea-page';
import { getGptIdea } from '../queries';
import { DateTime } from 'luxon';

export const meta = ({
    data: {
        idea: { gpt_idea_id, idea }
    }
}: Route.MetaArgs) => {
    return [
        { title: `Idea #${gpt_idea_id}: ${idea} | wemake` },
        ,
        { name: 'description', content: 'Find ideas for your next project' }
    ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
    const idea = await getGptIdea(params.ideaId);
    return { idea };
};

export default function IdeaPage({ loaderData }: Route.ComponentProps) {
    return (
        <div className="">
            <Hero title={`Idea #${loaderData.idea.gpt_idea_id}`} />
            <div className="mx-auto flex max-w-screen-sm flex-col items-center gap-10">
                <p className="text-center italic">"{loaderData.idea.idea}"</p>
                <div className="flex items-center text-sm">
                    <div className="flex items-center gap-1">
                        <EyeIcon className="h-4 w-4" />
                        <span>{loaderData.idea.views}</span>
                    </div>
                    <DotIcon className="h-4 w-4" />
                    <span>{DateTime.fromISO(loaderData.idea.created_at).toRelative()}</span>
                    <DotIcon className="h-4 w-4" />
                    <Button variant="outline">
                        <HeartIcon className="h-4 w-4" />
                        <span>{loaderData.idea.likes}</span>
                    </Button>
                </div>
                <Button size="lg">Claim idea now &rarr;</Button>
            </div>
        </div>
    );
}
