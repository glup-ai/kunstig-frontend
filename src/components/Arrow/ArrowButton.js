import './ArrowButton.css';
import arrow from './arrow.png';

const ArrowButton = ({ handleOnClick, rotation }) => {
    const style = rotation === "left" ? { marginLeft: "10vw" } : { marginRight: "10vw" }
    return (
        <div
            className="arrowButtonContainer"
            style={style}>
            <button
                className="arrowButton" onClick={() => handleOnClick()}
            >
                <img
                    src={arrow}
                    width="50"
                    style={{ transform: `rotate(${rotation === "left" ? 180 : 0}deg)` }}
                    alt={rotation === "left" ? "Previous image" : "Next image"}
                />
            </button>
        </div >

    )
}

export default ArrowButton;