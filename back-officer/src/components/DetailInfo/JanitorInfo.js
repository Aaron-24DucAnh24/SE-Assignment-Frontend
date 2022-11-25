import React from "react";

function JanitorInfo(props) {
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
                                    <span className="detailInformation-name__wrap">
                                        {filteredEmp.vehicle}
                                    </span>
                                </li>
                            </ul>
                            <ul className="detailInformation-name__ul">
                                <li>
                                    <b>Tuyến đường:</b>
                                    <div>
                                        {filteredEmp.route.map((_route) => {
                                            return (
                                                <li
                                                    key={_route.name}
                                                    className="detailInformation-name__wrap"
                                                >
                                                    <b>{_route.name} </b>{" "}
                                                    {_route.address}
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

export default JanitorInfo;
