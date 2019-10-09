import React, { useState } from "react";

function TodoForm({ dispatch }) {
    const [todo, setTodo] = useState("");

    const handleChanges = e => {
        setTodo(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD_NEW_TODO", payload: todo });
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Create New Task"
                value={todo}
                onChange={handleChanges}
            />
            <button>Add Task</button>
        </form>
    );
}
export default TodoForm;