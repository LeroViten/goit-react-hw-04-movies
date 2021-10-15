import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import * as movieAPI from '../../services/apiService';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import MovieArticle from '../../components/MovieArticle/MovieArticle';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');

  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  useEffect(() => {
    getMovieData();
  }, []);

  const getMovieData = () => {
    const { movieId } = match.params;

    setStatus('pending');
    movieAPI.getMovieById(movieId).then((response) => {
      setMovie(response);
    });
    setStatus('resolved');
  };

  return (
    <>
      {status === 'pending' && (
        <Loader
          className="Loader"
          type="ThreeDots"
          color="#b00b69"
          height={100}
          width={100}
          timeout={1000}
        />
      )}
      {movie && <MovieArticle movie={movie} />}
      <hr />
      {movie && <Cast movie={movie} />}
      <hr />
      {movie && <Reviews movie={movie} />}
    </>
  );
}
