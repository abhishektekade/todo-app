import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message : 'Todo App',
      newTodo: '',
      todos: []
    };
  }
  newTodoChanged(event){
    this.setState({
      newTodo: event.target.value
     })
  }

  formSubmitted(event){
    event.preventDefault();
    this.setState({
      newTodo: '',
      todos: [...this.state.todos,  {
        title: this.state.newTodo,
        done: false
      }]
     });
  }
  toggleTodoDone(event){
    console.log(event.target.checked)
    const todos = [...this.state.todos]
    this.setState({
      newTodo: '',
      todos: [...this.state.todos,  {
        title: this.state.newTodo,
        done: false
      }]
     });
  }


  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={(event) => this.formSubmitted(event)}>  
        <label  htmlFor="newTodo">New Todo</label>
        <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" value={this.state.newTodo}/>
        <button type="submit">Add Todo</button>
        </form>
        <ul>{this.state.todos.map((todo, index)=>{
          return (<li key={todo.title} >
            <input onChange={(event) => this.toggleTodoDone(event, index)} type="checkbox"/>{todo.title}
            </li>)
        })}</ul>
      </div>
    );
  }
}

export default App;