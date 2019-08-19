import React from 'react';
import { Link } from 'react-router-dom';

const renderingMovieList = movies => {
  if (movies) {
    return movies.map(movie => {
      return (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <h4>{movie.original_title}</h4>
          </Link>
          <p>{movie.overview}</p>
          <p>{movie.release_date}</p>
        </div>
      );
    });
  }
};

const MovieList = ({ movieResult }) => {
  const { results } = movieResult;
  console.log('Movies', results);
  if (movieResult) {
    return <div>{renderingMovieList(results)}</div>;
  }
};

export default MovieList;
