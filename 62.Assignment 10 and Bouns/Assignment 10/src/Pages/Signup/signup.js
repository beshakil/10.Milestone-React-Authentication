
import useAuth from './../../hooks/useAuth';
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Signup = () => {

    const { signInUsingGoogle } = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')

    const auth = getAuth();


    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password, name);
        if (password.length < 6) {
            setError('Password Must be at least 6 Characters long ....');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password, name)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                verifyEmail();
                setUserName();

            })
            .catch((error) => {
                setError(error.message)
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(result => {

        }).catch((error) => {
            setError(error.message)
        });
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            });
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    return (
        <div className="pt-5 pb-5 row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <form onSubmit={handleRegistration}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Your Name</label>
                        <input type="text" className="form-control" onBlur={handleNameChange} required></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" onBlur={handleEmailChange}></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"> Enter Password</label>
                        <input type="password" className="form-control" onBlur={handlePasswordChange}></input>
                    </div>

                    <div className="mb-3 form-check text-start">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                        <label className="form-check-label" for="exampleCheck1">Accept Terms And Condition</label>
                    </div>

                    <div className="mb-3">
                        <p className="text-danger">{error}</p>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>

                <div className="pt-3">
                    <p className="text-center link_text">Already have an account ?
                        <Link to="/login"> <span>Login</span></Link></p>
                </div>
                <p>---------------------- or ----------------------</p>
                <div className="text-center m-0">
                    <button onClick={signInUsingGoogle} className="m-0 g-btn btn btn-warning"><i className="fab fa-google"></i> Sign In With Google</button>
                </div>
            </div>
            <div className="col-md-4">

            </div>


        </div>
    );
};

export default Signup;