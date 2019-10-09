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
        case "TOGGLE_COMPLETED":
            const toggleItem = {};
        case "CLEAR_COMPLETED":
            const clearTodo = {};

            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        default:
            return state;
    }
};