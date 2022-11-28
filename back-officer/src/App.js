import Header from "./components/Header/Header.js";
import Confirm from "./components/Confirm/btnConfirm"
import ListDisplay from "./components/ListDisplay/ListDisplay.js";
import Footer from "./components/footer/footer.js";
import { useState } from "react";
import EmpDumb from "./components/Data/EmpDumb.json";
import McpDumb from "./components/Data/McpDumb.json";
import VehicleDumb from "./components/Data/VehicleDumb.json";
import Datepicker from "./components/DatePicker/Datepicker.js";
import "./App.css";

function App() {
    const [Employee, SetEmployee] = useState(EmpDumb);

    const [Vehicle, SetVehicle] = useState(VehicleDumb);

    const [Mcp, SetMcp] = useState(McpDumb);

    return (
        <div>
            <Header />
            <div className="Body">
                {/* <Datepicker /> */}
                <ListDisplay Employee={Employee} Vehicle={Vehicle} Mcp={Mcp} />
                <Confirm /> 
            </div>
            <Footer />
        </div>
    );
}

export default App;
