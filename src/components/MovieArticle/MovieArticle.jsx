import posterError from '../../components/MovieList/error.png';

export default function MovieArticle({ movie }) {
  const { title, release_date, vote_average, poster_path, overview, genres } =
    movie;
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

        <div>
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
              <b className="votes">Average Vote: {vote_average}</b>
            ) : null}
          </p>

          <p className="overview">
            <b className="label">Overview: </b>
            {overview ? <span>{overview}</span> : <span>N/A</span>}
          </p>

          <b className="label">Genres:</b>

          {genres.length > 0 ? (
            <ul className="genresList">
              {genres.map(({ id, name }) => (
                <li key={id} className="genresList__item">
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <span>N/A</span>
          )}
        </div>
      </article>
    </>
  );
}
