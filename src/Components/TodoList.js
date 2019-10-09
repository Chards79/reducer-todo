import React, { useReducer } from 'react';
import Todo from './Todo';
import { reducer } from '../reducers/reducer';

const TodoList = props => {
    const todos = props.todos.todos;
    const [dispatch] = useReducer(reducer);
    console.log(props);

    return (
        <div className="todo-list">
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-btn" onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;