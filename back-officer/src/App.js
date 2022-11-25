import Header from "./components/Header/Header.js";
import ListDisplay from "./components/ListDisplay/ListDisplay.js";
import { useState } from "react";
import EmpDumb from "./components/Data/EmpDumb.json";
import McpDumb from "./components/Data/McpDumb.json";
import VehicleDumb from "./components/Data/VehicleDumb.json";

function App() {
    const [Employee, SetEmployee] = useState(EmpDumb);

    const [Vehicle, SetVehicle] = useState(VehicleDumb);

    const [Mcp, SetMcp] = useState(McpDumb);

    return (
        <div>
            <Header />
            <ListDisplay Employee={Employee} Vehicle={Vehicle} Mcp={Mcp} />
        </div>
    );
}

export default App;
