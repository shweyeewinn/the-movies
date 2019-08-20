import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { CardColumns, Card } from 'react-bootstrap';

const renderGenreList = genres => {
  return genres.map(genre => {
    return <span key={genre}>{genre}, </span>;
  });
};

const renderingMovieList = movies => {
  if (movies) {
    return movies.map(movie => {
      return (
        <Card key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
          </Link>
          <Card.Body>
            <Card.Title>{movie.original_title}</Card.Title>
            <Card.Text>
              {movie.release_date}, {renderGenreList(movie.genre_ids)}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });
  }
};

const MovieList = ({ movieResult }) => {
  const { results } = movieResult;
  console.log('Movies', results);
  if (movieResult) {
    return <CardColumns>{renderingMovieList(results)}</CardColumns>;
  }
};

export default MovieList;
