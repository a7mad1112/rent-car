import React from 'react'
import Helmet from '../component/Helmet/Helmet';
import CommonSection from '../component/UI/CommonSection';
import BlogList from '../component/UI/BlogList';
import { Container, Row } from 'reactstrap';

const Blog = () => {
  return <Helmet title='Blogs'>
    <CommonSection title='Blogs'/>

    <section>
      <Container>
        <Row>
          <BlogList/>
          <BlogList/>
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Blog