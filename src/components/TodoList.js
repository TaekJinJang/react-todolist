import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";

const TodoListBlock = styled.div`
  flex: 1; //내 영역 꽉 채우기
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto; // y축에 스크롤바가 필요하면 스크롤바를 생성
  //background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function TodoList() {
  const todos = useSelector((state) => state.todoReducer);
  let dispatch = useDispatch();
  let [Date, SetDate] = useState("");
  useEffect(() => {
    let date = localStorage.getItem("date");
    SetDate(date);
  });
  return (
    <TodoListBlock>
      {todos.map((todo) => {
        return todo.date == Date ? (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            done={todo.done}
          />
        ) : null;
      })}
    </TodoListBlock>
  );
}

export default TodoList;
