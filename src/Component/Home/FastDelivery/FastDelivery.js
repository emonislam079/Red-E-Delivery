import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FastDelivery = () => {
    AOS.init();
    return (
        <Container className='mt-5 '>
        <Row>
        <Col data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000" xs={12} md={7}>
        <h3 className='fw-bold fs-1 mt-5'>GET THE <span className='text-danger'>FASTEST</span> PRODUCT DELIVERY</h3>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis temporibus quisquam consequuntur? Dicta eveniet molestiae reiciendis asperiores fugit sit facilis tempore deserunt obcaecati perspiciatis voluptate, dolor nam, natus magnam accusantium.</p>
            </Col>
            <Col xs={12} md={5}>
            <img data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000" className='w-100' src="https://hispanosemprendedores.com/wp-content/uploads/2020/09/10361.jpg" alt="" />
            </Col>
        </Row>
        </Container>
    );
};

export default FastDelivery;