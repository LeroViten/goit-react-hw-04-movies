import './MovieList.scss';

export default function MovieList({ movies }) {
  return (
    <ul className="movieList">
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className="movieList__elem">
          <div className="movieCard">
            <img
              className="poster"
              src={'https://image.tmdb.org/t/p/w300' + poster_path}
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
