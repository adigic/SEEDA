import React from 'react'
import Card from './Card'

// This is the Results component that receives an array of movie results as a prop, maps through each result, and renders each inside a Card component, using the movie's unique id as the key for efficient rendering.


export default function Results({results}) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-7xl mx-auto sm-py-4'>
      
      {/* Loop through each result in the results array */}
      {results.map((result) => (

        // Create a Card component for each result, using its id as a unique key
        <Card key={result.id} result={result} />
      
      ))} 
    </div>
  );
}
