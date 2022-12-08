import React from "react";
import Vehicle from "../Data/VehicleDumb.json";
import Mcp from "../Data/RouteDumb.json";

function JanitorInfo(props) {
    return (
        <div>
            {props.janitorList
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
                                    {filteredEmp.status === true ? (
                                        <span>Đang đi làm</span>
                                    ) : (
                                        "Nghỉ làm"
                                    )}
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
                                        <b>Mcp:</b>
                                        {!props.edit && (
                                            <div className="detailInformation-name__wrap">
                                                {filteredEmp.mcpName}
                                            </div>
                                        )}
                                        {/*props.edit && (
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
                                                )*/}
                                    </li>
                                </ul>
                            }
                        </div>
                    );
                })}
        </div>
    );
}

export default JanitorInfo;
