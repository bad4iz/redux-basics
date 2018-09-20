import { combineReducers } from 'redux';

import { default as todosReducer } from "./todo";
import { default as filterReducer } from "./filter";

// const reducer = combineReducers({
//   todos,
//   filter
// });
function reducer(state = {}, action) {
  return {
    todos: todosReducer(state.todos, action),
    filter: filterReducer(state.filter, action)
  }
}

export default reducer;