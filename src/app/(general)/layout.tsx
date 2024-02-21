import {childrenProps} from "@/types/ChildrenProps"

export default function GeneralLayout({ children }:childrenProps)
{
    return (
       < main className="max-w-2xl mx-auto">  
            {children}
        </main>
    )
}