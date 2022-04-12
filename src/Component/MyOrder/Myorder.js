import React, { useEffect, useState } from 'react';
import { Card, Row, Button, Table, Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Myorder = () => {

    const {user} = useAuth();
  const [Orders, setOrders]= useState([]);
    useEffect(() => {
      const url = `http://localhost:5000/order?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    const handelDelete = id =>{
        const url = `http://localhost:5000/order/${id}`;
        fetch(url, {
          method: 'DELETE'
        })
        .then (res => res.json())
        .then (data =>{
            if(data.deletedCount){
                alert('Want to Delete Orders')
                const remaining = Orders.filter(row => row._id !==id);
                setOrders(remaining);
            }
          
        })
      } 
    return (
        <Container>
            <h1 className='mt-5'>My Order : {Orders.length}</h1>
      
            <Row xs={1} md={1} className="g-4 container mt-3">
           
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Category</th>
                            <th>From-To</th>
                            <th>cost</th>
                            <th>Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Orders.map((row)=>(
                                <tr>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.category}</td>
                                <td>{row.from}-{row.to}</td>
                                <td>{row.cost}</td>
                                <td>{row.phone}</td>
                                <Button onClick={()=> handelDelete(row._id)} variant="outline-danger">Delete</Button>
                                </tr>
                            ))}
                            
                        </tbody>
                        </Table>
                
            </Row>
        </Container>
    );
};

export default Myorder;