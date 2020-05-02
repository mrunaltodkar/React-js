import React from 'react';
import Signin from './Signin';
import Signup from './Signup';
import Nav from './Nav';
import './Coupons.css'

function Coupons() {
    return (

        <div className="App">

            <Nav />
            <Signin />
            <Signup />

        </div>

    );
}

export default Coupons;