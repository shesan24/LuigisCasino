import classNames from 'classnames';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import '../css/Card.css';
import iconSelector from '../utils/iconSelector';

export const Card = (props) => {
  return (
    <ReactCardFlip
      isFlipped={props.face === 'back'}
      flipDirection="horizontal"
      containerStyle={extraStyles}
    >
      <div
        className={classNames('card-front', props.isFocused ? 'focus' : '')}
        onClick={() => props.onClick()}
      >
        <img src={iconSelector(props.type)}></img>
      </div>
      <div className="card-back" onClick={() => props.onClick()}></div>
    </ReactCardFlip>
  );
};

const extraStyles = { width: '150px', height: '225px', margin: '15px' };
