import React, { useState } from "react";
import "./ListDisplay.css";
import infoIcon from "./img/infoIcon.png";
import * as ImIcons from "react-icons/im";

export const Card = ({ cardProp }) => {
    // TODO Tuan
    const [openDetail, setOpenDetail] = useState(false);
    const ShowDetail = () => {
        console.log("DetailInfo handle " + cardProp.name);
        setOpenDetail(!openDetail);
    };

    return (
        <div>
            <button className="cardBox" onClick={ShowDetail}>
                <div className="cardName">{cardProp.name}</div>

                <div className="cardStatus">
                    {cardProp.status === true ? (
                        <span id="online">Online</span>
                    ) : (
                        "Offline"
                    )}
                </div>
                {/*Looking not so good, lol */}
                <ImIcons.ImNotification />
                {/*<img src={infoIcon} className="icon"></img>*/}
            </button>
        </div>
    );
};
