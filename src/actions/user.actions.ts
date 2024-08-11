"use server"

import User from "@/modals/user.modal"
import { connectToDatabase } from "@/app/database/mongoose"


export async function  createtUser(user: any) {
    try{
        await connectToDatabase()

        const newUser = await User.create(user)
        return JSON.parse(JSON.stringify(newUser))

    } 
    catch (error) {
        console.log(error)
    }
}