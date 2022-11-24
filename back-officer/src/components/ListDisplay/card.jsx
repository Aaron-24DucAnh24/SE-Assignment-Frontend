import React, { useState } from "react";
import "./ListDisplay.css";
import infoIcon from "./img/infoIcon.png";

export const Card = ({ cardProp, objectCard }) => {
    // TODO Tuan
    const ShowDetail = () => {
        {
            // comunicate up tab
            objectCard(cardProp.name);
        }
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

                <img
                    src={infoIcon}
                    className="icon"
                    alt="notification_logo"
                ></img>
            </button>
            {/*openDetail && <DetailInfor type={"0"} />*/}
        </div>
    );
};
