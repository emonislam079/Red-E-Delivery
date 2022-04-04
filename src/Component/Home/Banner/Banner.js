import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    AOS.init();
    return (
        <Container className='bannar'>
            <div className='d-flex justify-content-center p-2'>
                <li>Fast</li>
                <li>Secured</li>
                <li>WorldWide</li>
            </div>
            <h1 data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="1500" >RED E</h1>
            <h3 data-aos="fade-right"data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500" className='fs-1 text-dark'> A <span className='text-success'> Fastest </span> , <span className='text-primary'> Secured </span>  & <span className='text-warning'> Trusted </span> </h3> 
            <h4 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500" className='fs-2'> Courier and Delivery Service </h4>
        </Container>
    );
};

export default Banner;