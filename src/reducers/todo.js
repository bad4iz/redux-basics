import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../actions/todo';

function todoReducer(state = {}, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                title: action.title,
                completed: false
            };

        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                completed: !state.completed
            });

        case EDIT_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                title: action.title
            });

        default:
            return state;
    }
}

function reducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, todoReducer(undefined, action)];

        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);

      case TOGGLE_TODO:
            return state.map(todo => todoReducer(todo, action));

        case EDIT_TODO:
            return state.map(todo => todoReducer(todo, action));

        default:
            return state;
    }
}

export default reducer;