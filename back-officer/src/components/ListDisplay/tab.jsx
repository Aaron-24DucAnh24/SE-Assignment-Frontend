import React from "react";
import "./ListDisplay.css";
import { Card } from "./card"

export const Tab = (prop) => {
    const showTab = () => {
        console.log("Show detail")
    }

    return (<div className="tab" OnClick={showTab}>
        {/* Tab navigation */}
        <div className="tabNav">
            <span className="tabName">
                {prop.name}

            </span>
        </div>
    {/* Tab Container keep list of all employee, MCP, ect...  */}
        <div className="tabContainer">
            <ul className="cardList">
                <Card name="Tran Trang Ky Phong" status="Truc Tuyen"/>
                <Card name="Dang Tien Dat" status="Truc Tuyen"/>
                <Card name="Huynh Vo Tuan" status="Ngoai Tuyen"/>

            </ul>

        </div>
    </div>);
};