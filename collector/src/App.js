import React from "react";
import "./App.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction"  
import "react-week-calendar/dist/style.less";
import Header from "./Header/Header.js";
import Footer from "./footer/footer.js";
import CheckIn from "./Btn/Btn.js"
import CheckOut from "./Btn/Btn.js"
import EmpDumb from "./Data/EmpDumb.json";
import McpDumb from "./Data/McpDumb.json";
import VehicleDumb from "./Data/VehicleDumb.json";
import { useState } from "react";


function App() {
    const [Employee, SetEmployee] = useState(EmpDumb);

    const [Vehicle, SetVehicle] = useState(VehicleDumb);

    const [Mcp, SetMcp] = useState(McpDumb);

    const events = [
        { title: "Tân bình 01", date: new Date() },
        { title: "Tân bình 02", date: new Date("2022-11-28") },
        { title: "Tân bình 03", date: new Date("2022-11-29") },
        { title: "Tân bình 04", date: new Date("2022-11-29:16:59:00") },
    ];
    return (
        <div className="background">
            <Header />
            <div className="calendar">
                <FullCalendar
                    defaultView="timeGridWeek"
                    header={{
                        left: "prev,next",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    plugins={[dayGridPlugin, timeGridPlugin,]}
                    events={events}
                />

            </div>
            <div className="button">
                <CheckIn name="Check-in" />
                <CheckOut name="Check-out" />
            </div>
            <Footer />
        </div>
    );
}

export default App;
