import React, { Component } from "react";
import { Todos } from "../todos/todos";
import "./app.css";

// Life cycle methods
// mounting
  // constructor
  // static getDerivedStateFromProps // create a state based on received props
  // render
  // componentDidMount // cuase side-effects // calling API, subscribing to a service, listening to an event (scroll event on body, window resize), updating comp state
// update // whenever there is a change in state or props
  // static getDerviedStateFromProps // create a state based on received props
  // shouldComponentUpdate // decision point return boolean
  // render
  // static getSnapshotBeforeUpdate
  // componentDidUpdate
// unmounting
  // componentWillUnmount // remove event listeners, unsubscribe from services

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('APP', props);
    this.name = "App";
    this.state = {
      appName: 'todoapp'
    }
  }

  /* componentDidMount() {
    console.log(
      "componentDidMount, I get called only once. I get called when the component is created and attached to the dom."
    );
  }

  componentWillUnmount() {
    console.log(
      "componentWillUnmount, I get called only once. I get called when the component is detached from the dom and destroyed."
    );
  }

  shouldComponentUpdate() {}

  static getDerivedStateFromSnapshot() {} */

  render() {
    return (
      <div className="app">
        <h1 className="app-title">TODOAPP</h1>
        <Todos  />
      </div>
    );
  }
}
