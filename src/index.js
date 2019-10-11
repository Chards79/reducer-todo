import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import { reducer, initialState } from './reducers/reducer';

import './App.css';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNewTodo = item => {
    dispatch({
      type: "ADD_NEW_TODO",
      payload: item
    });
  };

  const toggleCompleted = id => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: id
    });
  };

  const clearCompleted = () => {
    dispatch({
      type: "CLEAR_COMPLETED",
    });
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <h3>(Now With Reducer!)</h3>
      <TodoForm clearCompleted={clearCompleted} addNewTodo={addNewTodo} />
      <TodoList todos={state.todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);