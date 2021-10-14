import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={<Loader type="Rings" color="#b00b69" />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route exact path="/movies">
              <MoviesPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
