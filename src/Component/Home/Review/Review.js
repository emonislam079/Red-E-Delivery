import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Review.css'

const Review = () => {
    return (
        <div className='review mb-5'>
            <h1 className='mt-5 pt-4 fw-bold text-white' >What People Say</h1>
            <Carousel className=''>
  <Carousel.Item>
    <img
      className="d-block rounded-circle align-center mx-auto border border-5 border-danger"
      src="https://p7.hiclipart.com/preview/422/228/24/marcus-butler-hello-life-youtuber-vlog-face-wash.jpg"
      alt="First slide"
      height="80px"
      width= '80px'
    />
    <h2 className='text-white' >Name: Emon Islam</h2>
    <p className='text-white text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis minus, eligendi libero unde tempore perferendis similique sit, at explicabo illum id amet ipsum quia doloremque perspiciatis incidunt, vitae expedita molestiae?</p>
    </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block rounded-circle align-center mx-auto border border-5 border-danger"
      src="https://p7.hiclipart.com/preview/422/228/24/marcus-butler-hello-life-youtuber-vlog-face-wash.jpg"
      alt="First slide"
      height="80px"
      width= '80px'
    />
    <h2 className='text-white' >Name: Emon Islam</h2>
    <p className='text-white text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis minus, eligendi libero unde tempore perferendis similique sit, at explicabo illum id amet ipsum quia doloremque perspiciatis incidunt, vitae expedita molestiae?</p>
    
    </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block rounded-circle align-center mx-auto border border-5 border-danger"
      src="https://p7.hiclipart.com/preview/422/228/24/marcus-butler-hello-life-youtuber-vlog-face-wash.jpg"
      alt="First slide"
      height="80px"
      width= '80px'
    />
    <h2 className='text-white' >Name: Emon Islam</h2>
    <p className='text-white text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis minus, eligendi libero unde tempore perferendis similique sit, at explicabo illum id amet ipsum quia doloremque perspiciatis incidunt, vitae expedita molestiae?</p>
    
    </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Review;