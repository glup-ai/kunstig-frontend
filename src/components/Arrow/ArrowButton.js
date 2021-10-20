import './ArrowButton.css';
import arrow from './arrow.png';

const ArrowButton = ({ handleOnClick, rotation }) => {
    return (
        <div className="arrowButtonContainer">
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
        </div>

    )
}

export default ArrowButton;