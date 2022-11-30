import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Datepicker.css"

function Datepicker() {
    const [startDate, setStartDate] = useState(new Date());
    return (<div className="calendar">
        Calendar
        <div className="date">
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
            />
        </div>
    </div>
    );
}

export default Datepicker;
