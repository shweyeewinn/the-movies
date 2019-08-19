import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { searchMovie } from '../store/actions';

import SearchMovie from '../components/SearchMovie';
import MovieList from '../components/MovieList';

const propTypes = {
  onSearchMovie: PropTypes.func.isRequired
};

class Home extends Component {
  render() {
    const { movieResult, onSearchMovie } = this.props;

    return (
      <div>
        <div>
          <h1>
            <Link to="/">Home</Link>
          </h1>
        </div>

        <div>
          <SearchMovie onSearchTermChange={onSearchMovie} />
          <MovieList movieResult={movieResult} />
        </div>
      </div>
    );
  }
}

Home.propTypes = propTypes;

const mapStateToProps = state => {
  console.log('HHH', state);
  return {
    movieResult: state.movieResult.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSearchMovie: term => dispatch(searchMovie(term))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
