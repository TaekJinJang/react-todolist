import React, { lazy, Suspense, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createGlobalStyle } from "styled-components";

import { Button } from "react-bootstrap";

import { Link, Route, Switch, useHistory } from "react-router-dom";
import Calender from "./components/views/CalenderPage/Calender";
import TodoDate from "./components/views/TodoDatePage/TodoDatePage";
let TodoToday = lazy(() => {
  return import("./components/views/LandingPage/TodoTodayPage.js");
});
let RegisterPage = lazy(() => {
  return import("./components/views/RegisterPage/RegisterPage.js");
});
let LoginPage = lazy(() => {
  return import("./components/views/LoginPage/LoginPage.js");
});

const GlobalStyle = createGlobalStyle`
body{
  background : #e9ecef;
  text-align: center;
  margin : 0;
}
`;

function App() {
  const history = useHistory();
  return (
    <>
      <div className="black-nav">
        <div className="text-center" onClick={() => history.push("/home")}>
          오늘 뭐하지 ?
        </div>
      </div>
      <Switch>
        <Route exact path="/home">
          <Suspense fallback={<div>로딩중입니다.</div>}>
            <div>집입니다</div>
          </Suspense>
        </Route>
        <Route exact path="/login">
          <Suspense fallback={<div>로딩중입니다.</div>}>
            <LoginPage />
          </Suspense>
        </Route>
        <Route exact path="/">
          <Suspense fallback={<div>로딩중입니다.</div>}>
            <TodoToday />
          </Suspense>
        </Route>
        <Route exact path="/calendar">
          <Calender />
        </Route>
        <Route exact path="/TodoDate">
          <TodoDate />
        </Route>
      </Switch>
    </>
  );
}

export default App;
