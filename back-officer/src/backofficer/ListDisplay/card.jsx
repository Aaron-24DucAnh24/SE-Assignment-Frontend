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

    const McpNearFull = cardProp.status >= 80 ?
        <span id="red">{cardProp.status}%</span> :
        <span id="green">{cardProp.status}%</span>;

    const ChangeStatus =
        cardProp.status === true ? <span id="online">Đang đi làm</span> : "Nghỉ làm";

    const IsUsed =
        cardProp.isUsed === true ? (
            <span id="green">Đang sử dụng</span>
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
                            : McpNearFull}
                </div>
                <infoIcons.RiInformationLine id="iconInfo" />
            </button>
        </div>
    );
};
