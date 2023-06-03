import { getMovies } from "@/lib/mongo/movies-testing";
import './page.module.css';

async function fetchMovies() {
  const { movies } = await getMovies();
  if (!movies) throw new Error('Failed to fetch movies!');

  return movies;
}

export default async function Home() {

  const movies = await fetchMovies();

  return (
    <main>
      <div className="list-container">
        <ul className="movies-list">
          {movies.map(movie => (
            <li key={movie._id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}
