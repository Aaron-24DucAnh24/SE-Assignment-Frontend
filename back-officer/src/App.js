import DetailInfor from "./components/DetailInfo/DetailInfo.js";
import Header from "./components/Header/Header.js";
import ListDisplay from "./components/ListDisplay/ListDisplay.js";
import { useState } from "react";

function App() {
    const [Employee, SetEmployee] = useState([
        {name: "Tran Trang Ky Phong", job: "Collector", status: true},
        {name: "Dang Tien Dat", job: "Janitor",  status: false},
        {name: "Huynh Vo Tuan", job: "Janitor", status: false},
        {name: "Tran Trang Ky Phong", job: "Collector", status: true},
        {name: "Dang Tien Dat", job: "Janitor",  status: false},
        {name: "Huynh Vo Tuan", job: "Janitor", status: false}
    ])
    return (
        <div>
            <Header />
            <DetailInfor />
            <ListDisplay Employee={Employee}/>
        </div>
    );
}

export default App;
