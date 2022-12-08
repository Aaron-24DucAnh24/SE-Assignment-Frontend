import React, { useState } from "react";
import "./ListDisplay.css";
import { Card } from "./card";

export const Tab = ({ setTrigger, dataList, object, calendarChange }) => {
    const [genBtnClicked, setGenBtnClicked] = useState(false);
    const genBtnClickedHandler = () => {
        setTrigger(5);
        setGenBtnClicked(true);
    };

    const btnGen = (
        <button className="buttonForGenerate" onClick={genBtnClickedHandler}>
            <span className="buttonText">Khởi tạo</span>
        </button>
    );

    const setObject = (objectName) => {
        // communicate up List
        object(objectName);
    };

    const tabCon = (
        <div className="tabCard_scroll">
            {!calendarChange && genBtnClicked && (
                <div className="tabContainer_scroll">
                    {dataList.map((obj) => {
                        return (
                            <Card
                                key={obj.id}
                                cardProp={obj}
                                objectCard={setObject}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );

    const tabCon2 = (
        <div className="tabCard_scroll">
            <div className="tabContainer_scroll tabContainer_scroll--long ">
                {dataList.map((obj) => {
                    return (
                        <Card
                            key={obj.id}
                            cardProp={obj}
                            objectCard={setObject}
                        />
                    );
                })}
            </div>
        </div>
    );
    return (
        <div className="tabContainer">
            {tabCon}
            {btnGen}
        </div>
    );
};
