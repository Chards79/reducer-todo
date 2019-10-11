import React from "react";

const Todo = props => {
    const toggleCompleted = () => {
        props.toggleCompleted(props.item.id);
    };

    return (
        <div>
            <div className={`item${props.item.completed ? ' completed' : ''}`}
                onClick={toggleCompleted}> {props.item.item}
            </div>
        </div>
    );
};

export default Todo;