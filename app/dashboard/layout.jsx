import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'
import Navbar from '../ui/dashboard/navbar/Navbar'

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