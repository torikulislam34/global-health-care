import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit="">
                <input type="email" name="" id="" placeholder='Your Email' />
                <br /><br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
            <p>new to golobal-healthcare? <Link to='/register'>Create Account</Link></p>
            <div>-----------or-------------</div>
            <button className='btn btn-warning'>Google Sign In</button>
        </div>
    );
};

export default Login;