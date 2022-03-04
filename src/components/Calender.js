import React, { useState, Component } from "react";
import styled from "styled-components";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

const events = [
  {
    id: 1,
    title: "event 1",
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

class Calendar extends Component {
  render() {
    return (
      <div className="container mt-4 mb-4">
        <FullCalendar
          initialView="dayGridMonth"
          headerToolbar={{
            start: "today",
            center: "title",
            end: "prev,next",
          }}
          plugins={[dayGridPlugin, interactionPlugin]}
          events={events}
          eventColor="green"
          dateClick={this.handleDateClick}
        />
      </div>
    );
  }
  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
}
export default Calendar;
