import { toast, ToastContainer, Zoom } from 'react-toastify';
// import * as movieAPI from '../../services/apiService';

export default function MoviesPage() {
  return (
    <>
      <form>
        <label>
          <input type="text" name="movie" placeholder="Enter movie..." />
        </label>
        <button type="submit">Search</button>
      </form>
      <ToastContainer transition={Zoom} autoClose={3000} />
    </>
  );
}
