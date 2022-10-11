import React, {useEffect} from 'react'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import { useParams } from 'react-router-dom'
import blogData from '../assets/data/blogData'
import Helmet from '../component/Helmet/Helmet'
import commentImg from '../assets/all-images/ava-1.jpg';
import '../styles/blog-details.css';
import { Link } from 'react-router-dom'

const BlogDetails = () => {
  const {slug} = useParams();
  const blogItem = blogData.find(item => item.title === slug);
  const {title, author, date, time, imgUrl, description, quote} = blogItem;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogItem]);
  return <Helmet title={title}>
    <section>
    <Container>
      <Row>
        <Col lg='8' md='8' >
          <div className="blog__details">
            <img src={imgUrl} alt="blog-img" className='w-100' />
            <h2 className="section__title mt-4">{title}</h2>
            <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
              <span className="blog__author">
                <i className="ri-user-line"></i> {author}
              </span>

              <span className='d-flex align-items-center gap-1 section__description'>
                <i className="ri-calendar-line"></i> {date}
              </span>
              <span className='d-flex align-items-center gap-1 section__description'>
                <i className="ri-time-line"></i> {time}
              </span>
            </div>
            <p className="section__description">{description}</p>
            <h6 className='ps-5 fw-normal'><blockquote className='fs-4'>{quote}</blockquote></h6>
            <p className="section__description">{description}</p>
          </div>
          <div className="comment__list mt-5">
            <h4 className="mb-5">3 Comments</h4>
            <div className="single__comment d-flex gap-3">
              <img className='w-25' src={commentImg} alt="img" />
              <div className="comment__content">
                <h6 className=' fw-bold'>David Visa</h6>
                <p className="section__description mb-0">14 July, 2022</p>
                <p className="section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis fugiat sunt recusandae ipsa totam officia dicta?</p>
                <span className="replay d-flex align-items-center gap-1">
                  <i className="ri-reply-line"></i>
                  Replay
                </span>
              </div>  
            </div>
            {/* === Comment Form === */}
            <div className="leave__comment-form mt-5">
              <h4>Leave a Comment</h4>
              <p className="section__description">You must sign-in to make or comment a post</p>
              <Form>
                <FormGroup className=' d-flex gap-3'>
                  <Input type="text" placeholder='Full name' />
                  <Input type="email" placeholder='Email' />
                </FormGroup>
                <FormGroup>
                  <textarea rows="5" className='w-100 py-2 px-3' placeholder='Comment...'></textarea>
                </FormGroup>
                <button className="btn comment__btn mt-3">Post a Comment</button>
              </Form>
            </div>
          </div>
        </Col>

        <Col lg='4' md='4'>
          {
            blogData.map(item =>(
              <div key={item.id} className="recent__blog-post mb-4">
                <div className="recent__blog-item d-flex gap-3">
                  <img src={item.imgUrl} alt="recent-img" className='w-25 rounded-2' />
                  <h6><Link to={`/blogs/${item.title}`}>{item.title}</Link></h6>
                </div>
              </div>
            ))
          }
        </Col>
      </Row>
    </Container>
    </section>
  </Helmet>
}

export default BlogDetails