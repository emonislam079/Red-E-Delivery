import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const Order = () => {
    
    const{user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
      fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
          if(result.insertedId){
            alert('Booking processed successfully');
            reset();
            
          }
        })
    };
  
    return (
 <Container className='shadow-lg w-50 mx-auto'>
            <h1>Make Order</h1>
            <p className='text-secondary'>Fill all The field to delivered your product </p>
              

                <form onSubmit={handleSubmit(onSubmit)}>

                <input className='d-block mb-3 p-2 w-50 mx-auto' defaultValue={user.displayName} {...register("name", { required: true } )} />

                <input className='d-block mb-3 p-2 w-50 mx-auto' defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}

                <input className='d-block mb-3 p-2 w-50 mx-auto' placeholder="Category" {...register("category",{ required: true } )} />

                <input className='d-block mb-3 p-2 w-50 mx-auto' placeholder="Weight" {...register("weight", { required: true })} />
                
                <input className='d-block mb-3 p-2 w-50 mx-auto' placeholder="Cost" {...register("cost", { required: true })} />

                <input className='d-block mb-3 p-2 w-50 mx-auto' placeholder="From" {...register("from", { required: true })} />
                
                <input className='d-block mb-3 p-2 w-50 mx-auto' placeholder="To" {...register("to", { required: true })} />
                
                <input className='d-block mb-3 p-2 w-50 mx-auto' placeholder="phone number" {...register("phone", { required: true }) } />
                
                <input className='d-block mb-5 p-2 w-50 mx-auto' type="submit" />
      
                
            </form>
            
  </Container>
    );
};

export default Order;