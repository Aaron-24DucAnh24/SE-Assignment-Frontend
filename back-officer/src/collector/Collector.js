import Header from "./Header/Header.js";
import Footer from "./footer/footer.js";
import CheckIn from "./Btn/Btn.js"
import CheckOut from "./Btn/Btn.js"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import React from "react";

const Collector = () => {
    const events = [
        { title: "Tân bình 01", date: new Date() },
        { title: "Tân bình 02", date: new Date("2022-11-28") },
        { title: "Tân bình 03", date: new Date("2022-11-29") },
        { title: "Tân bình 04", date: new Date("2022-11-29:16:59:00") },
    ];
    return (
        <div>
            <div className="background">
                <Header />
                <div className="calendarCollector">
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
        </div>
    )

};
export default Collector;
