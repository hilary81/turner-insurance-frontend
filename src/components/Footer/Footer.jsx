import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Cars from "./Cars";
import AboutUs from "./AboutUs";
import FinanceInsurance from "./FinanceInsurance";
import SearchFor from "./SearchFor";

import './footer.css';

const Footer = () => {
  return (
  
    <footer className="footer">
      <Container>
        <Row>
      
          <Col lg='3' md ='4' sm='6'>
            <div className='mb-4'>
              <h5 className='footer_link-title mb-4'>CARS</h5>
              <ListGroup>
                {Cars.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
        
          <Col lg='3' md ='4' sm='6'>
            <div className='mb-4'>
               <h5 className='footer_link-title mb-4'>FINANCE & INSURANCE</h5>
               <ListGroup>
                {FinanceInsurance.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md ='4' sm='6'>
            <div className='mb-4'>
               <h5 className='footer_link-title mb-4'>SEARCH FOR</h5>
               <ListGroup>
                {SearchFor.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md ='4' sm='6'>
            <div className='mb-4'>
               <h5 className='footer_link-title mb-4'>ABOUT US</h5>
               <ListGroup>
                {AboutUs.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
              
        </Row>
       </Container>
     </footer>
    
    )
}

export default Footer
