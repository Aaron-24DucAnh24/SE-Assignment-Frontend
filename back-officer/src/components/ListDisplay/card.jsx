import React, { useState } from "react";
import "./ListDisplay.css";
import infoIcon from "./img/infoIcon.png";

export const Card = ({ cardProp }) => {
    // TODO Tuan
    const [openDetail, setOpenDetail] = useState(false);
    const ShowDetail = () => {
        console.log("DetailInfo handle " + cardProp.name);
        {
            var DetailInfo = document.querySelector(".detailInformation");
            DetailInfo.innerHTML = cardProp.name;
        }
        // setOpenDetail(!openDetail);
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
                
                <img src={infoIcon} className="icon"></img>
            </button>
            {/*openDetail && <DetailInfor type={"0"} />*/}
        </div>
    );
};
