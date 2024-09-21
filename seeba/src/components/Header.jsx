import React from 'react'
import Menu from './Menu' // Import the Menu component for navigation links
import { FaHome, FaInfoCircle } from "react-icons/fa"; // Import icons from react-icons
import Link from 'next/link'; // Import Link component from Next.js for client-side navigation

export default function Header() {
  return (

    // Wrapper for the header/navbar
    <div className='flex justify-between items-center p-3 max-w-7xl mx-auto bg-black p-5'>
        
        {/* Links - left side of the header/navbar */}
        <div className='flex gap-5'>
            <Menu title="home" address="/" Icon={FaHome}/>
            <Menu title="about" address="/about" Icon={FaInfoCircle}/>

        </div>

        {/* Logo - right side of the header/navbar */}
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold text-gray-900 bg-green-400 py-1 px-2 m-1'>SEEBA</span>
          <span className='text-xl hidden sm:inline text-white'>MOVIES</span>

        </Link>
    </div>
  )
}
