import React, {useCallback} from 'react';
import {withRouter} from 'react-router';
import app from "../firbase";
import '../App.css'
import {Link} from "react-router-dom";

const SignUp = ({history}) => {
    const handleSignUp = useCallback(async (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (err) {
            alert(err)
        }
    }, [history]);

    return (
        <div className='form-container'>
            <div className='card'>
            <h1>Sign Up</h1>
            <form className='form' onSubmit={handleSignUp}>
                <div className='input-container'>
                    <label>
                        Email
                    </label>
                    <input name='email' type="email" placeholder='Email'/>
                </div>
                <div className='input-container'>
                    <label>
                        Password
                    </label>
                    <input name='password' type="password" placeholder='Password'/>
                </div>
                <button type='submit'>Sign Up</button>
            </form>
                <div className='caption-container'>
                    <p>if you already have an account</p>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default withRouter(SignUp);