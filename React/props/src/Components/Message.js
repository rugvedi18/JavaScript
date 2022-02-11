import React from "react";
import { Component } from "react";

class Message extends Component {

constructor() {
    super()
    this.state = {
        message: 'New message'
    }
}

changeMessage() {
this.setState({
    message: "hello meet at 5 pm"
})
}


render() {
    return (
    <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Open</button>
    </div>
    )
}
}

export default Message