import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Login = () => {
    const [signInWIthGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={()=> signInWIthGoogle()}>Google Sign In</button>
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