import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message : 'Todo App',
      newTodo: ''
    };
  }
  newTodoChanged(event){
    this.setState({
      newTodo: event.target.value
     })
  }

  formSubmitted(event){
    event.preventDefault();
    console.log(this.state.newTodo);
  }


  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={(event) => this.formSubmitted(event)}>  
        <label  htmlFor="newTodo">New Todo</label>
        <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" />
        <button type="submit">Add Todo</button></form>
      </div>
    );
  }
}

export default App;