import React, {useEffect} from 'react'
import carData from '../assets/data/carData'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../component/Helmet/Helmet'
import { useParams } from 'react-router-dom'
import BookingForm from '../component/UI/BookingForm'
import PaymentMethod from '../component/UI/PaymentMethod'


const CarDetails = () => {
  const {slug} = useParams();
  // console.log(slug)
  const singleCarItem = carData.find(item => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);
  return <Helmet title={slug}>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <img className='w-100' src={singleCarItem.imgUrl} alt="car-img" />
          </Col>

          <Col lg='6'>
            <div className="car__info">
              <h2 className='section__title'>{singleCarItem.carName}</h2>
              <div className=' d-flex align-items-center gap-5 mb-4 mt-3'>
                <h6 className="rent__price fw-bold fs-4">${singleCarItem.price}.00 / Day</h6>
                <span className=' d-flex align-items-center gap-2'>
                  <span style={{color: "#f9a826"}}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </span>
                  ({singleCarItem.rating} ratings)
                </span>
              </div>
              <p className="section__description">{singleCarItem.description}</p>



              <div className=' d-flex align-items-center mt-3' style={{columnGap: '4rem'}}>
                <span className=' d-flex align-items-center gap-1 section__description'>
                  <i style={{color: "#f9a826"}} className="ri-roadster-line"></i> 
                  {singleCarItem.model}
                </span>

                <span className=' d-flex align-items-center gap-1 section__description'>
                  <i style={{color: "#f9a826"}} className="ri-settings-2-line"></i>
                  {singleCarItem.automatic}
                </span>

                <span className=' d-flex align-items-center gap-1 section__description'>
                  <i style={{color: "#f9a826"}} className="ri-timer-flash-line"></i>
                  {singleCarItem.speed}
                </span>
              </div>

              <div className=' d-flex align-items-center mt-3' style={{columnGap: '2.8rem'}}>
                <span className=' d-flex align-items-center gap-1 section__description'>
                  <i style={{color: "#f9a826"}} className="ri-map-pin-line"></i>
                  {singleCarItem.gps}
                </span>

                <span className=' d-flex align-items-center gap-1 section__description'>
                  <i style={{color: "#f9a826"}} className="ri-wheelchair-line"></i>
                  {singleCarItem.seatType}
                </span>

                <span className=' d-flex align-items-center gap-1 section__description'>
                  <i style={{color: "#f9a826"}} className="ri-building-line"></i>
                  {singleCarItem.brand}
                </span>
              </div>

            </div>
          </Col>

          <Col className='mt-5' lg='7'>
            <div className="booking-info mt-5">
              <h5 className='mb-4 fw-bold'>Booking Information</h5>
              <BookingForm/>
            </div>
          </Col>


          <Col className='mt-5' lg='5'>
            <div className="payment__info mt-5">
              <h5 className='mb-4 fw-bold'>Payment Information</h5>
              <PaymentMethod/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default CarDetails