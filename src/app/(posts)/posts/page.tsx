import { postTypes } from "@/types/PostTypes"
import React from "react"
import Link from "next/link"

import { Metadata } from "next"

export const metadata:Metadata = {
  title:"all post"
}
// server side incremental generation
// export const revalidate = 20;

//dynamic rendering server side
// export const dynamic = 'force-dynamic'
export default async function PostPage()
{
    //revalidation at a fetching level this ser
    // const postData = await fetch("http://localhost:3001/post", {
    //     next:{
    //         revalidate: 60 * 60 * 24
    //     }
    // })
    
    // dynamic server side rendering for per fetch 
    const postData = await fetch("http://localhost:3001/post", {
        cache:"no-cache"
    })
    const resData =(await postData.json() as [postTypes])
    console.log(resData)
    // const [value, setValue] = React.useState("")
   
    
    return (
        <div>
            <h1 className="text-2xl">All Post</h1>
            {/* <button onClick={()=> alert("click me")}>click me</button> */}
                
            <ul>
                {
                    resData.map((item, index) =>
                    {
                        return (<li key={index}>
                            <Link href={`/posts/${item.id}` }>
                                <h2>{ item.title}</h2>
                            </Link>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}
