import "./DetailInfo.css";

const DetailInfor = (props) => {
    return <div className="detailInformation">{props.type}
    
    {/* test */}
    {props.txt}
    </div>;
};

export default DetailInfor;
