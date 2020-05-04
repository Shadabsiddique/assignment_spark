import React, { Fragment } from 'react';
import { Row, Col, Nav } from 'reactstrap';

const Navbar = () => {
  return (
    <Fragment>
    <Row xs="1">
        <Nav className="navbar navbar-expand-sm bg-dark navbar-dark" color="light">
            <Col></Col>   
            <Col xs><a className="navbar-brand" href="#">Logo</a></Col>
            <Col></Col>
            <ul className="navbar-nav">
                <Col xs="auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                </Col>
                <Col xs="auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">My Portfolio</a>
                    </li>
                </Col>
                <Col xs="auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Clients</a>
                    </li>
                </Col>
                <Col xs="auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Get in Touch</a>
                    </li>

                </Col>
            </ul>
        </Nav>
    </Row>
    
    
    
      
      
      
      
    
  
  </Fragment>
  
    
  );
}

export default Navbar;