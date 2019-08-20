import React, { Component } from 'react';
import { Form, FormControl } from 'react-bootstrap';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

class SearchMovie extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);

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
    // history.push(`/movies/search`);
    this.props.onSearchTermChange(this.state.term);
  };

  render() {
    return (
      <div>
        <Form inline onSubmit={this.onFormSubmit}>
          <FormControl
            type="text"
            placeholder="Search Movies"
            className="mr-sm-2"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </Form>
      </div>
    );
  }
}

export default SearchMovie;
