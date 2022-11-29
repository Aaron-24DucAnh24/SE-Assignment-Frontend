import React from "react";
import Employee from "../Data/EmpDumb.json";
import Mcp from "../Data/RouteDumb.json";

function VehicleInfo(props) {
    return (
        <div>
            {props.vehicleList
                .filter((veh) => veh.name === props.vehicle)
                .map((filteredVeh) => {
                    return (
                        <div key={filteredVeh.name}>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Tên phương tiện: </b>
                                    {filteredVeh.name}
                                </li>
                                <li>
                                    <b>Biển số xe: </b>
                                    {filteredVeh.code}
                                </li>
                                <li>
                                    <b>Trọng tải: </b>
                                    {filteredVeh.weight}
                                </li>
                            </ul>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Người sử dụng hiện tại: </b>
                                    {!props.edit && (
                                        <div className="detailInformation-name__wrap">
                                            {filteredVeh.empUsing}
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
                                    <b>Vị trí hiện tại:</b>
                                    {!props.edit && (
                                        <div className="detailInformation-name__wrap">
                                            <b>{filteredVeh.locationName} </b>{" "}
                                            {filteredVeh.address}
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
                                                        key={rou.name}
                                                        value={rou.name}
                                                    >
                                                        <div>
                                                            {rou.name}{" "}
                                                            {rou.address}
                                                        </div>
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    )}
                                </li>
                            </ul>
                        </div>
                    );
                })}
        </div>
    );
}

export default VehicleInfo;
