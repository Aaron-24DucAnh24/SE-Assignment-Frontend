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
                <li>
                    <ul>Mã nhân viên</ul>
                    <ul>Tên</ul>
                </li>
            </div>
        </div>
    );
};

export default DetailInfor;
