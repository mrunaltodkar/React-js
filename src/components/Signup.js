import React, { Component } from 'react'
import Logog from './images/logo_coupons.png'
import axios from 'axios'

export default class Signup extends Component {
    state = {
        username: '',
        number: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8085/signUp', {
            username: this.state.username,
            number: this.state.number,
            email: this.state.email,
            password: this.state.password
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    navStyle = {
        color: 'rgb(14, 13, 13)'
    }

    render() {

        return (

            <div id="vertical-flip" className="card">
                <div className="flip">
                    <div className="front">
                        <div className="logo" color="red">
                            <img src={Logog} alt="Netlflix" />
                        </div>
                    </div>

                    <div className="back">
                        <form onSubmit={this.handleSubmit}>
                            <div className="box-input">
                                <input style={this.navStyle} type="text" id="username" name="text" placeholder="Enter your Name" value={this.state.username} onChange={this.handleChange} required />
                                <input style={this.navStyle} type="tel" id="number" name="number" placeholder="Enter your Mobile number" value={this.state.number} onChange={this.handleChange} required />
                                <input style={this.navStyle} type="email" id="email" name="email" placeholder="Enter your Email" value={this.state.email} onChange={this.handleChange} required />
                                <input style={this.navStyle} type="password" id="password" name="password" placeholder=" Set your password" value={this.state.password} onChange={this.handleChange} required />
                                <input style={this.navStyle} type="password" id="password" name="password" placeholder=" confirm your password" required />
                                <button style={this.navStyle} onClick={event =>  window.location.href='http://localhost:3000/login'} type="submit">SIGNUP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
} 