import "./DetailInfo.css";
import * as BiIcons from "react-icons/bi";
import CollectorInfo from "./CollectorInfo";
import JanitorInfo from "./JanitorInfo";
import VehicleInfo from "./VehicleInfo";
import McpInfo from "./McpInfo";
import React, { useState } from "react";

const DetailInfor = (props) => {
    const [edit, setEdit] = useState(false);
    const onEditClickHandler = () => {
        setEdit(!edit);
        console.log("click!");
    };

    return (
        <div className="detailInformation">
            <div className="detailInformation-header">
                Thông tin chi tiết
                <BiIcons.BiEdit onClick={onEditClickHandler} />
                <div className="detailInformation-header__line"></div>
            </div>
            <div className="detailInformation-name">
                {props.type === "0" && (
                    <CollectorInfo
                        employeeList={props.employee}
                        employee={props.name}
                        edit={edit}
                    />
                )}
                {props.type === "1" && (
                    <JanitorInfo
                        employeeList={props.employee}
                        employee={props.name}
                        edit={edit}
                    />
                )}
                {props.type === "2" && (
                    <VehicleInfo
                        vehicleList={props.vehicle}
                        vehicle={props.name}
                        edit={edit}
                    />
                )}
                {props.type === "3" && (
                    <McpInfo mcpList={props.mcp} mcp={props.name} edit={edit} />
                )}
            </div>
        </div>
    );
};

export default DetailInfor;
