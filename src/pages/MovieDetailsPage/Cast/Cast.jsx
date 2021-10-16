import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as movieAPI from '../../../services/apiService';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Cast.scss';
import errorPoster from '../../../components/MovieList/error.png';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState('idle');

  const { movieId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setStatus('pending');
    movieAPI.fetchCast(movieId).then((response) => {
      setActors(response.cast);
    });
    setStatus('resolved');
    handlePageScroll();
  };

  const handlePageScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
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

      {actors.length === 0 && (
        <h3 style={{ textAlign: 'center' }}>No Cast found for that movie</h3>
      )}
      {actors && (
        <div className="castThumb">
          <ul className="castList">
            {actors.map(({ id, name, profile_path }) => (
              <li key={id} className="castList__item">
                <img
                  className="actorProfilePic"
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300` + profile_path
                      : errorPoster
                  }
                  alt={name}
                />
                <span className="actorName">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};
