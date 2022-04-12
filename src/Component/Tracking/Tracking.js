import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Container, Row } from 'react-bootstrap';


const Tracking = () => {
    AOS.init();
    return (
        <Container>
        <div data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="1500" 
        className='mt-5 border border-danger border-1 rounded-3 w-75 bg-white mx-auto p-3 mb-5'>
            <h3>Track Your Product</h3>
            <div className="input-group mb-3 mx-auto">
        <input type="text" className="form-control" placeholder="Enter Your Tracking Id" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button class="btn btn-outline-danger" type="button" id="button-addon2">Track Product</button>
        </div>
        </div>
        <Row>
        <Col data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000" xs={12} md={6}>
        
        <h4 className='text-start text-white mt-5 border border-secondary p-2 bg-secondary'> Product Name: <span className='text-white'>Laptop</span> </h4>
        <h4 className='text-start mt-2 border border-secondary p-2'> Product ID: <span className='text-secondary'>879508</span></h4>
        <h4 className='text-start text-white mt-2 border border-secondary p-2 bg-secondary'>Order Date: <span className='text-white'>25/05/2022</span></h4>
        <h4 className='text-start mt-2 border border-secondary p-2'> Order Status: <span className='text-secondary'>On Processing</span></h4>
        <h4 className='text-start text-white mt-2 border border-secondary p-2 bg-secondary'>Weight (KG): <span className='text-white'>2 Kg</span></h4>
        <h4 className='text-start mt-2 mb-3 border border-secondary  p-2'>Order Type: <span className='text-secondary'>Basic</span></h4>
        </Col>
            <Col xs={12} md={6}>
            <img data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000" className='w-100 mt-5' 
            src="https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg" alt="" />
            </Col>
        </Row>

        </Container>
    );
};

export default Tracking;