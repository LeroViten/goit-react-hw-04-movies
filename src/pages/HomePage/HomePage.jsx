import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import * as movieAPI from '../../services/apiService';
import MovieList from '../../components/MovieList/MovieList';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './HomePage.scss';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = () => {
    setStatus('pending');

    movieAPI.getPopularMovies(page).then((response) => {
      const data = response.results;
      setMovies((prev) => [...prev, ...data]);
    });
    setPage((prev) => prev + 1);

    if (page !== 1) {
      handlePageScroll();
    }
    setStatus('resolved');
  };

  const loadMoreHandler = () => {
    getTrending();
  };

  const handlePageScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const showLoadMore = movies.length > 0 && movies.length >= 19;

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
      {movies ? (
        <MovieList movies={movies} url={'movies'} location={'/'} />
      ) : (
        <h2>Error getting trending movies 😟</h2>
      )}
      {showLoadMore && <LoadMoreButton onLoadMore={loadMoreHandler} />}
    </>
  );
}
