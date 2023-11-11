"use client";
import Link from "next/link";
import React, { useState } from "react";
// icons
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineDown,
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { BsTriangleHalf, BsChevronDown } from "react-icons/bs";
import { HiOutlineInbox } from "react-icons/hi";
import { BsListTask } from "react-icons/bs";
import { FiUsers, FiLogOut } from "react-icons/fi";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";

const Sidebar = () => {
  const sildebarData = {
    menu: [
      { icon: <AiOutlineHome />, title: "Dashboard", path: "/dashboard" },
      { icon: <HiOutlineInbox />, title: "Form", path: "/dashboard/form" },
      { icon: <BiMessageDetail />, title: "Lists", path: "/dashboard/lists" },
      {
        icon: <IoMdNotificationsOutline />,
        title: "Notification",
        path: "notification",
      },
      { icon: <BsListTask />, title: "Available Tasks", path: "tasks" },
    ],
  };
  const moreMenuData = [
    { icon: <FiUsers />, title: "Clients", path: "clients" },
    { icon: <AiOutlineUser />, title: "Profile", path: "profile" },
    { icon: <AiOutlineSetting />, title: "Setting", path: "setting" },
    { icon: <FiLogOut />, title: "Logout", path: "logout" },
  ];

  const [isCollapse, setIsCollapse] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  // const arrowStyles = isOpen ? "transform rotate-180" : "transform rotate-0";

  //   console.log(isCollapse);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`lg:w-64 sticky h-screen flex flex-col top-0 left-0 ${
        isCollapse ? "w-14" : "w-64"
      } transition-all ease-in-out delay-200 bg-white h-full border-r`}
    >
      <button
        onClick={() => setIsCollapse(!isCollapse)}
        className="lg:hidden absolute right-[15px] top-[50px] bg-orange-400 text-white rounded-full p-1"
      >
        {isCollapse ? <FaAngleRight /> : <FaAngleLeft />}
      </button>
      <div className="flex items-center justify-center h-16 border-b text-orange-400 text-[25px]">
        <div>
          <BsTriangleHalf />
        </div>
      </div>
      <div className="overflow-y-auto overflow-x-hidden flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          {sildebarData.menu.map((list) => {
            return (
              <li key={list.title}>
                <Link
                  href={list.path}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-orange-400 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4 text-[20px]">
                    {list.icon}
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    {list.title}
                  </span>
                </Link>
              </li>
            );
          })}

          <li className="relative flex flex-col justify-center py-2 pl-4 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-orange-400 pr-6">
            <a
              className={`${
                isCollapse ? "block" : "flex items-center justify-between"
              } lg:flex justify-between cursor-pointer `}
              onClick={toggleAccordion}
            >
              <div className={`${isCollapse ? "hidden" : "flex"} lg:flex`}>
                <span className="text-[20px]">
                  <CiCircleMore />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  More Options
                </span>
              </div>
              <FaAngleDown
                className={`text-[20px] transition ${
                  isOpen ? "transform rotate-180" : "transform rotate-0"
                }`}
              />
            </a>

            {isOpen && (
              <ul className={`${isCollapse ? "ml-0" : "ml-4"} lg:ml-4`}>
                {moreMenuData.map((list) => {
                  return (
                    <li key={list.title}>
                      <Link
                        href={list.path}
                        className={`relative flex items-center h-9 pt-4 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-transparent pr-6 `}
                      >
                        <span className="inline-flex justify-center items-center text-[20px]">
                          {list.icon}
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          {list.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
