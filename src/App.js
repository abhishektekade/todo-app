import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: <h1 id="title">This is a Todo App!!</h1>,
      newTodo: '',
      todos: []
    };
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  formSubmitted(event) {
    event.preventDefault();

    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos];
    todos[index] = {
      ...todos[index],
      done: event.target.checked
    };
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos]; // copy the array
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title, // can also do ...todo
        done: true
      };
    });

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <NewTodoForm
            newTodo={this.state.newTodo}
            formSubmitted={this.formSubmitted.bind(this)}
            newTodoChanged={this.newTodoChanged.bind(this)} />
        <button onClick={() => this.allDone()}>All Done</button>
        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}/>
          <div>
            <p id="react">Made with React</p>
          </div>
      </div>
      
    );
  }
}

export default App;