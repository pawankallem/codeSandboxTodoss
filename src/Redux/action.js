import { ADD_TODO, EDIT_TODO } from "./actionType.js";

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const editTodo = (payload) => ({ type: EDIT_TODO, payload });
