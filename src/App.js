import React, { lazy, Suspense, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createGlobalStyle } from "styled-components";

import { Button } from "react-bootstrap";
import axios from "axios";
import { Link, Route, Switch, useHistory } from "react-router-dom";

let TodoToday = lazy(() => {
  return import("./TodoToday.js");
});

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
      <div className="black-nav">
        <div className="text-center">오늘 뭐하지 ?</div>
      </div>

      <Route path="/home">
        <Suspense fallback={<div>로딩중입니다.</div>}>
          <div>집입니다</div>
        </Suspense>
      </Route>
      <Route path="/today">
        <Suspense fallback={<div>로딩중입니다.</div>}>
          <TodoToday />
        </Suspense>
      </Route>
      <Route path="/calendar">
        <Suspense fallback={<div>로딩중입니다.</div>}>
          <div>캘린더입니다.</div>
        </Suspense>
      </Route>
    </>
  );
}

export default App;
