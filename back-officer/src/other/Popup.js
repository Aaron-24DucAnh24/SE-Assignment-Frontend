import React from 'react'
import "./popup.css"
import * as closeIcons from "react-icons/io";

function Popup(props) {

    const updateLater = "Tính năng này sẽ được bổ sung sau";

    const updating = "Tính năng này đang được phát triển";

    const updateSuccess = "Cập nhật thành công!";

    const Error = "Lỗi! liên hệ với dev team để thêm thông tin chi tiết!";

    return (props.trigger) ?
        (
            <div className='popup'>
                <div className='popupContain'>
                    <closeIcons.IoIosClose className='closeIcon' />
                    <div>
                        <h2>THÔNG BÁO</h2>
                        <span className='popupText'>
                            {{
                                0: updating,
                                1: updateLater,
                                2: updateSuccess,
                                4: Error
                            }[props.alertCode]}
                        </span>
                    </div>
                    <div className="centerBtn">
                        <button className='btnClose' onClick={() => { props.setTrigger(false) }}>
                            Đóng
                        </button>
                    </div>
                </div>

            </div>
        ) : "";
}

export default Popup