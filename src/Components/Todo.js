import React from "react";

const Todo = props => {
    const toggleCompleted = () => {
        props.toggleCompleted(props.item.id);
    };

    return (
        <div>
            <div onClick={toggleCompleted}> {props.item.item}</div>
        </div>
    );
};

export default Todo;