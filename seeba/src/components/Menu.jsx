import Link from 'next/link'; // Import Link component from Next.js for client-side navigation


export default function Menu({ title, address, Icon}) {
  return (

    <Link href={address} className='text-white hover:text-green-400'>
      <Icon className="text-2xl sm:hidden" />
      <p className='text-xl uppercase hidden sm:inline'> {title} </p>

    </Link>


  )
}
