import React from "react";

// function based
const Welcome = (props) => {
    return (
    <div>
        <h1>
            Welcome {props.name}
        </h1>
        {props.children}
    </div>
    )
}

export default Welcome