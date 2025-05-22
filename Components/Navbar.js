"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
  const [showdropdown, setshowdropdown] = useState(false)
  const { data: session } = useSession()
  return (
    <nav className='bg-[#090614] shadow-[0_0_15px_rgba(255,102,153,0.8)]
 m-3 rounded-xl h-[10vh] py-6 px-9 flex items-center justify-between text-white'>
      <div className='flex gap-3 items-center'>
        <img className='w-[50px]' src="/picsvg_download.svg" />
        <Link href={'/'}><div className='font-bold font-serif'>Seek & Offer</div></Link>
      </div>
      <div>
        {session && <> <button onClick={() => setshowdropdown(!showdropdown)} onBlur={() => setTimeout(() => {
          setshowdropdown(false)
        }, 1000)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="relative m-2 px-6 py-2.5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
          <div id="dropdownHover" className={`absolute t-0 right-[170px] z-10 ${showdropdown ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
              <li>
                <Link href={"/dashboard"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Profile</Link>
              </li>
              <li>
                <Link href="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => signOut({callbackUrl: '/login' })}>Logout</Link>
              </li>
            </ul>
          </div>
        </>
        }

        {!session && <Link href="/login"> <button type="button" className="m-2 text-black hover:font-semibold bg-gradient-to-r from-red-500 via-red-300 to-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-full text-base px-6 py-2.5 text-center me-2 mb-2">Login</button></Link>}
      </div>
    </nav>
  )
}

export default Navbar