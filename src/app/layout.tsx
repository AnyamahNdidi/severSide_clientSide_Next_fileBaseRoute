
import "@/style/global.css"
import {childrenProps} from "@/types/ChildrenProps"
import SearchBar from "./components/SearchBar"
import { Metadata } from "next"
import Link from "next/link"

export const metadata:Metadata = {
    title: "Next js crash course",
    description: "this is a nextjs course",
    keywords:['nextjs', 'crash course', "devistry"]
}

export default function RootLayout({children}:childrenProps)
{
    
    return (
        <html>
            <body>
                <nav>
                    <Link href="/">home</Link>
                    <Link href="/about" >about</Link>
                    <Link href="/posts">post</Link>
                   
                  <SearchBar/>
                </nav>
                {children}
            </body>
        </html>
    )
}
