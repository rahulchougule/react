import React, { Component } from 'react';

export default class Login extends Component{
    render() {
        return(
            <div>
               <button onClick={this.onClickLoginButton}> Login page.</button>
            </div>
        )
    }

    onClickLoginButton = () =>{
        const h = this.props.history;

        h.push('/homepage');
    }
}