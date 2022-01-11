import { FunctionComponent } from 'react';
import arrow from './arrow.png';
import './ArrowButton.css';

interface Props {
  handleOnClick: () => void;
  rotation: 'right' | 'left';
  disabled: boolean;
}

const ArrowButton: FunctionComponent<Props> = ({
  handleOnClick,
  rotation,
  disabled,
}) => {
  const style =
    rotation === 'left' ? { marginLeft: '10vw' } : { marginRight: '10vw' };
  return (
    <div className="arrowButtonContainer" style={style}>
      <button
        disabled={disabled}
        className="arrowButton"
        onClick={() => handleOnClick()}
      >
        <img
          src={arrow}
          width="50"
          style={{ transform: `rotate(${rotation === 'left' ? 180 : 0}deg)` }}
          alt={rotation === 'left' ? 'Previous image' : 'Next image'}
        />
      </button>
    </div>
  );
};

export default ArrowButton;
