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
                        <div key={filteredVeh.id}>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Tên phương tiện: </b>
                                    {filteredVeh.name}
                                </li>
                                <li>
                                    <b>Biển số xe: </b>
                                    {filteredVeh.plateNum}
                                </li>
                                <li>
                                    <b>Trọng tải: </b>
                                    {filteredVeh.capacity}
                                </li>
                            </ul>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Người sử dụng hiện tại: </b>
                                    {!props.edit && (
                                        <div className="detailInformation-name__wrap">
                                            {filteredVeh.collectorName}
                                        </div>
                                    )}
                                    {props.edit && (
                                        <div>
                                            <select
                                                name="empUsing"
                                                id="vehicle"
                                                className="custom-select"
                                            >
                                                {props.collectorList.map(
                                                    (emp) => {
                                                        return (
                                                            <option
                                                                key={emp.name}
                                                                value={emp.name}
                                                            >
                                                                {emp.name}
                                                            </option>
                                                        );
                                                    }
                                                )}
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
                                            <b>{filteredVeh.mcpName} </b>{" "}
                                            {/*filteredVeh.address*/}
                                        </div>
                                    )}

                                    {props.edit && (
                                        <select
                                            name={Mcp.name}
                                            id="route"
                                            className="custom-select"
                                        >
                                            {props.mcpList.map((rou) => {
                                                return (
                                                    <option
                                                        key={rou.id}
                                                        value={rou.name}
                                                    >
                                                        <div>
                                                            {rou.name}
                                                            {/*rou.address*/}
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
