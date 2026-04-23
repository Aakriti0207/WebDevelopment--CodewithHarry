import React from "react";

var count = 0;
function CounterProgram() {
    const handleIncrement = () => {
        count = count + 1;
        console.log(count);
    }
    const handleDecrement = () => {
        count = count - 1;
        console.log(count);
    }
    const handleReset = () => {
        count = 0;
        console.log(count);
    }
    const onTypeChange = (event) => {
        console.log(event.target.value);
        // target = the input element
        // value = what user typed
        // Example flow
        /*User types:
        Hello Console shows:
        H
        He
        Hel
        Hell
        Hello*/
    }
    return (
        <>
        <h1>Counter Program- Console</h1>
        <button onClick={handleIncrement}>
            Increment
        </button>
        <button onClick={handleDecrement}>
            Decrement
        </button>
        <button onClick={handleReset}>
            Reset
        </button>
        <input onChange={onTypeChange} placeholder="type..."></input>
        {/* onChange = event that fires every time input changes */}
        </>

    )
}

export default CounterProgram;