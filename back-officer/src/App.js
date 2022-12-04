import BackOfficer from "./backofficer/BackOfficer.js"
import "./App.css";
import { Routes, Route } from "react-router-dom"
import Login from "./login/Login.js";
import Collector from "./collector/Collector.js";
import Janitor from "./janitor/Janitor.js";

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/back-officer" element={<BackOfficer />} />
                <Route path="/collector" element={<Collector />} />
                <Route path="/janitor" element={<Janitor />} />
            </Routes>
        </div>
    );
}


export default App;
