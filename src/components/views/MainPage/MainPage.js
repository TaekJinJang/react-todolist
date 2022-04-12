import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import TodoTemplate from "../../TodoTemplate";
import TodoCreate from "../../TodoCreate";
import TodoFooter from "../../TodoFooter";
import "./MainPage.css";

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
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <div className="main">
          <h1>메인페이지입니다</h1>
        </div>
        <TodoFooter />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default MainPage;
