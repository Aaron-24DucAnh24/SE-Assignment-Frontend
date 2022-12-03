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

    const ChangeStatus =
        cardProp.status === true ? <span id="online">Online</span> : "Offline";

    const IsUsed =
        cardProp.isUsed === true ? (
            <span id="online">Đang sử dụng</span>
        ) : (
            "Khả dụng"
        );

    return (
        <div>
            <button className="cardBox" onClick={ShowDetail}>
                <div className="cardName">{cardProp.name}</div>
                <div className="cardStatus">
                    {typeof cardProp.isUsed == "boolean"
                        ? IsUsed
                        : typeof cardProp.status == "boolean"
                        ? ChangeStatus
                        : cardProp.status + "%"}
                </div>
                <infoIcons.RiInformationLine id="iconInfo" />
            </button>
        </div>
    );
};
