import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';

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
            <Route path="/movies">
              <MoviesPage />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
