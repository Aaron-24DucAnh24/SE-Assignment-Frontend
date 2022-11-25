import React from "react";

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
                                    <div className="detailInformation-name__wrap">
                                        {filteredVeh.empUsing}
                                    </div>
                                </li>
                            </ul>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Vị trí hiện tại:</b>
                                    <div className="detailInformation-name__wrap">
                                        <b>{filteredVeh.locationName} </b>{" "}
                                        {filteredVeh.address}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    );
                })}
        </div>
    );
}

export default VehicleInfo;
