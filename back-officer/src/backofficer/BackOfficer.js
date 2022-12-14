import Datepicker from "./DatePicker/Datepicker.js";
import Header from "./Header/Header.js";
import Confirm from "./Confirm/btnConfirm";
import ListDisplay from "./ListDisplay/ListDisplay.js";
import Footer from "./footer/footer.js";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-router-dom";
import React from "react";
import Popup from "../other/Popup.js";

const BackOfficer = () => {
    // popup
    const [BtnPopup, setBtnPopup] = useState(0);

    ///////////////////////////////////////////////
    // get Collector data
    const [Collector, setCollector] = useState([]);

    useEffect(() => {
        getCollectors();
    }, []);

    const getCollectors = async () => {
        const response = await axios.get(
            "https://localhost:7271/api/Collector"
        );
        setCollector(response.data);
    };
    ///////////////////////////////////////////////
    // get Collector data
    const [Janitor, setJanitor] = useState([]);

    useEffect(() => {
        getJanitors();
    }, []);

    const getJanitors = async () => {
        const response = await axios.get("https://localhost:7271/api/Janitor");
        setJanitor(response.data);
    };
    ///////////////////////////////////////////////
    // get Vehicle data
    const [Vehicle, setVehicle] = useState([]);

    useEffect(() => {
        getVehicles();
    }, []);

    const getVehicles = async () => {
        const response = await axios.get("https://localhost:7271/api/Vehicle");
        setVehicle(response.data);
    };
    ///////////////////////////////////////////////
    // get Mcp data
    const [Mcp, setMcp] = useState([]);

    useEffect(() => {
        getMcps();
    }, []);

    const getMcps = async () => {
        const response = await axios.get("https://localhost:7271/api/MCP");
        setMcp(response.data);
    };

    const [calendarChange, setCalendarChange] = useState(false);

    const setCalendarChangeHandler = (bool) => {
        setCalendarChange(bool);
    };
    return (
        <div>
            <Popup trigger={BtnPopup} setTrigger={setBtnPopup} />
            <Header setTrigger={setBtnPopup} />
            <div className="Body">
                <Datepicker changeDate={setCalendarChangeHandler} />
                <ListDisplay
                    setTrigger={setBtnPopup}
                    Collector={Collector}
                    Janitor={Janitor}
                    Vehicle={Vehicle}
                    Mcp={Mcp}
                    calendarChange={calendarChange}
                />
                <Confirm setTrigger={setBtnPopup} />
            </div>
            <Footer />
        </div>
    );
};

export default BackOfficer;
