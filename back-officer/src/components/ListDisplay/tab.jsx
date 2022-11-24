import React from "react";
import "./ListDisplay.css";
import { Card } from "./card";

export const Tab = ({ type, Employee }) => {
    const setDetail = () => {};

    const btnGen = (
        <button className="btnGenerate">
            <span className="btnText">Khoi tao</span>
        </button>
    );

    const tabCon = (
        <div className="tabCard_scroll">
            <div className="tabContainer_scroll">
                {Employee.map((employee) => {
                    return (
                        <Card
                            key={employee.name.toString()}
                            cardProp={employee}
                            onDetailClick={setDetail}
                        />
                    );
                })}
            </div>
        </div>
    );

    const tabCon2 = (
        <div className="tabCard_scroll">
            <div className="tabContainer_scroll tabContainer_scroll--long ">
                {Employee.map((employee) => {
                    return (
                        <Card
                            key={employee.name.toString()}
                            cardProp={employee}
                        />
                    );
                })}
            </div>
        </div>
    );
    return (
        <div className="tabContainer">
            {type === "E" ? tabCon : tabCon2}
            {type === "E" ? btnGen : null}
        </div>
    );
};
