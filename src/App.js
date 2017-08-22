import React, { Component } from 'react';
import {connect} from "react-redux";
import logo from './logo.svg';
import './App.css';
import {addTodo, removeTodo} from "./store";


export class TodoAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  updateValue = ({target: {value}}) => {
    this.setState({value})
  }

  addTodo = () => {
    this.props.addTodo(this.state.value);
    this.setState({value: ""});
  }

  render() {
    return (
      <div>
        <input onChange={this.updateValue} value={this.state.value}/>
        <button onClick={this.addTodo}>Add todo</button>
      </div>
    );
  }
}

export class TodoList extends Component {
  render() {
    const {todos} = this.props;
    return (
      <div>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => this.props.removeTodo(todo.id)}>REMOVE</button>
            </li>
          )
        })}
      </div>
    );
  }
}

class App extends Component {
  addTodo = (todo) => this.props.addTodo(todo);

  removeTodo = (todoId) => this.props.removeTodo(todoId);

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <TodoAdd addTodo={this.addTodo}/>
        <TodoList todos={this.props.todos} removeTodo={this.removeTodo}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
