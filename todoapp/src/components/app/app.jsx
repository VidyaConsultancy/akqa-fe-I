import { Component } from 'react';
import { Todos } from '../todos/todos';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="app-title">TODOAPP</h1>
        <Todos />
      </div>
    )
  }
}
