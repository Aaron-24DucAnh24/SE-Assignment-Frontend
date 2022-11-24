import "./DetailInfo.css";

const DetailInfor = (props) => {
    return (
        <div className="detailInformation">
            <div>{props.type}</div>
            <div>{props.name}</div>
        </div>
    );
};

export default DetailInfor;
