import React from "react";
import "./ListDisplay.css";
import { Card } from "./card"

export const Tab = ({ Employee }, TabName) => {
    const showTab = () => {
        console.log("Show detail")
    }

    return (<div className="tabBackground" OnClick={showTab}>
        <div className="tab">
            {/* Tab navigation */}
            <div className="tabNav">
                <span className="tabNav_name">
                    Nhan vien thu gom
                </span>
            </div>
            {/* Tab Container keep list of all employee, MCP, ect...  */}
            <div className="tabContainer">
                <div className="tabContainer_scrollAndCard">
                    <div className="tabContainer_scroll">
                        {Employee.map(employee => {
                            return <Card cardProp={employee} />
                        })}

                    </div>
                </div>

                <button>
                    Khoi tao
                </button>
            </div>
        </div>
    </div>);
};