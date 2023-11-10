import Link from 'next/link'
import React from 'react'

const Lists = () => {
  return (
    <div className="w-full flex items-center justify-between cursor-pointer bg-white hover:bg-slate-100 p-2 sm:p-4 mb-2">
      <div className='flex'>
        <div className="flex flex-col w-10 h-10 justify-center items-center mr-1 sm:mr-4">
          <a href="#" className="block relative">
            <img alt="profil" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80" className="mx-auto object-cover rounded-full h-10 w-10" />
          </a>
        </div>
        <Link href={"/"} className=" pl-1">
          <div className="font-medium text-[15px] sm:text-[20px]">Arun gounder</div>
          <div className="text-gray-600 text-[10px] sm:text-[15px]">gounderarun2812@gmail.com</div>
        </Link>
      </div>

      <div className="text-gray-600  text-[10px] sm:text-[15px]">{new Date().toDateString()}</div>

    </div>
  )
}

export default Lists