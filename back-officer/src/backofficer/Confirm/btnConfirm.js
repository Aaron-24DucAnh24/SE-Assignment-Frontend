import "./btnConfirm.css"

const btnConfirm = ({ setTrigger }) => {
    // TODO: Dat
    return <div className="centerBtn">
        <button className="btnGenerate" onClick={() => { setTrigger(2) }}>
            <span className="btnText">Cập nhật</span>
        </button>
    </div>;
};

export default btnConfirm;