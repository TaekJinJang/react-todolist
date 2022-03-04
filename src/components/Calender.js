import React, { useState, Component } from "react";
import styled from "styled-components";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

class Calendar extends Component {
  render() {
    return (
      <div>
        <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
      </div>
    );
  }
}
export default Calendar;
