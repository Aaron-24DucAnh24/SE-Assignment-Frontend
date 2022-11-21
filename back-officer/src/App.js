import DetailInfor from "./components/DetailInfo/DetailInfo.js";
import Header from "./components/Header/Header.js";
import ListDisplay from "./components/ListDisplay/ListDisplay.js";
import { useState } from "react";

function App() {

    const [Employee, SetEmployee] = useState([
        { name: "Tran Trang Ky Phong", job: "Collector", status: true },
        { name: "Dang Tien Dat", job: "Janitor", status: false },
        { name: "Huynh Vo Tuan", job: "Janitor", status: false },
    ])

    const [Vehicle, SetVehicle] = useState([
        { name: "Xe rác 01" },
        { name: "Xe rác 02" },
        { name: "Xe rác 03" },
        { name: "Xe rác 04" },
        { name: "Xe rác 05" }
    ])

    const [Mcp, SetMcp] = useState([
        { name: "Tan Binh 01" },
        { name: "Tan Phu 05" },
        { name: "Quan 7 01" },
        { name: "Quan 10 21" },
        { name: "Thu Duc 03" },
        { name: "Binh Thanh 06" }
    ])

    return (
        <div>
            <Header />
            <DetailInfor />

            <ListDisplay Employee={Employee} Vehicle={Vehicle} Mcp={Mcp} />
        </div>
    );
}

export default App;
