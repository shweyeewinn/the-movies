import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import MovieSearchResult from './pages/MovieSearchResult';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies/search" component={MovieSearchResult} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
