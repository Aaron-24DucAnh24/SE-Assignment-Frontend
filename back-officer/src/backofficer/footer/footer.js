const footer = () => {
    return (<div>

<div className="footer">
            <div className="contact footer__section">
                <span>Liên hệ</span>
                <ul className="contact-list">
                    <li className="contact-item">
                        <i className="ti-location-pin"></i>Địa chỉ: 268 Lý
                        Thường Kiệt, P.14, Q.10, TP.HCM
                    </li>
                    <li className="contact-item">
                        <i className="ti-mobile"></i>Phone:
                        <a href="tel: 0964778339">0964.778.339</a>
                    </li>
                    <li className="contact-item">
                        <i className="ti-email"></i>Email:
                        <a href="mailto: anh.bui24ducanh24@hcmut.edu.vn">anh.bui24ducanh24@hcmut.edu.vn</a>
                    </li>
                </ul>
            </div>
            <div className="footer__section">
                <span>Powered by <i>Simp(le) <br /> </i>Ho Chi Minh
                    University of Technology</span>
                <img src="/img/hcmut-logo.png" alt="" />
            </div>
        </div>
    </div>)

};
    export default footer;
