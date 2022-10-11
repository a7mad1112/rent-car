import React from 'react'
import { Container } from 'reactstrap'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import '../../styles/hero-slider.css';


const settings= {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    Infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false
};

const HeroSlider = () => {
    return <Slider {...settings} className='hero__slider'>
        <div className="slider__item slider__item-01 mt-0">
            <Container>
                <div className="slider__content">
                    <h6 className='text-light mb-3'>For Rent 70$ Per Day</h6>
                    <h1 className='text-light mb-4'>Reverse Now and Get 50% Off</h1>

                    <button className='btn reverse__btn mt-5'>
                        <Link to='/cars'>Reverse Now</Link>
                    </button>
                </div>
            </Container>
        </div>

        <div className="slider__item slider__item-02 mt-0">
            <Container>
                <div className="slider__content">
                    <h6 className='text-light mb-3'>For Rent 70$ Per Day</h6>
                    <h1 className='text-light mb-4'>Reverse Now and Get 50% Off</h1>

                    <button className='btn reverse__btn mt-5'>
                        <Link to='/cars'>Reverse Now</Link>
                    </button>
                </div>
            </Container>
        </div>

        <div className="slider__item slider__item-03 mt-0">
            <Container>
                <div className="slider__content">
                    <h6 className='text-light mb-3'>For Rent 70$ Per Day</h6>
                    <h1 className='text-light mb-4'>Reverse Now and Get 50% Off</h1>

                    <button className='btn reverse__btn mt-5'>
                        <Link to='/cars'>Reverse Now</Link>
                    </button>
                </div>
            </Container>
        </div>

    </Slider>
}

export default HeroSlider