import React from "react";
import "./ListDisplay.css";
import { Card } from "./card";

export const Tab = ({ type, Employee, object }) => {
    const btnGen = (
        <button className="btnGenerate">
            <span className="btnText">Khởi tạo</span>
        </button>
    );

    const setObject = (objectName) => {
        // communicate up List
        object(objectName);
    };

    const tabCon = (
        <div className="tabCard_scroll">
            <div className="tabContainer_scroll">
                {Employee.map((employee) => {
                    return (
                        <Card
                            key={employee.name.toString()}
                            cardProp={employee}
                            objectCard={setObject}
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
                            objectCard={setObject}
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
