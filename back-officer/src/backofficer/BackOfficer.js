import Datepicker from "./DatePicker/Datepicker.js";
import Header from "./Header/Header.js";
import Confirm from "./Confirm/btnConfirm";
import ListDisplay from "./ListDisplay/ListDisplay.js";
import Footer from "./footer/footer.js";
import EmpDumb from "./Data/EmpDumb.json";
import McpDumb from "./Data/McpDumb.json";
import VehicleDumb from "./Data/VehicleDumb.json";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-router-dom";
import React from "react";

const BackOfficer = () => {
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

    return (
        <div>
            <Header />
            {/* {console.log(Collector[0].name + Collector[0].eId)} */}
            <div className="Body">
                <Datepicker />
                <ListDisplay
                    Collector={Collector}
                    Janitor={Janitor}
                    Vehicle={Vehicle}
                    Mcp={Mcp}
                />
                <Confirm />
            </div>
            <Footer />
        </div>
    );
};
export default BackOfficer;
