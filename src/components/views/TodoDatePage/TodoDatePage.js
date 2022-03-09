import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "../../TodoTemplate";
import TodoHeadDate from "../../TodoHeadDate";
import TodoList from "../../TodoList";
import TodoCreate from "../../TodoCreate";
import TodoFooter from "../../TodoFooter";

const GlobalStyle = createGlobalStyle`
body{
  background : #e9ecef;
  text-align: center;
  margin : 0;
}
`;

function TodoToday() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeadDate />
        <TodoList />
        <TodoFooter />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default TodoToday;
