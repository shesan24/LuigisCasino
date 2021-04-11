import React, { useEffect, useState } from 'react';
import { bestHand } from './utils/bestHand';
import randomCard from './utils/randomCard';
import { Card } from './components/Card';
import './css/PicturePoker.css';

export const PicturePoker = ({ userCoins: coins, setUserCoins: setCoins }) => {
  const initialGameState = {
    round: 0,
    roundStage: 'betting', // betting | result
    winner: 'tie',
    isGameOver: false
  };
  const initialBoard = {
    luigisHand: [
      [randomCard(), 'back'],
      [randomCard(), 'back'],
      [randomCard(), 'back'],
      [randomCard(), 'back'],
      [randomCard(), 'back']
    ],
    usrHand: [
      [randomCard(), 'front', false],
      [randomCard(), 'front', false],
      [randomCard(), 'front', false],
      [randomCard(), 'front', false],
      [randomCard(), 'front', false]
    ]
  };

  const initialCoins = 10;
  const initialBet = 0;
  const initialAction = 'hold';

  // hooks
  const [gameState, setGameState] = useState(initialGameState);
  const [board, setBoard] = useState(initialBoard);
  // const [coins, setCoins] = useState(initialCoins);
  const [bet, setBet] = useState(initialBet);
  const [action, setAction] = useState(initialAction);

  // methods

  /**
   * Handles the event when the bet button is clicked
   */
  const handleBetClick = () => {
    if (gameState.roundStage === 'betting' && coins > 0) {
      setCoins(() => coins - 1);
      setBet(() => bet + 1);
    }
  };

  const handleActionClick = () => {
    if (action === 'draw') {
      setBoard((prev) => {
        // make new array
        const newArray = prev.usrHand.map((card, index) => {
          // if card is focused
          if (card[2]) {
            return [randomCard(), card[1], false];
          } else {
            return card;
          }
        });
        return {
          ...prev,
          usrHand: newArray
        };
      });
      setGameState({
        round: 0,
        roundStage: 'result' // betting | result
      });
    } else {
      setGameState({
        round: 0,
        roundStage: 'result' // betting | result
      });
    }
    setBoard((prev) => {
      const newArray = prev.luigisHand.map((card) => {
        return [card[0], 'front'];
      });
      return {
        ...prev,
        luigisHand: newArray
      };
    });
  };

  /**
   * Handles a click of card
   * @param {number} key index of react card
   * @returns new state
   */
  const handleCardClick = (key) => {
    if (gameState.roundStage === 'betting') {
      setBoard((prev) => {
        // make new array
        const newArray = prev.usrHand.map((card, index) => {
          // if index is the card that's clicked on
          if (index === key) {
            // if itsa lready clicked on
            if (prev.usrHand[index][2]) {
              // unfocus it
              return [card[0], card[1], false];
            } else {
              // focus it
              return [card[0], card[1], true];
            }
          } else {
            return card;
          }
        });

        return {
          ...prev,
          usrHand: newArray
        };
      });
    }
  };

  // use effect since we need to know the boards state for this
  useEffect(() => {
    setAction((prev) => {
      const isOneSelected = board.usrHand.some((card) => {
        return card[2] === true;
      });
      if (isOneSelected) {
        return 'draw';
      } else {
        return 'hold';
      }
    });
  }, [board]);

  useEffect(() => {
    setGameState((prev) => {
      return {
        ...prev,
        winner: bestHand(board.usrHand, board.luigisHand)[0]
      };
    });
  }, [gameState.roundStage]);

  useEffect(() => {
    if (gameState.roundStage === 'result') {
      let hand = bestHand(board.usrHand, board.luigisHand)[1][0];
      if (gameState.winner == 'user') setCoins(coins + hand + bet);
      if (gameState.winner == 'luigi') {
        if (coins - hand + bet <= 0) {
          setGameState((prev) => {
            return {
              ...prev,
              roundStage: 'gameover',
              isGameOver: true
            };
          });
        }

        setCoins(coins - (hand + bet));
      }
    }
  }, [gameState.winner]);

  return (
    <div className="mini-game-container">
      {/*
        luigi's cards
      */}
      <h1 className="hand-h1" style={{ marginTop: '0' }}>
        Luigi's hand
      </h1>
      <div className="cards-container">
        {board.luigisHand.map((card, key) => {
          return (
            <Card
              type={card[0]}
              face={card[1]}
              key={key}
              onClick={() => console.log('yo')}
            />
          );
        })}
      </div>
      {/* 
        users's cards
      */}
      <h1 className="hand-h1">Your hand</h1>
      <div className="cards-container users">
        {board.usrHand.map((card, key) => {
          return (
            <Card
              type={card[0]}
              face={card[1]}
              key={key}
              isFocused={card[2]}
              onClick={() => handleCardClick(key)}
            />
          );
        })}
      </div>
      <div className="actions-container">
        {gameState.isGameOver ? (
          <h3>You lose</h3>
        ) : (
          <>
            {' '}
            <div className="game-feed">
              <h3 className="pph3">
                <span
                  style={{
                    color: 'rgb(101, 102, 105)',
                    fontWeight: '500',
                    marginRight: '5px'
                  }}
                >
                  Your coins:
                </span>{' '}
                {coins}
              </h3>
              <h3 className="pph3">
                <span
                  style={{
                    color: 'rgb(101, 102, 105)',
                    fontWeight: '500',
                    marginRight: '5px'
                  }}
                >
                  Current Bet:
                </span>
                {bet}
              </h3>
            </div>
            <div className="action-btns">
              {gameState.roundStage === 'betting' ? (
                <>
                  <button className="ppbtn bet" onClick={handleBetClick}>
                    Bet Coins
                  </button>
                  <button onClick={handleActionClick} className="ppbtn action">
                    {action}
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="ppbtn bet disabled"
                    onClick={handleBetClick}
                  >
                    Bet Coins
                  </button>
                  <button
                    onClick={handleActionClick}
                    className="ppbtn action disabled"
                  >
                    {action}
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
      <div className="results-container">
        {gameState.roundStage === 'result' ? (
          <>
            <h3
              style={{
                marginRight: '30px'
              }}
            >
              <span
                style={{
                  color: 'rgb(101, 102, 105)',
                  fontWeight: '500',
                  marginRight: '5px'
                }}
              >
                Winner:
              </span>
              {gameState.winner}
            </h3>
            <button
              className="ppbtn reset"
              onClick={() => {
                setGameState((prev) => {
                  return {
                    ...prev,
                    roundStage: 'betting'
                  };
                });
                setBoard({
                  luigisHand: [
                    [randomCard(), 'back'],
                    [randomCard(), 'back'],
                    [randomCard(), 'back'],
                    [randomCard(), 'back'],
                    [randomCard(), 'back']
                  ],
                  usrHand: [
                    [randomCard(), 'front', false],
                    [randomCard(), 'front', false],
                    [randomCard(), 'front', false],
                    [randomCard(), 'front', false],
                    [randomCard(), 'front', false]
                  ]
                });
                setBet(0);
              }}
            >
              Next Round
            </button>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
