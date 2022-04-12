import React from 'react';
import { Col, FloatingLabel, Form, Row, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Connect = () => {
    AOS.init();
    return (
        <div>
            <Row>
        <Col data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000" xs={12} md={7}>
        <h3 className='fw-bold fs-1 mt-3 mb-5'>Contact with Us</h3>
        <div className='border border-dark w-50 mx-auto my-3 p-3'>
            <h5>Phone</h5>
            <p>+8801949400955</p>
        </div>
        <div className='border border-dark w-50 mx-auto my-3 p-3'>
            <h5>Email</h5>
            <p>emonislam079@gmail.com</p>
        </div>
        <div className='border border-dark w-50 mx-auto my-3 p-3'>
            <h5>Address</h5>
            <p>Saddam Market, kadamtali, Dhaka</p>
        </div>

        
        </Col>
            <Col className='mt-5'  xs={12} md={5} data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000" >
            
  <FloatingLabel
    controlId="floatingInput"
    label="Name"
    className="mb-3 mt-5 w-75 mx-auto"
  >
    <Form.Control type="name" placeholder="Your Name" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Email" className="mb-3 w-75 mx-auto">
    <Form.Control type="email" placeholder="Your Email" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Subject" className="mb-3 w-75 mx-auto">
    <Form.Control type="name" placeholder="Subject" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea2" label="Message" className='w-75 mx-auto'>
    <Form.Control
      as="textarea"
      placeholder="Leave a message here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  <Button className='px-5 mt-2' variant="primary" size="lg">
    Send
  </Button>
            </Col>
        </Row>
            
        </div>
    );
};

export default Connect;