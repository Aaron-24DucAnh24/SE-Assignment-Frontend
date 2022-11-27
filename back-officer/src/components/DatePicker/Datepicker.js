import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Datepicker() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
            />
        </div>
    );
}

export default Datepicker;
