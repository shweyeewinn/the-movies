import React, { Component } from 'react';

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
    this.props.onSearchTermChange(this.state.term);
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchMovie;
