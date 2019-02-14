import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component{
    render() {
        return(
            <div>
                { 4<5 &&
                <div>
                    {this.props.myName}
                </div>
                }

               <div>
                   <button onClick={this.onClickMakeAPICall}>Make API Call</button>
               </div>

               <div>
                   {JSON.stringify(this.props.apiresult.error)}
               </div>
            </div>
        )
    }

    onClickMakeAPICall = () =>{
        const url = 'https://jsonplaceholder.typicode.com/todos/1';

        this.props.dispatch(this.getUserDetails(url))
    }

    getUserDetails = url => {

        return function(dispatch) {

            return fetch(url)
                .then( res => res.json())
                .then( response => dispatch(
                    {
                        type: "SUCCESS",
                        data: response
                    }
                ))
                .catch(
                    error => dispatch(
                        {
                            type: "FAILURE",
                            data: error.message
                        }
                    )
                )
        }
    }
}


const mapStateToProps = state => {
    return {
        myState: state,
        myName: state.name,
        apiresult: state.loginAPIresult
    }
}

export default connect(mapStateToProps)(Login);