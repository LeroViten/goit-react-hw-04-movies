import './BackButton.scss';

export default function BackButton({ children }) {
  return (
    <button type="button" className="backButton">
      {children} Back
    </button>
  );
}
