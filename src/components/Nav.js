import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo_coupons.png'

function Nav() {
    const navStyle = {
        color: 'rgb(14, 13, 13)'
    }

    return (
        <nav>
            <ul>
                <Link to="/">
                    <li><img className="logo" src={logo} alt="couponsdeal logo" /> </li>
                </Link>
            </ul>
            <input style={navStyle} type="text" placeholder=" Enter your  Search Here  " name="search" size='40' />
            <ul className= "nav-links">
                <Link to="/news" style={navStyle} >
                    <li>News</li>
                </Link>
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