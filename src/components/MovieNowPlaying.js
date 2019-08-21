import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNowPlayingMovies } from '../store/actions';

const propTypes = {
  onGetNowPlayingMovies: PropTypes.func.isRequired,
  movieNow: PropTypes.object.isRequired
};

class MovieNowPlaying extends Component {
  constructor(props) {
    super(props);
    console.log('Props Now Playing', props);
  }
  componentDidMount() {
    this.props.onGetNowPlayingMovies();
  }

  render() {
    const { movieNow } = this.props;
    console.log(movieNow.results);
    return <div />;
  }
}

MovieNowPlaying.propTypes = propTypes;

const mapStateToProps = state => {
  console.log('ss', state);
  return {
    movieNow: state.movieNowPlaying.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetNowPlayingMovies: term => dispatch(getNowPlayingMovies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieNowPlaying);
