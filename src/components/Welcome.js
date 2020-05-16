import React, { Component } from 'react'

export class Welcome extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div>
                <h1>Welcome {this.state.props}</h1>
            </div>
        )
    }
}

export default Welcome
