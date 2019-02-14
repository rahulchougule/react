import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Login from './containers/Login';
import thunk from 'redux-thunk';

const initialState = {
    name: "Hello",
    loginAPIresult: {
        success: false,
        error: null,
        response: null
    }
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "CHANGE_STATE":
            return {...prevState, ...{name: action.data}}

        case "SUCCESS":
            return {...prevState,...{
                apiresult: {
                    success: true,
                    error: null,
                    response: action.data
                }
            }}


        case "FAILURE":
            return {...prevState, ...{
                apiresult: {
                    success: false,
                    error: action.data,
                    response: null
                }
            }}

        default:
            return prevState
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                Hello
                <div>
                    <button onClick={this.onClickShowState}>Show State</button>
                </div>

                <div>
                    <button onClick={this.onClickChangeState}>Change State</button>
                </div>

                <div>
                    <Login/>
                </div>
            </Provider>
        );
    }

    onClickShowState = () => {
        console.log(store.getState())
    } 

    onClickChangeState = () => {
        const action = {
            type: "CHANGE_STATE",
            data: "World"
        }

        store.dispatch(action);
    } 

}

export default App;
