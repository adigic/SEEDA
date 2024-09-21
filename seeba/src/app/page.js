import Results from '@/components/Results'; // Ensure this is the correct path

const API_KEY = process.env.API_KEY; // Retrieves the API key from environment variables for secure access to the API

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await res.json();
  
  if (!res.ok) { // Handle error if the fetch fails
    throw new Error('Failed fetching data');
  }

  const results = data.results;

  // Returning the component JSX properly
  return (
    <div>
      <Results results={results} />
    </div>
  );
}
