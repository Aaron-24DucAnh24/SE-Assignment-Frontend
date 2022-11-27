import logo from './logo.svg';
import React from "react";
import './App.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.less';

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

function App() {
  const events = [{ title: "today's event", date: new Date() }];
  return (
    <div className="App">
      {/* <FullCalendar
        defaultView="timeGridWeek"
        header={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        plugins={[dayGridPlugin, timeGridPlugin]}
        events={events}
      /> */}
      <WeekCalendar/>
    </div>
  );
}

export default App;
