import client from 'supa-client';

export const getTopics = async () => {
    const { data, error } = await client.from('topics').select('name, slug');
    if (error) throw new Error(error.message);
    return data;
};

export const getPosts = async () => {
    const { data, error } = await client.from('posts').select(`
        post_id,
        title,
        created_at,
        topic:topics!inner (
            name
        ),
        author:profiles!posts_profile_id_profiles_profile_id_fk!inner (
            name,
            username,
            avatar
        ),
        upvotes:post_upvotes (
            count
        ),
        upvote:post_upvotes(
            count
        )
    `);
    if (error) throw new Error(error.message);
    return data;
};
