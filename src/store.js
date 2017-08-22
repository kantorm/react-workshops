import { createStore, combineReducers } from "redux";

//actions
export const addTodo = (text) => ({
  type: "ADD",
  payload: {text, id: new Date()},
});

export const removeTodo = (todoId) => ({
  type: "REMOVE",
  payload: todoId
});


//reducer
const initialState = [
  {
    id: 1,
    text: "todo 1",
  },
  {
    id: 2,
    text: "todo 2",
  }
];

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {

  case "ADD":
    return [...state, action.payload];

  case "REMOVE":
    return state.filter(todo => todo.id !== action.payload);

  default:
    return state;
  }
};

//store
const store = createStore(combineReducers({ todos: todosReducer }));

export default store;
