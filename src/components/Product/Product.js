import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Product = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h3>this is products components</h3>
            <p>{user ? user.displayName : 'noooooone'}</p>
        </div>
    );
};

export default Product;