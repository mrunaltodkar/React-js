import React from 'react'

function Nav() {
    const navStyle = {
        color: 'white'

    }
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                    <li style={navStyle}>SignUp</li>
                    <li style={navStyle}>SignIn</li>
            </ul>
        </nav>
    )
}

export default Nav