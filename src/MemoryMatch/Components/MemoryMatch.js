import React, { useEffect, useState } from 'react';
import { MemoryBoard } from './MemoryBoard';

import MemoryPic from '../assets/MemoryMatch.png';
import { createDeck } from "./MemoryDeck"
import { Card, ListGroup } from 'react-bootstrap';
import "../css/MemoryMatch.css"

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Redirect } from "react-router-dom";
import Back from './Back'


export const MemoryMatch = ({username, userCoins, setUserCoins}) => {
  //hooks

  const [cards, setCards] = useState([]) //set cards in play of current board
  const [flipped, setFlipped] = useState([]) //track which cards are flipped
  const [dimension, setDimension] = useState(100) //make screen responsive
  const [solved, setSovled] = useState([]) //array that has solved id of cards
  const [disabled, setDisabled] = useState(false) //can only click 2 cards at a time.
  const [round, setRound] = useState(0) //keep track of rounds played
  const [coins, setCoins] = useState(userCoins) //keep track of user coins
  const [bet, setBet] = useState(0) //keep track of bet
  const [boardDisabled, setBoardDisabled] = useState(true)
  const [isEnabled, setEnabled] = useState(true);
  const [stash, setStash] = useState(bet)
  const [balance, setBalance] = useState(bet) // assist in the change of balance from stash to coins
  const [gameState, setGameState] = useState(false)


  //toastify custom ids
  const incBetId = "1"
  const entryId = "2"
  const wonId = "5"
  const lostId = "6"
  const startId = "7"
  const startErrorId = "8"

  //this useEffect replaces our componentDidMount()
  //won't get called ever time app re-renders, just called once

  useEffect(() => {
    resizeBoard() //resize board to make responsive
    setCards(createDeck) //setCards by creating deck
  }, [gameState]);

  useEffect(() => { //resize cards for responsive design
    const resizeListener = window.addEventListener('resize', resizeBoard)
    return () => window.removeEventListener('resize', resizeListener)
  })

  //functions for game logic
  const handleClick = (id) => {
    console.log("Flipping card!")
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
      console.log(flipped + " inserted into flipped")
      setDisabled(false)
      return
    } else {
      if (sameCardClicked(id)) return
      setFlipped([flipped[0], id])
      console.log(flipped[0], " inserted into flipped")
      if (pairFound(id)) {
        toast.success("Card match found. Stash increased!")
        setSovled([...solved, flipped[0], id])
        setStash(stash + 1)
        if (solved.length == 10) {
          setTimeout(endGameWin, 2000)
        } else {
          resetCards()
        }
      } else {
        toast.error("Card match not found. Stash decreased.")
        setStash(stash - 1)
        if (stash - 1 == 0) {
          setTimeout(endGameLoss, 2000)
        } else {
          setTimeout(resetCards, 2000)
        }
      }
    }

  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const pairFound = (id) => {
    const clickedCard = cards.find(card => card.id === id)
    const flippedCard = cards.find(card => flipped[0] === card.id)
    console.log("finding if match!")
    return flippedCard.icon === clickedCard.icon
  }

  const resizeBoard = () => {
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    ))
  }
  const sameCardClicked = (id) => flipped.includes(id)

  //betting functions
  //If user wants to place bet, make sure they have the funds for it
  const incBet = () => {
    if (bet + 1 > coins){
      toast.error("Cannot bet more coins than available.", {
        position: toast.POSITION.TOP_LEFT,
        toastId: incBetId
      });
    } else {
      setBet(bet + 1)
      setStash(stash + 1)
      setBalance(balance + 1)
    }
  }

  const decBet = () => {
    if (!(bet == 0)){
      setBet(bet - 1)
      setStash(stash - 1)
      setBalance(balance - 1) 
    }
  }

  //before bet is placed, user cannot flip cards, all disabled
  const startGame = () => {
    if (coins < 4) {
      toast.error("Not enough coins to play game. Return to main menu.", {
        position: toast.POSITION.TOP_LEFT,
        toastId: startErrorId
      });
    } else if (bet < 4){
      toast.error("Minimum of 4 coins required to play.", {
        position: toast.POSITION.TOP_LEFT,
        toastId: entryId
      });
    } 
    
    else {
      toast.success("Game start: Round " + (round + 1), {
        position: toast.POSITION.TOP_LEFT,
        toastId: startId
      });
      setBoardDisabled(false)
      setEnabled(false)
      setStash(bet)
      setRound(round + 1)
      setCoins(coins - balance)
      setUserCoins(coins - balance)
      setGameState(!gameState)
    }
  }

  //when user has successfully finished the game
  const endGameWin = () => {
    setFlipped([])
    setSovled([])
    setBoardDisabled(true)
    setEnabled(true)
    setCoins(coins + stash + 1)
    setUserCoins(coins + stash + 1)
    setDisabled(false)
    setBalance(0)
    toast.success("Round won, place bet to play again!", {
      toastId: wonId
    })
    setBet(0)
    console.log("coins " + coins + " balance " + balance + " stash " + stash)
  }

  //when user has lost the game
  const endGameLoss = () => {
    setFlipped([])
    setSovled([])
    setBoardDisabled(true)
    setEnabled(true)
    setDisabled(false)
    toast.error("Round lost, place bet to play again.", {
      toastId: lostId
    })
    setBalance(0)
    setBet(0)
  }

  var extraStyles = ''
  if (isEnabled){
    extraStyles = {width: '410px', height: '430px', marginLeft: '90px', backgroundColor: 'rgb(201, 76, 76)'}
  } else {
    extraStyles = {width: '410px', height: '535px',  marginLeft: '90px', backgroundColor: 'rgb(201, 76, 76)'}
  }

  return (
    <div className="mini-game-container" style={{backgroundColor: 'rgb(22, 29, 39)'}}>
      <Back/>
      <img src={MemoryPic} className="title" />
      <ToastContainer bodyClassName="toastBody"/>
      <div className="game-view">
        <Card style={extraStyles}>
          <Card.Header><div className="gameInfo">GAME INFO</div></Card.Header>
          <ListGroup variant="flush" >
            <ListGroup.Item style={{backgroundColor: '#add8e6'}}>
              <div className="gameInfo">{username}</div>
              <div className="gameInfo">Coins: {coins}</div>
            </ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: '#add8e6'}}>
              <div style={{fontSize: '13px', fontFamily: 'smb2', marginBottom: '5px'}}>(Minimum entry fee: 4 coins)</div>
              <div className="game-view">
                {isEnabled ? <button type="button" className="btn btn-primary" onClick={incBet} style={{fontFamily: 'smb2', fontSize: '10px', }}>Increase Bet</button> : <button type="button" className="btn btn-primary" disabled style={{fontFamily: 'smb2', fontSize: '10px', }}>Increase Bet</button>}
                {isEnabled ? <button type="button" className="btn btn-primary" onClick={decBet} style={{fontFamily: 'smb2', fontSize: '10px'}}>Decrease Bet</button> : <button type="button" className="btn btn-primary" disabled style={{fontFamily: 'smb2', fontSize: '10px', }}>Decrease Bet</button>}
              </div>
              <div className="gameInfo" style={{marginTop: '5px'}}>Bet: {bet}</div>
              <div className="game-view">
                {isEnabled ? <button type="button" className="btn btn-primary" onClick={startGame} style={{fontFamily: 'smb2', fontSize: '10px', }}>Place Bet</button> : <button type="button" className="btn btn-primary" disabled style={{fontFamily: 'smb2', fontSize: '10px', }}>Place Bet</button>}
              </div>

            </ListGroup.Item >
            <ListGroup.Item style={{backgroundColor: '#add8e6'}}>

            {!isEnabled ? <div className="gameInfo" >Round: {round} </div> : null}
              {!isEnabled ? <div className="gameInfo">Stash: {stash} </div> : null}

            </ListGroup.Item>
          </ListGroup>
        </Card>
      
        <MemoryBoard 
          coins={coins}
          dimension={dimension}
          cards={cards}
          flipped={flipped}
          handleClick={handleClick}
          disabled={disabled}
          solved={solved}
          boardDisabled={boardDisabled}
        />
      </div>
    </div>
  );
};

/*  <div className="game-view">
                  <button type="button" className="btn btn-primary" onClick={incBet}>Increase Bet</button>
                  <button type="button" className="btn btn-primary" onClick={decBet}>Decrease Bet</button>
                </div>
                <p2> Current Bet: {bet} </p2>
                <div className="game-view">
                  <button type="button" className="btn btn-primary" onClick={startGame}>Place Bet</button>

                </div>
    </div> */
