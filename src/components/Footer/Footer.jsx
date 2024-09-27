import React from 'react';
import './footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logochess.jpeg';



const quick_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
];

const quick_links2 = [
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
];


const Footer = () => {

  const year = new Date().getFullYear();
  
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                assumenda dignissimos cupiditate nihil?</p>

              <div className="social__links d-flex items-center gap-4">
                <span>
                  <Link to="#">
                    <i className='icon ri-youtube-line'></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i className='icon ri-github-fill'></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i className='icon ri-facebook-circle-line'></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i className='icon ri-instagram-line'></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className="footer__links-title">Discovery</h5>

            <ListGroup className='footer__quick-links'>
              {quick_links.map((link, index) => {
                return <ListGroupItem key={index} className='ps-0 border-0 list-items'>
                  <Link to={link.path}>{link.display}</Link>
                </ListGroupItem>

              })}
            </ListGroup>
          </Col>

          <Col lg='3'>
            <h5 className="footer__links-title">Quick links</h5>

            <ListGroup className='footer__quick-links'>
              {quick_links2.map((link, index) =>
                <ListGroupItem key={index} className='ps-0 border-0 list-items'>
                  <Link to={link.path}>{link.display}</Link>
                </ListGroupItem>

              )}
            </ListGroup>
          </Col>

          <Col lg='3'>
            <h5 className="footer__links-title">Contact</h5>

            <ListGroup className='footer__quick-links'>

              <ListGroupItem className='ps-0 border-0 list-items d-flex items-center gap-3'>
                <h6 className=' mb-0 d-flex items-center gap-2'>
                  <span>
                    <i className="icon ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className='mb-0'>Hanoi,Vietnam</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 list-items d-flex items-center gap-3'>
                <h6 className=' mb-0 d-flex items-center gap-2'>
                  <span>
                    <i className="icon ri-mail-line"></i>
                  </span>
                  Email:
                </h6>

                <p className='mb-0'>buohuy0201@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 list-items d-flex items-center gap-3'>
                <h6 className=' mb-0 d-flex items-center gap-2'>
                  <span>
                  <i className="icon ri-phone-line"></i>
                  </span>
                  Phone:
                </h6>

                <p className='mb-0'>+84395357986</p>
              </ListGroupItem>


            </ListGroup>
          </Col>

          <Col lg='12' className='text-center pt-5'>
            <p className="copyight">
            &copy; {year} Chess House, design and develop by Theanh28 & Huybq, Inc.
              All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;