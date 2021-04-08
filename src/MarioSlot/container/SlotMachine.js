import uniq from 'lodash/uniq';
import { default as React, useEffect, useState } from 'react';
import Spinner from './Spinner';

const MAX_PRIZE = 50
const CONSEC_PRIZE = 10
const NON_CONSEC_PRIZE = 5

const SlotMachine = ({ userCoins, setUserCoins }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  const [prize, setPrize] = useState(0);
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(0);

  useEffect(() => {setStart(setTimeout(() => {handleStart()}, 5000))}, [])
  useEffect(() => {setStop(setTimeout(() => {handleStop()}, 10000))}, [isRunning])

  const handleStart = () => {
    setIsRunning(true);
    setWinner(false);
    setLoser(false);
    setPrize(0);
    clearTimeout(start)
    setUserCoins(userCoins - 1);
  }

  const handleStop = () => {
    setIsRunning(false)
    clearTimeout(stop)
  }

  const handleResult = (wheels) => {
    const images = wheels.map(wheel => wheel.split('/').pop())
    const result = uniq(images)

    // loose
    if (result.length === 3) {
      setWinner(false);
      setLoser(true);
      setPrize(0);
      return
    }

    // win max prize
    if (result.length === 1) {
      setWinner(winner);
      setLoser(false);
      setPrize(MAX_PRIZE);
      setUserCoins(userCoins + MAX_PRIZE)
      return
    }

    // two consecutive symbols
    if (images[0] === images[1] || images[1] === images[2]) {
      setWinner(true);
      setLoser(false);
      setPrize(CONSEC_PRIZE);
      setUserCoins(userCoins + CONSEC_PRIZE)
      return
    }

    // non-consecutive symbols
    setWinner(true);
    setLoser(false);
    setPrize(NON_CONSEC_PRIZE);
    setUserCoins(userCoins + NON_CONSEC_PRIZE)
  }

  return (
    <React.Fragment>
      <Spinner spin={isRunning} onStop={handleResult} />
      <button onClick={handleStart} disabled={!isRunning && userCoins <= 0}>Start</button>
      <button onClick={handleStop} disabled={!isRunning}>Stop</button>
      <div>
        {winner && <div>You win! Your prize: {prize} Coins</div>}
        {loser &&
        <React.Fragment>
          <div>You lose</div>
          </React.Fragment>
        }
      </div>
    </React.Fragment>
  )
}

export default SlotMachine
