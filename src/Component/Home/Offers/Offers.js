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
    <div className="card">
      
      <div className="card-body">
          <h2 className='fw-bold fs-1'>$50</h2>
        <h5 className="card-title text-secondary">For single Product</h5>
        <h3 className=' bg-warning rounded-pill p-2 w-75 mx-auto'>Basic</h3>
        <h6>Products Weight : <span className='text-secondary'> 3kg</span></h6>
        <h6>Products Weight : <span className='text-secondary'> 3kg</span></h6>
        <h6>Products Weight : <span className='text-secondary'> 3kg</span></h6>
        <h6>Products Weight : <span className='text-secondary'> 3kg</span></h6>
        <Link to= './about'> <Button>Order Now</Button> </Link>
        </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
     
      <div className="card-body">
        <h5 className="card-title">Our Mission</h5>
        <p className="card-text text-secondary py-3"> Lorem, ipsum  lorem dolor sit amet consectetur adipisicing elit. Nostrum facilis sit expedita labore porro nobis eos. Et doloremque, fugit harum eveniet maiores incidunt ea architecto qui dolorum unde dolores! Officia! This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  
  <div className="col">
    <div className="card">
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

export default Offers;