import React, { useState } from "react";
import "./ListDisplay.css";
import * as infoIcons from "react-icons/ri";


export const Card = ({ cardProp, objectCard }) => {
    // TODO Tuan
    const ShowDetail = () => {
        {
            // communicate up tab
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
                <infoIcons.RiInformationLine id="iconInfo" />
            </button>
        </div>
    );
};
