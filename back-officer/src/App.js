import DetailInfor from "./components/DetailInfo/DetailInfo.js";
import Header from "./components/Header/Header.js";
import ListDisplay from "./components/ListDisplay/ListDisplay.js";
import { useState } from "react";

function App() {
    const [Employee, SetEmployee] = useState([
        {
            name: "Tran Trang Ky Phong",
            job: "Collector",
            status: true,
            employeeID: "2053325",
            chucVu: "Nhân viên thu gom rác,",
            vehicle: "Xe rác 01",
            route: [
                { name: "Tân bình 01", address: "124 THT, Q10" },
                { name: "Tân bình 02", address: "268 LTK, Q10" },
                { name: "Q10 01", address: "124 THT, Q10" },
                { name: "Q10 02", address: "268 LTK, Q10" },
                { name: "Q10 03", address: "268 LTK, Q10" },
            ],
        },
        {
            name: "Dang Tien Dat",
            job: "Janitor",
            status: false,
            employeeID: "2053325",
            chucVu: "Nhân viên thu gom rác,",
            vehicle: "Xe rác 01",
            route: [
                { name: "Tân bình 01", address: "124 THT, Q10" },
                { name: "Tân bình 02", address: "268 LTK, Q10" },
                { name: "Q10 01", address: "124 THT, Q10" },
                { name: "Q10 02", address: "268 LTK, Q10" },
                { name: "Q10 03", address: "268 LTK, Q10" },
            ],
        },
        {
            name: "Huynh Vo Tuan",
            job: "Janitor",
            status: false,
            employeeID: "2053325",
            chucVu: "Nhân viên thu gom rác,",
            vehicle: "Xe rác 01",
            route: [
                { name: "Tân bình 01", address: "124 THT, Q10" },
                { name: "Tân bình 02", address: "268 LTK, Q10" },
                { name: "Q10 01", address: "124 THT, Q10" },
                { name: "Q10 02", address: "268 LTK, Q10" },
                { name: "Q10 03", address: "268 LTK, Q10" },
            ],
        },
    ]);

    const [Vehicle, SetVehicle] = useState([
        { name: "Xe rác 01" },
        { name: "Xe rác 02" },
        { name: "Xe rác 03" },
        { name: "Xe rác 04" },
        { name: "Xe rác 05" },
    ]);

    const [Mcp, SetMcp] = useState([
        { name: "Tan Binh 01" },
        { name: "Tan Phu 05" },
        { name: "Quan 7 01" },
        { name: "Quan 10 21" },
        { name: "Thu Duc 03" },
        { name: "Binh Thanh 06" },
    ]);

    return (
        <div>
            <Header />
            <ListDisplay Employee={Employee} Vehicle={Vehicle} Mcp={Mcp} />
        </div>
    );
}

export default App;
