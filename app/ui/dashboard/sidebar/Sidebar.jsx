"use client"
import Link from 'next/link'
import React, { useState } from 'react'
// icons 
import { AiOutlineHome, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiMessageDetail } from 'react-icons/bi'
import { BsTriangleHalf, BsChevronDown } from 'react-icons/bs'
import { HiOutlineInbox } from 'react-icons/hi'
import { BsListTask } from 'react-icons/bs'
import { FiUsers, FiLogOut } from 'react-icons/fi'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Sidebar = () => {

    const sildebarData = {
        menu: [
            { icon: <AiOutlineHome />, title: "Dashboard", path: "/dashboard" },
            { icon: <HiOutlineInbox />, title: "Form", path: "/dashboard/form" },
            { icon: <BiMessageDetail />, title: "Lists", path: "/dashboard/lists" },
            { icon: <IoMdNotificationsOutline />, title: "Notification", path: "notification" },
            { icon: <BsListTask />, title: "Available Tasks", path: "tasks" },
            { icon: <FiUsers />, title: "Clients", path: "clients" },
            { icon: <AiOutlineUser />, title: "Profile", path: "title" },
            { icon: <AiOutlineSetting />, title: "Setting", path: "setting" },
            { icon: <FiLogOut />, title: "Logout", path: "logout" }
        ]
    }

    const [isCollapse, setIsCollapse] = useState(true);
    console.log(isCollapse);
    return (
        <div className={`lg:w-64 sticky h-screen flex flex-col top-0 left-0 ${isCollapse ? "w-14" : "w-64"} transition-all ease-in-out delay-200 bg-white h-full border-r`}>
            <button onClick={() => setIsCollapse(!isCollapse)} className='lg:hidden absolute right-[15px] top-[50px] bg-orange-400 text-white rounded-full p-1'>
                {isCollapse ? <FaAngleRight /> : <FaAngleLeft />}
            </button>
            <div className="flex items-center justify-center h-16 border-b text-orange-400 text-[25px]">
                <div><BsTriangleHalf /></div>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                    {sildebarData.menu.map(list => {
                        return <li key={list.title}>
                            <Link href={list.path} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-orange-400 pr-6">
                                <span className="inline-flex justify-center items-center ml-4 text-[20px]">
                                    {list.icon}
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">{list.title}</span>
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar