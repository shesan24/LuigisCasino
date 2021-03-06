import React from 'react';
import { Link } from "react-router-dom";
import './../css/PopUp.css';

export const PopUp = (props) => {
    return (
        <div class="pair-modal">
          <p class="pair-message">Times Up! Your Score is {props.score}</p>
          <div class="pair-options">
            <button class="pair-btn" onClick={props.handleReplay}>Replay</button>
            <Link to="/">
              <button class="pair-btn">Exit</button>
            </Link> 
          </div>
        </div>
    )
}

export const OutCoinWindow = (props) => {
  return (
    <div class="pair-modal">
      <p class="pair-message">You are run out of coin, Please exit the game</p>
      <div class="pair-options">
        <Link to="/">
            <button class="pair-btn">Exit</button>
        </Link>   
      </div>
    </div>
  )
}

export const RuleWindow = (props) => {
  return (
      <div class="pair-modal">
        <p class="pair-message">Welcome to Pair A Gone Game, Please place a bet in order to play the game</p>
        <div class="pair-options">
        </div>
      </div>
  )
}