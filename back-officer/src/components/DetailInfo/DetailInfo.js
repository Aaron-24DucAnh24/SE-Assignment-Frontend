import "./DetailInfo.css";
import * as BiIcons from "react-icons/bi";

const DetailInfor = (props) => {
    return (
        <div className="detailInformation">
            <div className="detailInformation-header">
                Thông tin chi tiết
                <BiIcons.BiEdit />
                <div className="detailInformation-header__line"></div>
            </div>
            <div className="detailInformation-name">
                {props.employee
                    .filter((emp) => emp.name === props.name)
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
                                        <ul>
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
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default DetailInfor;
