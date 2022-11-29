import "./Btn.css"

const btnConfirm = (props) => {
    // TODO: Dat
    return <div className="centerBtn">
    <button className="btnGenerate">
        <span className="btnText">{props.name}</span>
    </button>
</div>;
};

export default btnConfirm;