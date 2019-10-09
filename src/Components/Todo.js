import React, { useReducer } from "react";
import { reducer } from '../reducers/reducer';

const Todo = props => {
    const [dispatch] = useReducer(reducer);
    return (
        <div className={`item${props.todo.completed ? ' completed' : ''}`}
            onClick={() => dispatch({ type: "TOGGLE_COMPLETED" })}
        >
            <p>{props.todo.item}</p>
        </div>
    );
};

export default Todo;