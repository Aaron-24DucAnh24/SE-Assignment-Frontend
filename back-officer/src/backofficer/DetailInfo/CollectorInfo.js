import React from "react";
import "./DetailInfo.css";
import Vehicle from "../Data/VehicleDumb.json";
import "./DropDown.css";
import Mcp from "../Data/RouteDumb.json";

function CollectorInfo(props) {
    // employeeList={props.employee} employee={props.name}
    return (
        <div>
            {props.collectorList
                .filter((emp) => emp.name === props.employee)
                .map((filteredEmp) => {
                    return (
                        <div key={filteredEmp.id}>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Mã nhân viên: </b>
                                    {filteredEmp.id}
                                </li>
                                <li>
                                    <b>Tên: </b>
                                    {filteredEmp.name}
                                </li>
                                <li>
                                    <b>Chức vụ: </b>
                                    {filteredEmp.job}
                                </li>
                                <li>
                                    <b>Trạng thái: </b>
                                    {filteredEmp.status}
                                </li>
                            </ul>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Phương tiện: </b>
                                    {!props.edit && (
                                        <span className="detailInformation-name__wrap">
                                            {filteredEmp.vehicleName}
                                        </span>
                                    )}
                                    {props.edit && (
                                        <span>
                                            <select
                                                name="vehicle"
                                                id="vehicle"
                                                className="custom-select"
                                            >
                                                {props.vehicleList.map(
                                                    (veh) => {
                                                        return (
                                                            <option
                                                                key={veh.name}
                                                                value={veh.name}
                                                            >
                                                                {veh.name}
                                                            </option>
                                                        );
                                                    }
                                                )}
                                            </select>
                                        </span>
                                    )}
                                </li>
                            </ul>
                            {
                                <ul className="detailInformation-name__ul">
                                    <li>
                                        <b>Tuyến đường:</b>
                                        <div>
                                            {props.mcpList
                                                .filter((mcp) => {
                                                    return (
                                                        mcp.collectorId ==
                                                        filteredEmp.id
                                                    );
                                                })
                                                .map((_mcp) => {
                                                    return (
                                                        <li key={_mcp.id}>
                                                            {!props.edit && (
                                                                <div className="detailInformation-name__wrap">
                                                                    <b>
                                                                        {
                                                                            _mcp.name
                                                                        }{" "}
                                                                    </b>{" "}
                                                                    {
                                                                        _mcp.address
                                                                    }
                                                                </div>
                                                            )}
                                                            {props.edit && (
                                                                <select
                                                                    name={
                                                                        Mcp.name
                                                                    }
                                                                    id="route"
                                                                    className="custom-select"
                                                                >
                                                                    {props.mcpList.map(
                                                                        (
                                                                            mcp
                                                                        ) => {
                                                                            return (
                                                                                <option
                                                                                    key={
                                                                                        mcp.id
                                                                                    }
                                                                                    value={
                                                                                        mcp.name
                                                                                    }
                                                                                >
                                                                                    <div>
                                                                                        {
                                                                                            mcp.name
                                                                                        }{" "}
                                                                                        {
                                                                                            mcp.address
                                                                                        }
                                                                                    </div>
                                                                                </option>
                                                                            );
                                                                        }
                                                                    )}
                                                                </select>
                                                            )}
                                                        </li>
                                                    );
                                                })}
                                        </div>
                                    </li>
                                </ul>
                            }
                        </div>
                    );
                })}
        </div>
    );
}

export default CollectorInfo;
