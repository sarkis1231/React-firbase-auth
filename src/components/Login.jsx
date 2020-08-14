import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import {Link} from 'react-router-dom'
import app from "../firbase";
import {AuthContext} from "../context/Auth";
import '../App.css'

const Login = ({history}) => {
    const handleLogin = useCallback(async e => {
        e.preventDefault();
        e.persist();
        const {email, password} = e.target.elements;
        try {
            await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (err) {
            alert(err);
        }
    }, [history]);

    const currentUser = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/'/>
    }

    return (
        <div className='form-container'>
            <div className='card'>
            <h1>Login</h1>
            <form className='form' onSubmit={(e) => handleLogin(e)}>
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
                <button type='submit'>Login</button>
            </form>
                <div className='caption-container'>
                    <p>if you don't have an account</p>
                    <Link to='/signup'>Sign UP</Link>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Login);