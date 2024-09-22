import React from 'react'
import Image from 'next/image'
import {FaStar} from 'react-icons/fa';

export default async function DetailedView({ params }) {
    const movieId = params.id;

    // Fetch movie details
    const movieRes = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    const movie = await movieRes.json();

    // Fetch cast details
    const creditsRes = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.API_KEY}`);
    const credits = await creditsRes.json();

    // Combine movie and cast data
    const combinedMovie = { ...movie, cast: credits.cast };

  return (
    <div className='w-full'>
        <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-7xl mx-auto md:space-x-7'>

        {/* Show movie poster */}
            <Image src={`https://image.tmdb.org/t/p/original/${
                combinedMovie.backdrop_path || combinedMovie.poster_path
            }`}
            width={500}
                height={300}
                className='rounded-lg '
                style={{maxWidth: '100%', height: '100%'}}>
            </Image>
        

        <div className='p-2'>

            {/* Show movie title*/}
            <h2 className='text-xl mb-3 font-bold'>{combinedMovie.title || combinedMovie.name}</h2>

            {/* Show movie description */}
            <p className='text-lg mb-3'>{combinedMovie.overview}</p>

            {/* Show release date */}
            <p className='mb-3'>
                <span className='font-semibold mr-1'>Release Date:</span>
                {combinedMovie.release_date || combinedMovie.first_air_date}</p>

            {/* Show movie genre */}
            <p className='mb-3'>
            <span className='font-semibold mr-1'>Genre:</span>
            {combinedMovie.genres.length > 0 ? combinedMovie.genres.map(genre => genre.name).join(', ') : 'N/A'}</p>


            {/* Show movie cast */}
            <p className='mb-3'>
            <span className='font-semibold mr-1'>Cast:</span>
            {combinedMovie.cast && combinedMovie.cast.length > 0 ? combinedMovie.cast.slice(0, 5).map(member => member.name).join(', ') : 'N/A'}
            </p>


            {/* Show movie ratings */}
            <p className='mb-3 flex items-center'>
            <span className='font-semibold mr-1 mt-0.5'>Ratings:</span>
            <FaStar className='mr-1'/>

                <p className='font-bold mt-0.5'>{combinedMovie.vote_average.toFixed(1)}</p>
                </p>
        </div>
        </div>

    </div>
  )
}
