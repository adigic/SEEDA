import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowUp, FaStar, FaThumbsUp } from 'react-icons/fa';

export default function Card({ result}) {
  return (
    <div className='group cursor-pointer sm:m-2'>
        <Link href={`/movie/${result.id}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
        }`}
        width={500}
            height={300}
            className='group-hover:opacity-90 transition-opacity duration-300'>


        </Image>
        <div className=' bg-white p-3'>
            <h2 className='text-lg font-bold truncate'>{result.title || result.name}</h2>
            <p className='line-clamp-2 text-md'>{result.overview}</p>
            <p className='flex items-center justify-end pt-2'>
                <FaStar className='mr-1'/>
                <p className='font-bold mt-0.5'>{result.vote_average.toFixed(1)}</p>
            </p>

            
        </div>
        
        </Link>
    </div>
  )
}
