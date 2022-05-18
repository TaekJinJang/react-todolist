import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import TodoTemplate from "../../TodoTemplate";
import TodoCreate from "../../TodoCreate";
import TodoFooter from "../../TodoFooter";
import "./MainPage.css";
import { Button } from "react-bootstrap";
import Calender from "../../img/Calender.jpg";
import { Link, Route, Switch, useHistory } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body{
  background : #e9ecef;
  text-align: center;
  margin : 0;
}
`;

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 700px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 96px;

  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  width: 512px;
  height: 690px;
`;

function MainPage() {
  let [ID, setID] = useState("");
  const history = useHistory();
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <h1 className="Login">Login</h1>
        <img src={Calender} className="Login-img mx-5"></img>
        {/* <div>이메일 로그인 시스템입니다.</div> */}
        <div className="main">
          <form>
            <label className="m-5"> Email </label>
            <input
              type="email"
              onChange={(e) => {
                setID(e.target.value);
              }}
            />
            <br />
            <Button
              variant="outline-primary m-5"
              onClick={() => {
                if (ID == "xorwls1500@naver.com") {
                  history.push("/calendar");
                } else {
                  alert("이메일을 정확히 입력해주세요.");
                }
              }}
            >
              로그인
            </Button>{" "}
            <Button variant="outline-success ">회원가입</Button>{" "}
          </form>
        </div>

        <TodoFooter />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default MainPage;
