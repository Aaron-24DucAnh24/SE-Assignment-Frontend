import Header from "./components/Header/Header.js";
import Confirm from "./components/Confirm/btnConfirm";
import ListDisplay from "./components/ListDisplay/ListDisplay.js";
import Footer from "./components/footer/footer.js";
import { useState, useEffect } from "react";
import EmpDumb from "./components/Data/EmpDumb.json";
import McpDumb from "./components/Data/McpDumb.json";
import VehicleDumb from "./components/Data/VehicleDumb.json";
import Datepicker from "./components/DatePicker/Datepicker.js";
import "./App.css";
import axios from "axios";

function App() {
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

    const [Employee, SetEmployee] = useState(EmpDumb);

    const [Vehicle, SetVehicle] = useState(VehicleDumb);

    const [Mcp, SetMcp] = useState(McpDumb);

    return (
        <div>
            <Header />
            {console.log(Collector[0].name + Collector[0].eId)}
            <div className="Body">
                <div className="calendar">
                    Calendar
                    <Datepicker className="date" />
                </div>
                <ListDisplay Employee={Employee} Vehicle={Vehicle} Mcp={Mcp} />
                <Confirm />
            </div>
            <Footer />
        </div>
    );
}

export default App;
