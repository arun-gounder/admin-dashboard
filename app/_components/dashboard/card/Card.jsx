import React from 'react'
import { BiSolidBarChartAlt2 } from 'react-icons/bi'

const Card = () => {
    return (
        <div className="relative p-3 flex flex-grow flex-col items-center rounded-[10px] border-[1px] border-orange-400 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="flex flex-row items-center">
                <div className="rounded-full bg-lightPrimary dark:bg-navy-700">
                    <span className="flex items-center text-[60px] text-orange-400 dark:text-white">
                        <BiSolidBarChartAlt2 />
                    </span>
                </div>
            </div>
            <div className="flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-bold text-gray-600 p-2 text-center">Total Complaints</p>
                <h4 className="text-sm text-center font-bold text-navy-700 dark:text-white">150</h4>
            </div>
        </div>
    )
}

export default Card