import { useHistory, useLocation } from 'react-router';
import './BackButton.scss';

export default function BackButton({ children }) {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  const handleGoBackClick = () => {
    history.push(location?.state?.from ?? '/movies');
  };

  return (
    <button type="button" className="backButton" onClick={handleGoBackClick}>
      {children} Go Back
    </button>
  );
}
