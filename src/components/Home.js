import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Navbar from './Navbar';
import View1 from './View1';
import View2 from './View2';
import './home.css';


class Home extends React.Component {
  render () {
    return (
      <Fragment>
          <Row xs="1"><Navbar/></Row>
          <Row xs="2" className="home">
              <Col> <View1/></Col>
              <Col> <View2/></Col>
          </Row>
  
      </Fragment>
      
    );
  }
}

export default Home;

