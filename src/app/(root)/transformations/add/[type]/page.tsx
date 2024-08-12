
import Header from '@/components/shared/Header'
import React from 'react'
import TransformationForm from '@/components/shared/TransformationForm'
import { transformationTypes } from '@/constants'

import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import { getUserById } from '@/actions/user.actions'


const AddTransformationTypePage = async ({params: {type}}: SearchParamProps) => {
  const transformation = transformationTypes[type];
  const {userId} = auth()

  if(!userId) redirect('/sign-in')

  const user = await getUserById(userId)

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

    <section className='mt-10'>

      <TransformationForm 
      action='Add'
      userId={userId}
      type={transformation.type as TransformationTypeKey}
      creditBalance={user.creditBalance}
      />
      </section>
    </>
  );
}

export default AddTransformationTypePage