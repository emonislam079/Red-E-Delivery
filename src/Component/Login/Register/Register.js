import React, { useState } from 'react';
import { Alert, FloatingLabel, Form, Spinner, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Register = () => {
    AOS.init();
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, user, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
        <Row>
        <Col xs={12} md={6}>
            <img data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000" className='w-100' src="https://media.istockphoto.com/vectors/online-registration-and-sign-up-concept-young-man-signing-up-or-login-vector-id1219250762?k=20&m=1219250762&s=170667a&w=0&h=4oD6rZSzbl7vm3JjR47OemxXkWMDPL--1ZOr0YG5Vro=" alt="" />
            </Col>
        <Col data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000" xs={12} md={6}>
        
            <div className='container mt-3 shadow-lg p-3 mb-5 bg-body rounded'>
                <h2 className='text-center'>Register</h2>
                {!isLoading && <Form onSubmit={handleLoginSubmit}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Name"
                        className="mb-3 w-100 mx-auto mt-5"
                        
                    >
                        <Form.Control
                            type="text"
                            placeholder="Your name"
                            name="name"
                            onBlur={handleOnBlur} 
                            required />
                            
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3 w-100 mx-auto"
                        
                    >
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            name="email"
                            onBlur={handleOnBlur}
                            required
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 w-100 mx-auto">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            onBlur={handleOnBlur}
                            required
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-3 w-100 mx-auto">
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            required
                        />
                    </FloatingLabel>

                    <div className='form-group text-center'>
                        <Button type='submit' variant="primary" size="lg">Register</Button>
                        <Link to="/login" className='text-decoration-none d-block fs-5 mt-2 mb-5 text-center'>Already Register? Please Login</Link>

                    </div>

                </Form>}
                {isLoading && <Spinner animation="grow" variant="danger" />}
                {user?.email && <Alert severity="success" className='w-100 mx-auto mt-2'>User Created successfully</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </div>
        </Col>
            
        </Row>
        </Container>
    );
};

export default Register;