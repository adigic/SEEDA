import Results from '@/components/Results';


export default async function Home() {

  // Fetch popular movies from TMDb
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  // Convert the response to JSON
  const data = await res.json(); 
  
  // Handle error if the fetch fails
  if (!res.ok) {
    throw new Error('Failed fetching data');
  }

  // Extract results from the data
  const results = data.results;

  // Show the Results component with the fetched movie data
  return (
    <div>
      <Results results={results} />
      
    </div>
  );
}
