import './MovieList.scss';
import errorPoster from './error.png';

export default function MovieList({ movies }) {
  return (
    <ul className="movieList">
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className="movieList__elem">
          <div className="movieCard">
            <img
              className="poster"
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300` + poster_path
                  : errorPoster
              }
              alt={title}
            />
            <div className="movieCard__details">
              <h2>{title}</h2>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
