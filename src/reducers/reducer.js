export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589,
            todos: []
        }
    ]
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NEW_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now(),
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]

            };
        case "TOGGLE_COMPLETED":
            let updatedTasks = state.todos.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                } else {
                    return item;
                }
            });
            return {
                ...state,
                todos: updatedTasks
            };
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter(item => !item.completed)
            };
        default:
            return state;
    }
};