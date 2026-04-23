import React from 'react';

function Hello() {  //Components must start with capital letter
    const handleClick = () => {
        alert("Hello World!");
    };
    return (
        <div>
            <h2>
                Hello! My name is Aakriti!
            </h2>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}

export default Hello;