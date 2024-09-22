import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {FaStar} from 'react-icons/fa';

export default function Card({ result}) {
  return (
    <div className='group cursor-pointer sm:m-3'>
        <Link href={`/movie/${result.id}`}>
        <div className="overflow-hidden sm:rounded-t-lg">
        <Image src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
        }`}
        width={500}
            height={300}
            className='group-hover:opacity-90 transition-opacity duration-100 transform group-hover:scale-105 transition-transform w-full '>

        
        </Image>
        </div>

        
        <div className=' bg-white p-3 sm:rounded-b-lg group-hover:bg-green-400 transition-bg duration-100'>
            <h2 className='text-lg font-bold truncate'>{result.title || result.name}</h2>
            <p className='line-clamp-2 text-md'>{result.overview}</p>




            <span className='flex items-center justify-end pt-2'>
                <FaStar className='mr-1'/>
                <p className='font-bold mt-0.5'>{result.vote_average.toFixed(1)}</p>
            </span>

            
        </div>
        
        
        </Link>
    </div>
  )
}
