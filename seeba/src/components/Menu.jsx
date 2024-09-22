import Link from 'next/link'; 


export default function Menu({ title, address, Icon}) {
  return (

    <Link href={address} className='text-white hover:text-green-400'>
      <Icon 
      className="text-3xl sm:hidden" />
      <p className='text-xl uppercase hidden sm:inline'> {title} </p>

    </Link>


  )
}
