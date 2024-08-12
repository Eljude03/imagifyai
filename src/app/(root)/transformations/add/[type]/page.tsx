import Header from '@/components/shared/Header'
import React from 'react'
import TransformationForm from '@/components/shared/TransformationForm'
import { transformationTypes } from '@/constants'

import { getUserById } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'


const AddTransformationTypePage = async ({params: {type}}: SearchParamProps) => {
  const transformation = transformationTypes[type];
  // const {userId} = auth()

  // if(!userId) redirect('/sign-in')

  // const user = await getUserById(userId)

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      {/* <TransformationForm 
      action='Add'
      userId={userId}
      type={transformation.type as TransformationTypeKey}
      creditBalance={user.creditBalance}
      /> */}
    </>
  );
}

export default AddTransformationTypePage