import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
// const nextId = useRef(5);
const initialTodos = [
  {
    id: 1,
    title: "프로젝트 생성하기",
    date: "2022-03-10",
    done: true,
  },
  {
    id: 2,
    title: "컴포넌트 스타일링하기",
    date: "2022-03-08",
    done: true,
  },
  {
    id: 3,
    title: "Context 만들기",
    date: "2022-03-01",
    done: false,
  },
];

function todoReducer(state = initialTodos, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}
let store = createStore(combineReducers({ todoReducer }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
