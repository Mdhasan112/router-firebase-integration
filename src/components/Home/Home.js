import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Home.css'

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h3>This is home</h3>
            <p>User Name: {user? user.displayName: 'nothing'}</p>
        </div>
    );
};

export default Home;