import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
const GlobalStyle = createGlobalStyle`
body{
  background : #e9ecef;
  text-align: center;
  margin : 0;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate/>
      </TodoTemplate>
    </>
  );
}

export default App;
