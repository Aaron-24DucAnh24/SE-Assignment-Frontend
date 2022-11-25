import React, { useState } from "react";
import { Tab } from "./tab";
import "./ListDisplay.css";
import DetailInfor from "../DetailInfo/DetailInfo";

const ListDisplay = ({ Employee, Vehicle, Mcp }) => {
    const [objectName, setObjectName] = useState("");
    const [tabType, setTabType] = useState("");

    const setObjectHandler = (_object) => {
        // pass object to detailInfo
        setObjectName(_object);
    };

    const TabSetting = (index) => {
        // let the detailBox knows what it is doing
        setTabType(index); 
        return ShowTab(index, "#d9eaff", "#bcd1eb");
    };

    const ShowTab = (index, colorSelectTab, colorDeselectTab) => {
        // get all tab
        var tabNav_Btns = document.querySelectorAll(".tabNav_Btn");
        var tabBodys = document.querySelectorAll(".tabContainer");

        // Highlight the select tab
        tabNav_Btns.forEach((btn) => {
            btn.style.backgroundColor = colorDeselectTab;
        });
        tabNav_Btns[index].style.backgroundColor = colorSelectTab;

        // Show tab
        tabBodys.forEach((tab) => {
            tab.style.display = "none";
        });
        tabBodys[index].style.display = "block";
    };

    const TabBtn = (props) => {
        return (
            <button
                onClick={() => TabSetting(props.index)}
                className="tabNav_Btn"
            >
                <span className="tabNav_name">{props.tabName}</span>
            </button>
        );
    };

    // TODO Phong
    return (
        <div>
            <div className="tab_Background">
                <div className="tab">
                    <div className="tabNav">
                        {/* Tab navigation */}
                        {<TabBtn tabName="Nhân viên thu gom" index="0" />}
                        {<TabBtn tabName="Nhân viên vệ sinh" index="1" />}
                        {<TabBtn tabName="Phương tiện" index="2" />}
                        {<TabBtn tabName="Mcp" index="3" />}
                    </div>

                    <div className="tabBody">
                        {/* Tab body */}
                        <Tab
                            type="E"
                            Employee={Employee}
                            object={setObjectHandler}
                        />
                        <Tab
                            type="E"
                            Employee={Employee}
                            object={setObjectHandler}
                        />
                        <Tab
                            type="V"
                            Employee={Vehicle}
                            object={setObjectHandler}
                        />
                        <Tab
                            type="M"
                            Employee={Mcp}
                            object={setObjectHandler}
                        />
                    </div>
                </div>
            </div>
            <DetailInfor
                type={tabType}
                name={objectName}
                employee={Employee}
                vehicle={Vehicle}
                mcp={Mcp}
            />
        </div>
    );
};

export default ListDisplay;
