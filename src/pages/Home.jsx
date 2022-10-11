import React from 'react'
import Helmet from '../component/Helmet/Helmet';
import HeroSlider from '../component/UI/HeroSlider';
import { Container, Row, Col } from 'reactstrap';
import FindCarForm from '../component/UI/FindCarFrom';
import AboutSection from '../component/UI/AboutSection';
import ServicesList from '../component/UI/ServicesList';
import carData from '../assets/data/carData';
import CarItem from '../component/UI/CarItem';
import BecomeDriverSection from '../component/UI/BecomeDriverSection';
import Testimonial from '../component/UI/Testimonial';
import BlogList from '../component/UI/BlogList';


const Home = () => {
  return <Helmet title='Home'>
    {/* === Hero Section === */}
    <section className="p-0 hero__slider-section">
      <HeroSlider/>
      <div className="hero__form">
        <Container>
          <Row className="form__row">
            <Col lg='4' md='4'>
              <div className="find__cars-left">
                <h2>Find your best car here</h2>
              </div>
            </Col>

            <Col lg='8' md='8' sm='12'>
              <FindCarForm/>
            </Col>
          </Row>
        </Container>
      </div>
    </section>

    {/* === About Section === */}
    <AboutSection/>
    {/* === Services Section === */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 text-center'>
            <h6 className="section__subtitle">See our</h6>
            <h2 className="section__title">Popular Services</h2>
          </Col>
          <ServicesList/>
        </Row>
      </Container>
    </section>
    {/* === Car Offer Section === */}
    <section>
      <Container>
        <Row>
          <Col className='text-center mb-5' lg='12'>
            <h6 className="section__subtitle">Come with</h6>
            <h2 className="section__title">Hot Offers</h2>
          </Col>
          {
            carData.slice(0, 6).map(item => <CarItem item={item} key={item.id} />)
          }
        </Row>
      </Container>
    </section>
    {/* === Become Driver Section === */}
    <BecomeDriverSection/>
    {/* === Testimonial Section ===  */}
    <section>
      <Container>
        <Row>
          <Col className='mb-4 text-center' lg='12'>
            <h6 className="section__subtitle">Our clients says</h6>
            <h2 className="section__title">Testimonials</h2>
          </Col>
          <Testimonial/>
        </Row>
      </Container>
    </section>
    {/* === Blog Section === */}
    <section>
      <Container>
        <Row>
          <Col className='mb-5 text-center' lg='12'>
            <h6 className="section__subtitle">Explore our blogs</h6>
            <h2 className="section__title">Latest Blogs</h2>
          </Col>
          <BlogList/>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home