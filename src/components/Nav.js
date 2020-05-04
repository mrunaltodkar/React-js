import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo_coupons.png'

function Nav() {
    const navStyle = {
        color: 'rgb(14, 13, 13)',

    }

    return (
        <nav>
            <ul>
                <Link to="/" style={{textAlign: 'start'}}>
                <li><img className="logo" src={logo} alt="couponsdeal logo" /> </li>
                </Link>
            </ul>
            <h2>CouponsDeal</h2>
            <ul className="nav-links">
                <input type="text" placeholder="Search.." name="search" />

                <Link to="/categories" style={navStyle} >
                    <li>Categories</li>
                </Link>
                <Link to="/wishlist" style={navStyle} >
                    <li>Wishlist</li>
                </Link>
                <Link to="/signup" style={navStyle} >
                    <li>SignUp</li>
                </Link>
                <Link to="/login" style={navStyle} >
                    <li>SignIn</li>
                </Link>
                <Link to="/aboutus" style={navStyle} >
                    <li>About Us</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav