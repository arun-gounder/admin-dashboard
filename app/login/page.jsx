import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='p-4 flex flex-col'>
            <Link href="/dashboard" className='hover:underline'>Admin Dasboard</Link>
            <Link href="/dashboard" className='hover:underline'>Venue Owner Dasboard</Link>
            <Link href="/dashboard" className='hover:underline'>Venu Partner Dasboard</Link>
            <Link href="/dashboard" className='hover:underline'>Center Owner Dasboard</Link>
        </div>
    )
}

export default page