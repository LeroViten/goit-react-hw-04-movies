import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../../services/apiService';
import MovieArticle from '../../components/MovieArticle/MovieArticle';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');

  const match = useRouteMatch();
  const { path } = useRouteMatch();
  const { movieId } = match.params;

  useEffect(() => {
    getMovieData();
  }, []);

  const getMovieData = () => {
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
        />
      )}
      {movie && <MovieArticle movie={movie} />}
      <hr />
      <Switch>
        <Route exact path={`${path}/cast`}>
          {movie && <Cast />}
        </Route>
        <Route exact path={`${path}/reviews`}>
          {movie && <Reviews />}
        </Route>
      </Switch>
    </>
  );
}

MovieDetailsPage.propTypes = {
  match: PropTypes.object,
  url: PropTypes.string,
  movieId: PropTypes.string,
};
