import React, { Component } from 'react';
import './App.css';
import ToDo from 'ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' }); 
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }
  
  render(){
    return(
      <div className="App">
       <ul>
         {this.state.todos.map(( todo, index)=>
         <ToDo
            key={ index }
            isCompleted= {todo.isCompleted}/*why todo here and this below?*/
            description= {todo.description}
            toggleComplete= { ()=> this.toggleComplete(index) }
            handleDelete= { ()=> this.handleDelete(index) }
          />  
       )};
       </ul>
       <form onSubmit= { (e) => this.onSubmit(e)} >/*why not empty parameter*/
          <input type= "text" value={this.state.newTodoDescription} onChange={ (e)=> this.handleChange(e)}/>
          <input type= "submit" />
       </form>
      </div>
      );
    }
  }

export default App;
