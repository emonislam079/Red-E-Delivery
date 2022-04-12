import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Offers.css'

const Offers = () => {
    return (
        <Container>
            <h1 className='mb-5 text-danger'>Best Offers</h1>
            
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
  <div className="col">
    <div className="card shadow">
        <div className="card-body">
        <h2 className='fw-bold fs-1'>$50</h2>
        <h5 className="card-title text-secondary">For single Product</h5>
        <h3 className='rounded-pill p-2 w-75 mx-auto catagory'>Basic</h3>
        <h6 className='my-3'>PRODUCT WEIGHT : <span className='text-secondary'>less 3kg</span></h6>
        <h6 className='my-3'>COUNTRY : <span className='text-secondary'> All</span></h6>
        <h6 className='my-3'>DURATION : <span className='text-secondary'> 1-3 Days</span></h6>
        <h6 className='my-3'>SUPPORT : <span className='text-secondary'> Yes</span></h6>
        <Link to= './order'> <Button className='mb-4'>Order Now</Button> </Link>
        </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow">
      <div className="card-body">
      <h2 className='fw-bold fs-1'>$75</h2>
        <h5 className="card-title text-secondary">For package product</h5>
        <h3 className='rounded-pill p-2 w-75 mx-auto catagory'>Premium</h3>
        <h6 className='my-3'>PRODUCT WEIGHT : <span className='text-secondary'>less 5kg</span></h6>
        <h6 className='my-3'>COUNTRY : <span className='text-secondary'> All</span></h6>
        <h6 className='my-3'>DURATION : <span className='text-secondary'> 1-3 Days</span></h6>
        <h6 className='my-3'>SUPPORT : <span className='text-secondary'> Yes</span></h6>
        <Link to= './order'> <Button className='mb-4'>Order Now</Button> </Link></div>
    </div>
  </div>
    <div className="col">
    <div className="card shadow">
      <div className="card-body">
      <h2 className='fw-bold fs-1'>$100</h2>
        <h5 className="card-title text-secondary">For multiple product</h5>
        <h3 className='rounded-pill p-2 w-75 mx-auto catagory'>Standard</h3>
        <h6 className='my-3'>PRODUCT WEIGHT : <span className='text-secondary'>less 7kg</span></h6>
        <h6 className='my-3'>COUNTRY : <span className='text-secondary'> All</span></h6>
        <h6 className='my-3'>DURATION : <span className='text-secondary'> 1-3 Days</span></h6>
        <h6 className='my-3'>SUPPORT : <span className='text-secondary'> Yes</span></h6>
        <Link to= './order'> <Button className='mb-4'>Order Now</Button> </Link></div>
    </div>
  </div>
</div>
        </Container>
    );
};

export default Offers;