import React from "react";
import { useState } from "react"; // we use this hook to print components on the webpage


function CounterProps(){
    const [ count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count => count + 1);
    }
    const handleDecrement = () => {
        setCount(count => count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }
    return (
        <>
            <h1>Counter Program - Using State</h1>
            <h1> { count } </h1>
            <button onClick={handleIncrement}>
                Increment
            </button>
            <button onClick={handleDecrement}>
                Decrement
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
    )
}

export default CounterProps;