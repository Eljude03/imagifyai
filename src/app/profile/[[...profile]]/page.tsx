import { UserProfile } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const ProfilePage = async () => {
    const { userId } = auth()
    const isAuth = !!userId
    const user = await currentUser()

    if (!isAuth) {
        redirect('/')
    }
  return (
    <div className='flex justify-center flex-col items-center mt-8'>
        <h1>{user?.username}</h1>
        <UserProfile/>
    </div>
  )
}

export default ProfilePage