import { ADD_TODO, EDIT_TODO } from "./actionType.js";

let initState = {
  todos: []
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    default:
      return state;
  }
};
