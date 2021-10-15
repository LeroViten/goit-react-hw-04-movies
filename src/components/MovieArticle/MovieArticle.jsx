import posterError from '../../components/MovieList/error.png';
import BackButton from '../BackButton/BackButton';
import { ReactComponent as BackIcon } from '../BackButton/backArrow.svg';
import './MovieArticle.scss';
import { Link, Route, useRouteMatch } from 'react-router-dom';

export default function MovieArticle({ movie }) {
  const {
    title,
    id,
    release_date,
    vote_average,
    poster_path,
    overview,
    genres,
  } = movie;
  const { url, path } = useRouteMatch();
  // console.log(url);
  // console.log(path);
  const properPosterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : posterError;

  return (
    <>
      <article className="movieArticle">
        <div className="posterThumb">
          <img
            src={properPosterUrl}
            alt={title}
            title={title}
            className="poster"
          />
        </div>

        <div className="infoThumb">
          {title && (
            <h1 className="movieTitle">
              {title}{' '}
              {release_date ? (
                <span>({release_date.substring(0, 4)})</span>
              ) : (
                <span>(N/A)</span>
              )}
            </h1>
          )}

          <p className="score">
            {vote_average ? (
              <b className="votes">Average Vote: {vote_average} ⭐</b>
            ) : null}
          </p>

          <p className="overview">
            <b className="label">Overview: 📝</b>
            <br />
            {overview ? <span>{overview}</span> : <span>N/A</span>}
          </p>

          <b className="label">Genres:</b>

          {genres.length > 0 ? (
            <ul className="genresList">
              {genres.map(({ id, name }) => (
                <li key={id} className="genresList__item">
                  <span>🎥 {name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <span>N/A</span>
          )}
        </div>
        <BackButton>
          <BackIcon width="30" height="30" fill="black" />
        </BackButton>
      </article>
      <div className="additionalInfoThumb">
        <p className="additionalText">Additional Information for the movie:</p>
        <div className="addOnsLinks">
          <Link to={`${url}/cast`} className="showAddonLink">
            Cast
          </Link>
          <Link to={`${url}/reviews`} className="showAddonLink">
            Reviews
          </Link>
        </div>
      </div>
    </>
  );
}
