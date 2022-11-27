import React from "react";
import "./App.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "react-week-calendar/dist/style.less";
import Header from "./Header/Header";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

function App() {
    const events = [
        { title: "today's event", date: new Date() },
        { title: "lol", date: new Date("2022-11-28") },
        { title: "lol", date: new Date("2022-11-29") },
        { title: "lol", date: new Date("2022-11-29:16:59:00") },
    ];
    return (
        <div className="calendar">
            <Header />
            <FullCalendar
                defaultView="timeGridWeek"
                header={{
                    left: "prev,next",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                plugins={[dayGridPlugin, timeGridPlugin]}
                events={events}
            />
            <button>checkin</button>
        </div>
    );
}

export default App;
