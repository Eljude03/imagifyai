"use client"
import { UserButton } from '@clerk/nextjs'
import React, { useEffect } from 'react'

const Home = () => {

  // useEffect(() => {
  //   fetch('http://localhost:5000/').then(res => res.json()).then(data => console.log(data))
  // }, [])

  return (
    <div>
      <p>Home</p>
      {/* <UserButton afterSwitchSessionUrl='/'/> */}
      </div>
  )
}

export default Home