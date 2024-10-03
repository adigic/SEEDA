import React from 'react'
import Menu from './Menu' // Import the Menu component for navigation links
import { FaHome, FaInfoCircle } from "react-icons/fa"; // Import icons from react-icons
import Link from 'next/link'; // Import Link component from Next.js for client-side navigation

export default function Header() {
  return (

    // Wrapper for the header/navbar
    <div className='flex justify-between items-center mx-auto bg-black p-5 max-w-7xl xl:rounded-b-lg'>
        
        {/* Links - left side of the header/navbar */}
        <div className='flex gap-5'>
            <Menu title="home" address="/" Icon={FaHome}/>
            <Menu title="about" address="/about" Icon={FaInfoCircle}/>

        </div>

        {/* Logo - right side of the header/navbar */}
        <Link href={'/'} className='flex gap-1 items-center justify-center sm:justify-center'>
          <span className='text-2xl font-bold text-black bg-green-400 py-1 px-2 m-1'>SEEDA</span>
          <span className='text-xl text-white'>MOVIES</span>
        </Link>
    </div>
  )
}
