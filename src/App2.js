import React, { Component } from 'react';
import { createStore } from 'redux';
// import { Provider, connect } from 'react-redux'
// middleware

const initialState = {
    name: "Hello"
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "CHANGE_STATE":
            // // clone of previous state
            // const tempState = Object.assign({}, prevState) // Object.assign(target, source)

            // tempState.name = action.data;

            // const newState = Object.assign(prevState, tempState);

            // return newState;

            return {...prevState, ...{name: action.data}}

        default:
            return prevState
    }
}

const store = createStore(reducer);

class App extends Component {
    render() {
        return (

                <div>
                    Redux
          
                <div>
                        <button onClick={this.onClickChangeState}> Change State </button>
                        <button onClick={this.onClickShowState}> Show State </button>
                    </div>
                </div>

        );
    }

    onClickChangeState = () => {

        // create action 
        let action = {
            type: "CHANGE_STATE",
            data: "World"
        }

        store.dispatch(action);
    }

    onClickShowState = () => {
        console.log(store.getState())
    }

}

export default App;
