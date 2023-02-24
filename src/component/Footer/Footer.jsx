import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/footer.css';


const quickLinks = [
  {
    path: '/rent-car/about',
    display: 'About'
  },
  {
    path: '#',
    display: 'Privacy Policy'
  },
  {
    path: '/rent-car/cars',
    display: 'Car Listing'
  },
  {
    path: '/rent-car/blogs',
    display: 'Blog'
  },
  {
    path: '/rent-car/contact',
    display: 'Contact'
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='4' md='4' sm='12'>
          <div className="logo footer__logo">
            <h1>
              <Link  to='/rent-car/home' className=' d-flex align-items-center justify-content-start gap-3'>
                <i className="ri-car-line"></i>
                <span>
                  Rent Car <br/>Service
                </span>
              </Link>
            </h1>
          </div>
          <p className="footer__logo-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum dolor expedita ducimus, aliquam, aut optio sequi minus laudantium explicabo aliquid ut, quibusdam molestias voluptatum sint cupiditate adipisci quisquam temporibus debitis?
          </p>
        </Col>

        <Col lg='2' md='4' sm='6'>
          <div className="mb-4">
            <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup>
              {
                quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className='p-0 mt-3 quick__Link'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <div className="mb-4">
          <h5 className='footer__link-title mb-4'>Head Office</h5>
          <p className='office__info'>123 Zindabazar, Sylhet, Bangladesh</p>
          <p className='office__info'>Phone: +0995345875365</p>
          <p className='office__info'>Email: muhib5532@gmail.com</p>
          <p className='office__info'>Office Time: 10am - 7pmm</p>
        </div>
        </Col>

        <Col lg='3' md='4' sm='12'>
          <div className="mb-4">
            <h5 className='footer__link-title'>Newsletter</h5>
            <p className="section__description">Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='Email'  />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </div>
        </Col>

        <Col lg='12'>
          <div className="footer__bottom">
            <p className="section__description pt-4 d-flex align-items-center justify-content-center gap-1">
              <i className="ri-copyright-line"></i>
              Copyright {year}, Developed by Ahmed Alawneh. All rights reserved.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer