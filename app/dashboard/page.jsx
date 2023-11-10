import React from 'react'
import Card from '../_components/dashboard/card/Card'
import Lists from '../_components/dashboard/lists/Lists'

const page = () => {
  return (
    <>
      <div className='p-5'>
        <div className='flex gap-2 md:gap-5 sm:gap-10 flex-col sm:flex-row mb-5'>
          <Card />
          <Card />
          <Card />
        </div>
        Lists
        <Lists />
        <Lists />
        <Lists />
        <Lists />
        <Lists />
      </div>
    </>
  )
}

export default page