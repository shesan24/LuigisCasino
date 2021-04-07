import React from 'react';
import MarioIcon from '../../assets/marioicon.png';
import MushroomIcon from '../../assets/mushroomicon.png';
import StarIcon from '../../assets/staricon.png';
import LuigiIcon from '../../assets/luigiicon.png';
import CloudIcon from '../../assets/cloudicon.png';

import classNames from 'classnames';

import './../../css/pairAGone/PairCard.css';

export const PairCard = (props) => {

    const iconMatcher = (cardName) => {
        switch (cardName) {
            case 1:
              return MarioIcon;
        
            case 2:
              return MushroomIcon;
        
            case 3:
              return StarIcon;
        
            case 4:
              return LuigiIcon;
        
            case 5:
              return CloudIcon;
        
            default:
              return CloudIcon;
          }
    }

    return (
        <button className={classNames('pair-card', props.isFocused ? 'focus' : '')} name={props.name} id={props.id} value={props.value} onClick={props.onChange}>
            <img className="pair-icon" src={iconMatcher(props.name)}/>
        </button>
    )
}