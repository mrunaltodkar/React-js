import React from 'react';
import Signin from './Signin';
import Signup from './Signup';
import Nav from './Nav';
import './Coupons.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Welcome from './Welcome';

function Coupons() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Signin} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/welcome" component={Welcome} />
                    
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default Coupons;