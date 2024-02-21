import {childrenProps} from "@/types/ChildrenProps"
export default function PostLayout({children}:childrenProps)
{
    return (
        <main className="p-4 bg-blue-950 min-h-screen">
            <div className="m-4 p-4 bg-white rounded-xl">
                  {children}
            </div>
          
        </main>
    )
}