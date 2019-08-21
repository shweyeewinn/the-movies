import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { searchMovie } from '../store/actions';

const propTypes = {
  onSearchMovie: PropTypes.func.isRequired
};

class SearchMovie extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    console.log('Props', props);
    this.state = {
      term: 'avengers'
    };
  }

  onInputChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchMovie(this.state.term);
    this.props.history.push(`/movies/search`);
  };

  render() {
    return (
      <>
        <Form inline onSubmit={this.onFormSubmit}>
          <FormControl
            type="text"
            placeholder="Search Movies"
            className=" mr-sm-2"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <Button type="submit" onClick={this.onFormSubmit}>
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

SearchMovie.propTypes = propTypes;

const mapDispatchToProps = dispatch => {
  return {
    onSearchMovie: term => dispatch(searchMovie(term))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchMovie);
