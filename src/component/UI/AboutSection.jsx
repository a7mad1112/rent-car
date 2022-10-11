import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/about-section.css';
import BMW__img from '../../assets/all-images/cars-img/bmw-offer.png';

const AboutSection = ({aboutClass}) => {
    return <section className='about__section' style={aboutClass === 'aboutPage' ? {marginTop: '0px'} : {marginTop: '280px'}}>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about__section-content">
                        <h4 className="section__subtitle">About Us</h4>
                        <h2 className="section__title">Welcome to car rent service</h2>
                        <p className="section__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet adipisci velit cum omnis voluptatem itaque, non eligendi voluptatibus officiis doloribus asperiores sequi quos dignissimos ratione ad quisquam aut expedita! Eum consectetur facilis deleniti temporibus. Labore saepe sunt veritatis quidem!
                        </p>
                        
                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex align-items-center gap-2">
                                <i className="ri-checkbox-circle-line"></i>
                                Lorem ipsum dolor sit amet.
                            </p>
                            <p className="section__description d-flex align-items-center gap-2">
                                <i className="ri-checkbox-circle-line"></i>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>

                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex align-items-center gap-2">
                                <i className="ri-checkbox-circle-line"></i>
                                Lorem ipsum dolor sit amet.
                            </p>
                            <p className="section__description d-flex align-items-center gap-2">
                                <i className="ri-checkbox-circle-line"></i>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>

                    </div>
                </Col>
                
                <Col lg='6' md='6'>
                    <div className="about__img">
                        <img className='w-100' src={BMW__img} alt="BMW-img" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default AboutSection