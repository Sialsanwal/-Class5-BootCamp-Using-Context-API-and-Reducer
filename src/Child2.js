import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';

const Child2 = () => {
    let [state, dispatch] = useReducer(counterReducer, 1);
    console.log(state)
    return (
        <div>
            <h2> This is Child2 using Reducer</h2>
            <h2>Value of Reducer is:{state}</h2>
            <button onClick={() => dispatch('INCREMENT')}> Increment Reducer</button>
        </div>
    )
}

export default Child2;