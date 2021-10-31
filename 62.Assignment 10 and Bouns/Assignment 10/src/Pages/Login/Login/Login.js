
import { Button, Form } from 'react-bootstrap';
import useAuth from './../../../hooks/useAuth';
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = () => {

    const { signInUsingGoogle } = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const auth = getAuth();


    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 Characters long ....');
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
            .catch((error) => {
                setError(error.message)
            });
    }

    return (
        <div className="pt-5 pb-5 row">

            <div className="col-md-4"></div>
            <div className="col-md-4">
                <Form onSubmit={handleRegistration}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" onBlur={handlePasswordChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Terms And Condition" />
                    </Form.Group>
                    <Form.Group className="mb-3 text-danger">{error}</Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Button onClick={handleResetPassword} className="ms-2" variant="primary" type="submit">
                        Reset Password
                    </Button>
                </Form>
                <div className="pt-3">
                    <p className="text-center link_text">Don’t have an account ?
                        <Link to="/signup"> <span>Create an account</span></Link></p>
                </div>
                <p>---------------------- or ----------------------</p>
                <div className="text-center m-0">
                    <button onClick={signInUsingGoogle} className="m-0 g-btn btn btn-warning"><i className="fab fa-google"></i> Sign In With Google</button>
                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
    );
};

export default Login;