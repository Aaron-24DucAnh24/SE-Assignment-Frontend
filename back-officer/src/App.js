import BackOfficer from "./backofficer/BackOfficer.js"
import "./App.css";
import { Routes, Route } from "react-router-dom"
import Login from "./login/Login.js";

function App() {
    
    return (
        <div>
            <Login />
            <Routes>
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path = "/back-officer" element={<BackOfficer/>}/>
            </Routes>
            
        </div>
    );
}

export default App;
