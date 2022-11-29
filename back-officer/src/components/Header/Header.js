import "./Header.css";
import {AiFillMessage} from 'react-icons/ai';
import {BsPersonCircle} from 'react-icons/bs';
import {IconContext} from "react-icons/lib";

const Header = () => {
    // TODO: Dat
    return <div>
            <div class = "header">
                <div class = "header_left">
                        <a href = "/" class = "header_title"><span class = "title_name">UWC 2.0</span></a>
                </div>
                <div class = "header_right">
                        <a href = "/">
                        <IconContext.Provider value ={{className: "message_icons"}}>
                                <AiFillMessage /> 
                        </IconContext.Provider>
                        </a>
                        <a href = "/" class = "header_title"><span class = "profile_name">Nguyễn Minh Hùng</span></a>
                        <a href = "/">
                                <IconContext.Provider value ={{className: "profile_icons"}}>
                                        <BsPersonCircle /> 
                                </IconContext.Provider>
                        </a>
                </div>
            </div>
    </div>;
};

export default Header;
