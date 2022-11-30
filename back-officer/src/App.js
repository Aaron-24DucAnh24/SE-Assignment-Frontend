import BackOfficer from "./backofficer/BackOfficer.js"
import "./App.css";
import { Routes, Route } from "react-router-dom"
import Login from "./login/Login.js";
import Collector from "./collector/Collector.js";
import "react-week-calendar/dist/style.less";

function App() {
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path = "/back-officer" element={<BackOfficer/>}/>
                <Route path="/collector" element={<Collector/>}/>
            </Routes>
            
        </div>
    );
}

export default App;
