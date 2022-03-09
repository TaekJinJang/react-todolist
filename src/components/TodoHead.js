import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BsCalendarCheck } from "react-icons/bs";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  let dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer);
  const undoneTasks = todos.filter((todo) => !todo.done);

  let [DateString, SetDateString] = useState("");
  let [DayName, SetDayName] = useState("");
  const today = new Date();
  useEffect(() => {
    let date = localStorage.getItem("date");
    const dateString =
      date == null
        ? today.toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : new Date(
            date.slice(0, 4),
            date.slice(5, 7) - 1,
            date.slice(8)
          ).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

    const dayName =
      date == null
        ? today.toLocaleDateString("ko-KR", { weekday: "long" })
        : new Date(
            date.slice(0, 4),
            date.slice(5, 7) - 1,
            date.slice(8)
          ).toLocaleDateString("ko-KR", { weekday: "long" });

    SetDateString(dateString);
    SetDayName(dayName);
    // return () => {
    //   localStorage.removeItem("date");
    // };
  }, []);

  return (
    <TodoHeadBlock>
      <h1>{DateString}</h1>
      <div className="day">{DayName}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
