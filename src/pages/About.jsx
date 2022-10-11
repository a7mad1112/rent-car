import React from 'react'
import CommonSection from '../component/UI/CommonSection'
import Helmet from '../component/Helmet/Helmet';
import AboutSection from '../component/UI/AboutSection';
import { Container, Row, Col } from 'reactstrap';
import BecomeDriverSection from '../component/UI/BecomeDriverSection';
import driveImg from '../assets/all-images/drive.jpg';
import OurMembers from '../component/UI/OurMembers';
import '../styles/about.css';


const About = () => {
  return <Helmet title="About">
    <CommonSection title="About Us"/>
    <AboutSection aboutClass='aboutPage' />
    <section className="about__page-section">
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12'>
            <div className="about__page-img">
              <img className='w-100 rounded-3' src={driveImg} alt="about-img" />
            </div>
          </Col>
          <Col lg='6' md='6' sm='12'>
            <div className="about__page-content">
              <h2 className="section__title">
                We Are Committed To Provide Safe Ride Solutions
              </h2>
              <p className="section__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error fugiat nesciunt corrupti accusamus reiciendis odit qui reprehenderit pariatur aliquam repellat quos, sit nostrum, vero velit ex consectetur expedita perspiciatis?</p>
              <p className="section__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error fugiat nesciunt corrupti accusamus reiciendis odit qui reprehenderit pariatur aliquam repellat quos, sit nostrum, vero velit ex consectetur expedita perspiciatis?</p>
              <div className='d-flex align-items-center gap-3 mt-4 '>
                <span className=' fs-4'>
                  <i className="ri-phone-line"></i>
                </span>
                <div>
                  <h6 className="section__subtitle">Need Any Help?</h6>
                  <h4>+00123456789</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <BecomeDriverSection/>

    <section>
      <Container>
        <Row>
          <Col className='mb-5 text-center' lg='12'>
            <h6 className="section__subtitle">Experts</h6>
            <h2 className="section__title">Our Members</h2>
          </Col>
          <OurMembers/>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default About