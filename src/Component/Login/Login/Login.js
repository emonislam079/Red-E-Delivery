import React, { useState } from 'react';
import { FloatingLabel, Form, Button, Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Login = () => {
    AOS.init();
    const [loginData, setLoginData] = useState({});
    const { isLoading, loginUser, authError, user, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
        <Row>
        <Col xs={12} md={6}>
            <img data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000" className='w-100' src="https://media.istockphoto.com/vectors/online-registration-and-sign-up-concept-young-man-signing-up-or-login-vector-id1219250762?k=20&m=1219250762&s=170667a&w=0&h=4oD6rZSzbl7vm3JjR47OemxXkWMDPL--1ZOr0YG5Vro=" alt="" />
            </Col>
        <Col data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000" xs={12} md={6}><div className='container mt-5 shadow-lg p-3 mb-5 bg-body rounded '>
            <h2 className='text-center'>Log In</h2>
            {!isLoading && <Form onSubmit={handleLoginSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3 w-100 mx-auto mt-5"
                >
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                        onBlur={handleOnChange} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 w-100 mx-auto">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onBlur={handleOnChange} />
                </FloatingLabel>
                <div className='form-group text-center'>
                    <Button className='text-center' type='submit' variant="primary" size="lg">Login</Button>
                    <Link to="/register" className='text-decoration-none d-block fs-5 mt-2 text-center'>New User? Please Register</Link>
                    <Button onClick={handleGoogleSignIn} className='mt-4 align-self-center' variant="primary" size="lg"><i className="fab fa-google"></i> Google Sign In</Button>


                </div>
            </Form>}
            {isLoading && <Spinner animation="grow" variant="danger" />}
            {user?.email && <Alert severity="success" className='w-100 mx-auto mt-3'>Login successfully</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
            
        </div> </Col>
            
        </Row>
        </Container>


        
    );
};

export default Login;