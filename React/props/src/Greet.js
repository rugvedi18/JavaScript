import React from "react";
import { Component } from "react";

// class based
class Greet extends Component {
    render() {
        return <h1>Greet {this.props.name}</h1>
    }

}

export default Greet