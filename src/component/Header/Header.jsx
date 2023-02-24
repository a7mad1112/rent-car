import React, { useRef } from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/header.css';


const navLinks = [
  {
    path: '/',
    display: ''
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/cars',
    display: 'Cars'
  },
  {
    path: '/blogs',
    display: 'Blog'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
];

const Header = () => {

  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

  return <header className="header">
    {/* === top Header === */}
    <div className="header__top">
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6'>
            <div className="header__top__left">
              <span>Need Help?</span>
              <span className="header__top__help">
                <i className="ri-phone-fill"></i>
                +970595809023
              </span>
            </div>
          </Col>

          <Col lg='6' md='6' sm='6'>
            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
              <Link className='d-flex align-items-center gap-1' to='#'><i className="ri-login-circle-line"></i> Login</Link>
              <Link className='d-flex align-items-center gap-1' to='#'><i className="ri-login-circle-line"></i> Register</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    {/* === header middle === */}
    <div className="header__middle">
      <Container>
        <Row>
          <Col lg='4' md='3' sm='4'>
            <div className="logo">
              <h1>
                <Link to='/' className=' d-flex align-items-center justify-content-start gap-3'>
                  <i className="ri-car-line"></i>
                  <span>
                    Rent Car <br/>Service
                  </span>
                </Link>
              </h1>
            </div>
          </Col>
          <Col lg='3' md='3' sm='4'>
            <div className="header__location  d-flex align-items-center gap-2">
              <span><i className="ri-earth-line"></i></span>
              <div className="header__location-content">
                <h4>Bangladesh</h4>
                <h6>Sylhet City, Bangladesh</h6>
              </div>
            </div>
          </Col>

          <Col lg='3' md='3' sm='4'>
            <div className="header__location d-flex align-items-center gap-2">
              <span><i className="ri-time-line"></i></span>
              <div className="header__location-content">
                <h4>Sunday to Friday</h4>
                <h6>10am - 7pm</h6>
              </div>
            </div>
          </Col>

          <Col lg='2' md='3' sm='0' className=' d-flex justify-content-end align-items-center'>
            <button className="header__btn btn">
              <Link to='/contact'>
                <i className="ri-phone-line"></i>
                Request a Call
              </Link>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
    {/* === Main Navigate ===  */}
    <div className="main__navbar">
      <Container>
        <div className="navigation__wrapper d-flex justify-content-between align-items-center">
          <div className="mobile__menu">
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu">
              {
                navLinks.map((item, index) => (
                  <NavLink
                  className={navClass => navClass.isActive ? 'nav__item nav__active' : 'nav__item'}
                  key={index} 
                  to={item.path}
                  >{item.display}
                  </NavLink>
                ))
              }
            </div>
          </div>

          <div className="nav__right">
            <div className="search__box">
              <input type="text" placeholder='Search' />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </div>

        </div>
      </Container>
    </div>
  </header>
}

export default Header;