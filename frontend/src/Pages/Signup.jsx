import React, { useState } from 'react';
import './CSS/Signup.css';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Account Created");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='signup'>
            <form className="signup-container" onSubmit={handleSubmit}>
                <h1>SIGN UP</h1>
                <div className="signup-fields">
                    <input type="text" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Sign Up</button>
                <p className="signup-textsignup">Already Register <Link to='/login'><span>Login here</span></Link></p>
            </form>
        </div>
    );
};

export default Signup;