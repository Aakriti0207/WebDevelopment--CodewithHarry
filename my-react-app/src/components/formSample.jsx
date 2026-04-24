import React from "react";
import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    const[age, setAge] = useState("");
    const[submit, setSubmit] = useState(false);
    const handleSubmit = () => {
        setSubmit(true);
    }
    return(
        <>
        <input 
        placeholder="Please enter your name-"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        >
        </input>
        <input 
        placeholder="Please enter your age-"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        >
        </input>
        <button onClick={handleSubmit}>
            Submit
        </button>
        {submit && <p>Form Submitted</p>}
        </>
    );
}
export default Form;