import "./Header.css";
import { AiFillMessage } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

const Header = () => {
    // TODO: Dat
    return (
        <div>
            <div className="header">
                <div className="header_left">
                    <a href="#" className="header_title">
                        <span className="title_name">UWC 2.0</span>
                    </a>
                </div>
                <div className="header_right">
                    <a onClick={() => messageAlert()} href="#">
                        <IconContext.Provider
                            value={{ className: "message_icons" }}
                        >
                            <AiFillMessage />
                        </IconContext.Provider>
                    </a>
                    <a onClick={() => messageAlert()} href="#" className="header_title">
                        <span className="profile_name">Nguyễn Minh Hùng</span>
                    </a>
                    <a id="last_icons" onClick={() => messageAlert()} href="#">
                        <IconContext.Provider
                            value={{ className: "profile_icons" }}
                        >
                            <BsPersonCircle />
                        </IconContext.Provider>
                    </a>
                </div>
            </div>
        </div>
    );
};

function messageAlert() {
    alert("This function is being developed!")
};

export default Header;
