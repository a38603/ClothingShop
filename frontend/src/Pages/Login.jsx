import React, { useState } from 'react';
import './CSS/Login.css';
import { auth } from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Login is successfull");
            navigate('/', { replace: true });

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='login'>
            <form className="login-container" onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <div className="login-fields">
                    <input type="text" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
                <p className="login-textlogin">If you don't have account <Link to='/signup'><span>SignUp here</span></Link></p>
            </form>
        </div>
    );
};

export default Login;