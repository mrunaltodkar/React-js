import React, { Component } from 'react'
import Logog from './images/logo_coupons.png'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Signin extends Component {
    state = {
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
        axios.post('http://localhost:8085/signIn', {
            email: this.state.email,
            password: this.state.password
        }).then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    // componentDidMount() {
    //     axios.get('http://localhost:8085/signIn').then(res => {
    //         this.setState({
    //             user: res.data
    //         });
    //     });
    // }

    navStyle = {
        color: 'rgb(14, 13, 13)'
    }

    render() {
        return (
            <div id="vertical-flip" className="card" >
                <div className="flip">
                    <div className="front">
                        <div className="logo" color="red">
                            <img src={Logog} alt="Netlflix" />
                        </div>
                    </div>
                    <div className="back">
                        <form onSubmit={this.handleSubmit}>
                            <div className="box-input" >
                                <input style={this.navStyle} type="email" id="email" name="email" placeholder="Enter your Email" value={this.state.email} onChange={this.handleChange} required />
                                <input style={this.navStyle} type="password" id="password" name="password" placeholder="Enter your password" value={this.state.password} onChange={this.handleChange} required />
                                
                                    <button onClick={event =>  window.location.href='http://localhost:3000/welcome'} type="submit">SUBMIT</button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}