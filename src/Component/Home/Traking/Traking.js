import React from 'react';
import './Traking.css'

const Traking = () => {
    return (
        <div className='container tracking border border-danger border-1 rounded-3 w-50 bg-white p-3'>
            <h3>Track Your Product</h3>
            <div className="input-group mb-3 mx-auto">
  <input type="text" className="form-control" placeholder="Enter Your Tracking Id" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-danger" type="button" id="button-addon2">Track Product</button>
</div>
         
        </div>
    );
};

export default Traking;