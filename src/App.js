import React, { Component } from 'react';
import './App.css';
import ToDo from '/Users/kylecarolina/bloc/my-app/src/components/ToDos.js';

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

  handleDelete(index){
    const todos = this.state.todos.slice();
     console.log('handleDelete()', index, todos);
     todos.splice(index, 1);
     this.setState({todos});
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
       <form onSubmit= { (e) => this.onSubmit(e)} > 
          <input type= "text" value={this.state.newTodoDescription} onChange={ (e)=> this.handleChange(e)}/>
          <input type= "submit" />
       </form>
      </div>
      );
    }
  }

export default App;
