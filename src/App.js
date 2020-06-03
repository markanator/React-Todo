import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './components/Todo.css'


const list = [
  {
    name: 'This is my first to do!',
    id: 1,
    completed: false
  },
  {
    name: 'This is my second to do!',
    id: 2,
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state={
      list
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // Class methods to update state
  addTask = (e, item) => {
    e.preventDefault();
    const newTask = {
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newTask]
    });
  };

  toggleItem = itemId => {
    console.log(itemId);
    // map over array
    // when we find the item we clicked, toggle the completed field
    // otherwise return the item untouched
    this.setState({
      list: this.state.list.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    // if item is completed (item.completed is true) then filter out
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <header>
        <h1>Welcome to your Todo App!</h1>
        </header>
        <div className='list-container'>
          <TodoList 
            listTodo={this.state.list}
            toggleItem={this.toggleItem}
          />
          <TodoForm
            addTask={this.addTask}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
