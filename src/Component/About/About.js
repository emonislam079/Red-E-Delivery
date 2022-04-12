import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'

const About = () => {
    AOS.init();
    return (
        <Container className='mt-2'>
        <Row>
        <Col data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000" xs={12} md={7}>
        <h3 className='fw-bold fs-1 mt-3 mb-5'>About Us</h3>
        <p className='mt-5 text-start text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis temporibus quisquam consequuntur? Dicta eveniet molestiae reiciendis asperiores fugit sit facilis tempore deserunt obcaecati perspiciatis voluptate, dolor nam, natus magnam accusantium.</p>
        <h2 className='text-start mt-5'><i className="fas fa-rocket me-2"></i> Fast Delivery</h2>
        <h2 className='text-start mt-3'><i className="fas fa-rocket me-2"></i> Secured Service</h2>
        <h2 className='text-start mt-3 mb-5'><i className="fas fa-rocket me-2"></i> All Over The World</h2>
        </Col>
            <Col xs={12} md={5}>
            <img data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000" className='w-100' src="https://previews.123rf.com/images/elizaliv/elizaliv1810/elizaliv181000392/109841066-isometric-set-of-delivery-service-or-courier-service-workers-or-courier-on-a-scooter-delivery-concep.jpg" alt="" />
            </Col>
        </Row>
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
  <div className="col">
    <div className="card border border-secondary">
      
      <div className="card-body">
        <h5 className="card-title">What We Do</h5>
        <p className="card-text text-secondary py-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure at sint veniam maxime inventore quibusdam blanditiis magni dolorem, rerum temporibus facilis fugiat earum accusantium amet nesciunt voluptate pariatur reprehenderit. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card border border-secondary">
     
      <div className="card-body">
        <h5 className="card-title">Our Mission</h5>
        <p className="card-text text-secondary py-3"> Lorem, ipsum  lorem dolor sit amet consectetur adipisicing elit. Nostrum facilis sit expedita labore porro nobis eos. Et doloremque, fugit harum eveniet maiores incidunt ea architecto qui dolorum unde dolores! Officia! This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  
  <div className="col">
    <div className="card border border-secondary">
      <div className="card-body">
        <h5 className="card-title">Our History</h5>
        <p className="card-text text-secondary py-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus unde, voluptatibus consequatur fugit aspernatur voluptate quis cumque nesciunt, cupiditate eius tenetur odit quibusdam molestiae animi non? Possimus, deleniti obcaecati. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
        
        </Container>
    );
};

export default About;