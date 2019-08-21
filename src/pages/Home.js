import React, { Component } from 'react';
import Layout from '../components/Layout';
import SearchMovie from '../components/SearchMovie';
import Banner from '../components/Banner';
import { Row, Col } from 'react-bootstrap';
import MovieNowPlaying from '../components/MovieNowPlaying';

class Home extends Component {
  render() {
    return (
      <Layout>
        <Row>
          <Col>
            <Banner />
          </Col>
        </Row>
        <Row style={{ marginTop: '50px' }}>
          <SearchMovie {...this.props} />
        </Row>
        <Row>
          <MovieNowPlaying />
        </Row>
      </Layout>
    );
  }
}

export default Home;
