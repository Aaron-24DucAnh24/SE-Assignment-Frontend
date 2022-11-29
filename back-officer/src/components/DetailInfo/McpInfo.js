import React from "react";
import Employee from "../Data/EmpDumb.json";
import Vehicle from "../Data/VehicleDumb.json";

function McpInfo(props) {
    return (
        <div>
            {props.mcpList
                .filter((_mcp) => _mcp.name === props.mcp)
                .map((filteredMcp) => {
                    return (
                        <div key={filteredMcp.name}>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Mã MCP: </b>
                                    {filteredMcp.code}
                                </li>
                                <li>
                                    <b>Tên: </b>
                                    {filteredMcp.name}
                                </li>
                                <li>
                                    <b>Sức chứa: </b>
                                    {filteredMcp.weight}
                                </li>
                                <li>
                                    <b>Trạng thái: </b>
                                    {filteredMcp.status}
                                </li>
                            </ul>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Nhân viên vệ sinh: </b>
                                    {!props.edit && (
                                        <div className="detailInformation-name__wrap">
                                            {filteredMcp.janitor}
                                        </div>
                                    )}
                                    {props.edit && (
                                        <div>
                                            <select
                                                name="empUsing"
                                                id="vehicle"
                                                className="custom-select"
                                            >
                                                {Employee.map((emp) => {
                                                    return (
                                                        <option
                                                            key={emp.name}
                                                            value={emp.name}
                                                        >
                                                            {emp.name}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    )}
                                </li>
                            </ul>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Xe đẩy hiện có: </b>
                                    {!props.edit && (
                                        <div className="detailInformation-name__wrap">
                                            {filteredMcp.vehicle}
                                        </div>
                                    )}
                                    {props.edit && (
                                        <div>
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
                                        </div>
                                    )}
                                </li>
                            </ul>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Nhân viên thu gom: </b>
                                    {!props.edit && (
                                        <div className="detailInformation-name__wrap">
                                            {filteredMcp.collector}
                                        </div>
                                    )}
                                    {props.edit && (
                                        <div>
                                            <select
                                                name="empUsing"
                                                id="vehicle"
                                                className="custom-select"
                                            >
                                                {Employee.map((emp) => {
                                                    return (
                                                        <option
                                                            key={emp.name}
                                                            value={emp.name}
                                                        >
                                                            {emp.name}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>
                    );
                })}
        </div>
    );
}

export default McpInfo;
