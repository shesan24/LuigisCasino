import React, {useState} from 'react'
import BackIcon from '../assets/back.png';
import '../css/MemoryMatch.css';
import ReactCardFlip from 'react-card-flip'
import iconSelector from '../utils/iconSelector'

export const MemoryCard = ({id, icon, width, height, flipped, handleClick, disabled, solved, boardDisabled}) => {
    const extraStyles = { width: width, height: height, marginBottom: '25px', marginRight: '25px' };
    return(
        <ReactCardFlip isFlipped={flipped || solved} flipDirection="horizontal" containerStyle={extraStyles}>
        <div style={{width, height}} onClick={() => (disabled || boardDisabled) ? null : handleClick(id)}>
          <img style={{width, height, border: '5px solid black', borderRadius: '10px'}}
                    src={BackIcon}

            />
        </div>

        <div style={{width, height}}>
            <img style={{width, height}} src={iconSelector(icon)}></img>
        </div>
        
      </ReactCardFlip>
        // <div 
        // className={`flip-container ${flipped ? 'flipped' : ''}`}
        // style={{width, height}}
        // onClick={disabled ? null : () => handleClick(id)}
        // >
        //     <div className="flipper">
        //         <img style={{width, height}}
        //             className={flipped ? 'front' : 'back'}
        //             src={flipped || solved ? iconSelector(icon) : BackIcon}
        //         />
        //     </div>
        // </div>
    );
};


