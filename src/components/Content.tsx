import { useMovie } from '../movieContext'
import { MovieCard } from "./MovieCard"

export default function Content() {
  const { selectedGenre, movies } = useMovie()

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              props={
                {
                  title: movie.Title,
                  poster: movie.Poster,
                  runtime: movie.Runtime,
                  rating: movie.Ratings[0].Value
                }
              }
            />
          ))}
        </div>
      </main>
    </div>
  )
}
