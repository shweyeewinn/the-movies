import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardColumns, Card } from 'react-bootstrap';
import Layout from '../components/Layout';

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

const MovieSearchResult = ({ movieResult }) => {
  const { results } = movieResult;
  console.log('Movies', results);
  if (movieResult) {
    return (
      <>
        <Layout>
          <h1>Movie Search results</h1>
          <CardColumns>{renderingMovieList(results)}</CardColumns>
        </Layout>
      </>
    );
  }
};

const mapStateToProps = state => {
  console.log('HHH', state);
  return {
    movieResult: state.movieResult.data
  };
};

export default connect(
  mapStateToProps,
  null
)(MovieSearchResult);
