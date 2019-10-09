import React, { useReducer } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import { reducer, initialState } from './reducers/reducer';


function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <h3>(Now With Reducer!)</h3>
      <TodoForm dispatch={dispatch} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
