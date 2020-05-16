import React from 'react';

export default function Footer() {
    const fooStyle = {
        color: 'rgb(14, 13, 13)'

    }
    return (
        <div> 
            <ul className="main-footer">
            <p style={fooStyle}>
            © All Copyrights Reserved 2020  |  ALl rights Reserved | Terms of service | Privacy
            </p>

            </ul>
            </div>
    )
}