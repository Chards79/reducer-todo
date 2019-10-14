import React, { useState } from "react";

const TodoForm = props => {
    const [todo, setTodo] = useState("");

    const changeHandler = event => {
        setTodo(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();
        props.addNewTodo(todo);
        setTodo('');
    };

    const clearCompleted = () => {
        props.clearCompleted();
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    value={todo}
                    placeholder="Create New Task"
                    onChange={changeHandler} />
                <button>Add Task</button>
            </form>
            <button onClick={clearCompleted}>Clear Completed Tasks</button>
        </div>
    );
}
export default TodoForm;