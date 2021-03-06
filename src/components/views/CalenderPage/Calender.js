import React, { useState, Component } from "react";
import styled from "styled-components";
import TodoDatePage from "../TodoDatePage/TodoDatePage";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
const events = [
  {
    id: 1,
    title: "event 1",
    start: "2022-03-14",
    end: "2022-03-14",
  },
  {
    id: 6,
    title: "event 2",
    start: "2022-03-14",
    end: "2022-03-14",
  },
  {
    id: 2,
    title: "event 2",
    start: "2022-03-10",
    end: "2022-03-12",
  },
  { id: 3, title: "event 3", start: "2022-03-01" },
  { title: "event 1", date: "2022-03-06" },
];

// const todos = useSelector((state) => state.todoReducer);
class Calendar extends Component {
  render() {
    return (
      <div className="container mt-4 mb-4">
        <FullCalendar
          initialView="dayGridMonth"
          //locale="ko"

          headerToolbar={{
            start: "today",
            center: "title",
            end: "prev,next",
          }}
          plugins={[dayGridPlugin, interactionPlugin]}
          events={this.props.date}
          eventColor="green"
          // dateClick={this.handleDateClick}
          dateClick={this.goToTheater}
        />
      </div>
    );
  }
  handleDateClick = (arg) => {
    // bind with an arrow function
  };
  goToTheater = (arg) => {
    this.props.history.push("/TodoDate");
    localStorage.setItem("date", arg.dateStr);
    console.log(localStorage.getItem("date"));
  };
}
const store = (state) => ({
  date: state.todoReducer,
});

export default connect(store)(withRouter(Calendar));
