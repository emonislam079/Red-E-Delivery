
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='mb-5'>
            <img src="https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png" alt="" />
            <Link className='d-block go' to ='/home'><Button className='button-primary'>Go Back To Home ... </Button></Link>
        </div>
    );
};

export default NotFound;