import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const POPULAR_URL = '/trending/movie/day';
const SEARCH_URL = '/search/movie';
const ID_URL = '/movie/';

export async function getPopularMovies() {
  try {
    const { data } = await axios.get(
      `${POPULAR_URL}?api_key=${API_KEY}&page=1`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieSearch(movie, page) {
  try {
    const { data } = await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&query=${movie}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieById(id) {
  try {
    const { data } = await axios.get(`${ID_URL}${id}?api_key=${API_KEY}`);
    const result = { ...data };
    return result;
  } catch (error) {
    console.error(error);
  }
}
