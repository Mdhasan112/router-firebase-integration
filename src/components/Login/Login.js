import React from 'react';

const Login = () => {
    return (
        <div>
            <h3>Please Login</h3>
            <button>Google Sign In</button>
            <br />
            <br />
            <form>
                <input type="email" name="" id="" placeholder='Enter Your Email'/>
                <br />
                <input type="password" name="" id="" placeholder='Password'/>
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;