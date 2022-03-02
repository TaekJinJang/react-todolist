import React from "react";
import styled from "styled-components";

const TodoMenusBlock = styled.div`
  width: 512px;
  height: 80px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-bottom-radius: 16px;
  border: 0.5px solid gray;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  .menus {
    display: flex;
    justify-content: space-around;
  }
  margin-bottom: 32px;
`;

function TodoMenus({ children }) {
  return <TodoMenusBlock>{children}</TodoMenusBlock>;
}
export default TodoMenus;
