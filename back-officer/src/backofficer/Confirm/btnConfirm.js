import "./btnConfirm.css";

const btnConfirm = ({ setTrigger }) => {
    // TODO: Dat
    return (
        <div className="centerButton">
            <button
                className="buttonForConfirm"
                onClick={() => {
                    setTrigger(2);
                }}
            >
                <span className="buttonText">Cập nhật</span>
            </button>
        </div>
    );
};

export default btnConfirm;
