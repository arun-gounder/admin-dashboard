import Lists from '@/app/_components/dashboard/lists/Lists'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='px-4'>Lists Page</div>
      <ul className="mt-5 w-[80%] gap-3 flex flex-col justify-center items-center">
        <Lists />
        <Lists />
        <Lists />
        <Lists />
        <Lists />
        <Lists />
      </ul>
    </>
  )
}

export default page