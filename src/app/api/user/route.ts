import { NextResponse } from "next/server"

export async function GET(req: Request)
{
    const user = {
        name: "john deo",
        gender:"male"
    }
    return NextResponse.json(user)
    
}