import Link from 'next/link'; 


export default function Menu({ title, address, Icon}) {
  return (

    // Navigation link
    <Link href={address} className='text-white hover:text-green-400'> 

      {/* Icon displayed only on small screens */}
      <Icon className="text-3xl sm:hidden" /> 

      {/* Title (e.g., Home, About) displayed only on larger screens */}
      <p className='text-xl uppercase hidden sm:inline'> {title} </p> 

    </Link>


  )
}
