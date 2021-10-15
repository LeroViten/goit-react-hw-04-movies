import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import './MovieList.scss';
import errorPoster from './error.png';

export default function MovieList({ movies }) {
  const { url, path } = useRouteMatch();

  return (
    <>
      {movies.length === 0 && (
        <h4 style={{ marginTop: '10px' }}>
          Nothing to show! Use Search above😉
        </h4>
      )}
      <ul className="movieList">
        {movies.map(({ id, title, poster_path, release_date }) => (
          <li key={id} className="movieList__elem">
            <NavLink to={`/movies/${id}`} className="movieCardLink">
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

                  {release_date && <span> ({release_date.slice(0, 4)})</span>}
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
