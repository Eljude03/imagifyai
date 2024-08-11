import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



export async function GET() {
    const {userId} = auth();
    const user = await currentUser()

    return NextResponse.json(
        {
            message: "Authenticated",
            data: {userId, username: user?.username}
        },
        {status: 200}
    )
}