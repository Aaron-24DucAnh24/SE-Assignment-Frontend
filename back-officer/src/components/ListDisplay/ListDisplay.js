import React from "react";
import { Tab } from "./tab";
import "./ListDisplay.css";
import { Card } from "./card";


const ListDisplay = ({Employee}) => {
    
    // TODO Phong
    return <div>
        <Tab Employee={Employee} TabName="Nhan Vien Thu gom"/>
        
    </div>

};

export default ListDisplay;
