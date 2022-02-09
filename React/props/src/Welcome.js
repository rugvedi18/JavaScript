import React from "react";

const Welcome = (props) => {
    return (
    <div>
        <h1 style={{color:"red"}}>
            Welcome {props.name}
        </h1>
        {props.children}
    </div>
    )
}

export default Welcome;