import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Datepicker.css";

function Datepicker(props) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="datePicker">
            Calendar
            <div className="date">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                        setStartDate(date);
                        props.changeDate(true);
                    }}
                />
            </div>
        </div>
    );
}

export default Datepicker;
