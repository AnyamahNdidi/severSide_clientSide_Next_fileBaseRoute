import { postTypes } from "@/types/PostTypes"

export async function generateMetadata({params}: postPageProps)
{
    const postRes = await fetch(`http://localhost:3001/post/${params.postId}`)
    const post = (await postRes.json()) as postTypes
    
    return {
        title:post.title
    }
    
}

export const dynamic ="force-dynamic"

interface postPageProps
{
    params: {
        postId:string
    }
}

export default async function PostPageDetail({params}: postPageProps)
{
    const postRes = await fetch(`http://localhost:3001/post/${params.postId}`)
    const post =(await postRes.json() ) as postTypes
    return <main>
        <h1>{post.title}</h1>
        <div>{post.body}</div>
    </main>
}