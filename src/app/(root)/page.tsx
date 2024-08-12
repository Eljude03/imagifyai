"use client"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React, { useEffect } from 'react'

const Home = () => {

  // useEffect(() => {
  //   fetch('http://localhost:5000/').then(res => res.json()).then(data => console.log(data))
  // }, [])

  return (
    <div>
      <SignedIn>
        Home Page
      </SignedIn>
      <SignedOut>
        Login Page
      </SignedOut>
      </div>
  )
}

export default Home