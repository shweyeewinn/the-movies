import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../store/actions';
import PropTypes from 'prop-types';

const propTypes = {
  ongetMovieDetail: PropTypes.func.isRequired
};

class MovieDetail extends Component {
  componentDidMount() {
    const { ongetMovieDetail, match } = this.props;
    ongetMovieDetail(match.params.id);
  }

  render() {
    const { movieDetail } = this.props;

    return (
      <div>
        <h1>{movieDetail.title}</h1>
        <p>{movieDetail.tagline}</p>
        <div>{movieDetail.overview}</div>
      </div>
    );
  }
}

MovieDetail.propTypes = propTypes;

const mapStateToProps = state => {
  console.log(state);
  return {
    movieDetail: state.movieDetail.data
  };
};

const mapStateToDispatch = dispatch => {
  return {
    ongetMovieDetail: id => dispatch(getMovieDetail(id))
  };
};
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(MovieDetail);
