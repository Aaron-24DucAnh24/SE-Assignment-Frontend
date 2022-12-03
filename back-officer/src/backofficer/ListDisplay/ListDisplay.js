import React, { useState } from "react";
import { Tab } from "./tab";
import "./ListDisplay.css";
import DetailInfor from "../DetailInfo/DetailInfo";

const ListDisplay = ({ setTrigger, Collector, Janitor, Vehicle, Mcp }) => {
    const [objectName, setObjectName] = useState("");
    const [tabType, setTabType] = useState();

    const setObjectHandler = (_object) => {
        // pass object to detailInfo
        setObjectName(_object);
    };

    const ShowTab = (index) => {
        // get all tab
        console.log("Show tab" + index);
        var tabNav_Btns = document.querySelectorAll(".tabNav_Btn");
        var tabBodys = document.querySelectorAll(".tabContainer");

        // Highlight the select tab
        tabNav_Btns.forEach((btn) => {
            btn.style.backgroundColor = "#bcd1eb";
        });
        console.log("run?");
        tabNav_Btns[index].style.backgroundColor = "#d9eaff";

        // Show tab
        tabBodys.forEach((tab) => {
            tab.style.display = "none";
        });
        tabBodys[index].style.display = "block";
    };

    const TabBtn = (props) => {
        return (
            <button
                onClick={() => {
                    ShowTab(props.index);
                    setTabType(props.index);
                    //setTabTypeHandler(props.index);
                }}
                className="tabNav_Btn"
            >
                <span className="tabNav_name">{props.tabName}</span>
            </button>
        );
    };


    // TODO Phong
    return (
        <div className="tab_contain">
            <div className="tab_Background">
                <div className="tab">
                    <div className="tabNav">
                        {/* Tab navigation */}
                        <TabBtn tabName="Nhân viên thu gom" index="0" />
                        <TabBtn tabName="Nhân viên vệ sinh" index="1" />
                        <TabBtn tabName="Phương tiện" index="2" />
                        <TabBtn tabName="Mcp" index="3" />
                    </div>
                    <div className="tabBody">
                        {/* Tab body */}
                        <Tab
                            setTrigger={setTrigger}
                            type="E"
                            dataList={Collector}
                            object={setObjectHandler}
                        />
                        <Tab
                            // props={props.setTrigger}
                            setTrigger={setTrigger}
                            type="E"
                            dataList={Janitor}
                            object={setObjectHandler}
                        />
                        <Tab
                            // props={props.setTrigger}
                            setTrigger={setTrigger}
                            type="V"
                            dataList={Vehicle}
                            object={setObjectHandler}
                        />
                        <Tab
                            // props={props.setTrigger}
                            setTrigger={setTrigger}
                            type="M"
                            dataList={Mcp}
                            object={setObjectHandler}
                        />
                    </div>
                </div>
            </div>
            <DetailInfor
                setTrigger={setTrigger}
                type={tabType}
                name={objectName}
                collector={Collector}
                janitor={Janitor}
                vehicle={Vehicle}
                mcp={Mcp}
            />
        </div>
    );
};

export default ListDisplay;
