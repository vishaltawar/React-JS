import React, { useState } from 'react';
import "../index.css";
var count = 0;

function Hooks() {

    let inc = () => {

        setCount(state += 1);
    }
    let dec = () => {

        setCount(state -= 1);
    }
    let [state, setCount] = useState(0);
    return (
        <>
            <div id='main'>
                <h3 id='value'>{state}</h3>
                <button id='inc' onClick={inc}> +</button>
                <button id='dec' onClick={dec}> -</button>
            </div>
        </>
    )
}
export default Hooks;
