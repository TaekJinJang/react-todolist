import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import Calender from "./calender";
import TodoMenus from "./components/TodoMenus";
import { FaHome } from "react-icons/fa";
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
        <div className="footer_bar">
          <div className="f_con home">
            <div className="img-width">ssasdasd</div>
            <FaHome size="500" />
            <p>홈</p>
          </div>
          <div className="f_con">
            <span>
              <FaHome />
              <p>홈</p>
            </span>
          </div>
        </div>{" "}
        <TodoCreate />
      </TodoTemplate>
      <FaHome />
    </>
  );
}

export default App;
