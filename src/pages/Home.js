import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { searchMovie } from '../store/actions';

import SearchMovie from '../components/SearchMovie';
import MovieList from '../components/MovieList';
import Header from '../components/Header';

const propTypes = {
  onSearchMovie: PropTypes.func.isRequired
};

class Home extends Component {
  render() {
    const { movieResult, onSearchMovie } = this.props;

    return (
      <>
        <Container fluid className="p-0" bg="dark" variant="dark">
          <Row>
            <Col>
              <Header onSearchTermChange={onSearchMovie} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Container>
                <MovieList movieResult={movieResult} />
              </Container>
            </Col>
          </Row>
        </Container>
      </>
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
