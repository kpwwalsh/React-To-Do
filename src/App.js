import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ]
    };
  }
  
  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) => 
             <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
            )}
          </ul>
        </div>
      );
    }
  }

export default App;
