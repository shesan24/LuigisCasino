import React from 'react'
import "../css/MemoryMatch.css"
import {MemoryCard} from './MemoryCard.js'


export const MemoryBoard = ({solved, disabled, dimension, cards, flipped, handleClick, boardDisabled}) =>{
    return(
            <div className="game-board">
                {
                    cards.map((card) => (
                    <MemoryCard
                        id={card.id} //card unique id
                        icon={card.icon}
                        width={dimension/6}
                        height={dimension/6}
                        flipped={flipped.includes(card.id)} //check flipped state of card in array, if it includes card id
                        handleClick = {handleClick} //handle click event 
                        disabled={disabled || solved.includes(card.id)}
                        solved={solved.includes(card.id)}
                        boardDisabled={boardDisabled}
                    />))
                }
            </div>
    );
}