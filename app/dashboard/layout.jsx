import React from 'react'
import Sidebar from '../_components/dashboard/sidebar/Sidebar'
import Navbar from '../_components/dashboard/navbar/Navbar'

const layout = ({ children }) => {
  return (
    <div className='flex w-full'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default layout