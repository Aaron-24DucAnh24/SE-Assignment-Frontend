import React from "react";
import "./DetailInfo.css";
import Vehicle from "../Data/VehicleDumb.json";
import "./DropDown.css";
import Mcp from "../Data/RouteDumb.json";

function CollectorInfo(props) {
    // employeeList={props.employee} employee={props.name}
    return (
        <div>
            {props.employeeList
                .filter((emp) => emp.name === props.employee)
                .map((filteredEmp) => {
                    return (
                        <div key={filteredEmp.name}>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Mã nhân viên: </b>
                                    {filteredEmp.employeeID}
                                </li>
                                <li>
                                    <b>Tên: </b>
                                    {filteredEmp.name}
                                </li>
                                <li>
                                    <b>Chức vụ: </b>
                                    {filteredEmp.chucVu}
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
                                            {filteredEmp.vehicle}
                                        </span>
                                    )}
                                    {props.edit && (
                                        <span>
                                            <select
                                                name="vehicle"
                                                id="vehicle"
                                                className="custom-select"
                                            >
                                                {Vehicle.map((veh) => {
                                                    return (
                                                        <option
                                                            key={veh.name}
                                                            value={veh.name}
                                                        >
                                                            {veh.name}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </span>
                                    )}
                                </li>
                            </ul>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Tuyến đường:</b>
                                    <div>
                                        {filteredEmp.route.map((_route) => {
                                            return (
                                                <li key={_route.name}>
                                                    {!props.edit && (
                                                        <div className="detailInformation-name__wrap">
                                                            <b>
                                                                {_route.name}{" "}
                                                            </b>{" "}
                                                            {_route.address}
                                                        </div>
                                                    )}
                                                    {props.edit && (
                                                        <select
                                                            name={Mcp.name}
                                                            id="route"
                                                            className="custom-select"
                                                        >
                                                            {Mcp.map((rou) => {
                                                                return (
                                                                    <option
                                                                        key={
                                                                            rou.name
                                                                        }
                                                                        value={
                                                                            rou.name
                                                                        }
                                                                    >
                                                                        <div>
                                                                            {
                                                                                rou.name
                                                                            }{" "}
                                                                            {
                                                                                rou.address
                                                                            }
                                                                        </div>
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    );
                })}
        </div>
    );
}

export default CollectorInfo;
