import React from 'react'
import { Wheel } from 'react-custom-roulette'

const data = [
  { option: 'Mario', style: { backgroundColor: 'black'} },
  { option: 'Bowser', style: { backgroundColor: 'red'} },
  { option: 'Flower', style: { backgroundColor: 'black' } },
  { option: 'Shell', style: { backgroundColor: 'red' } },
  { option: 'Star', style: { backgroundColor: 'black' } },
  { option: 'Mushroom', style: { backgroundColor: 'red'} },
  { option: 'Bowser', style: { backgroundColor: 'black'} },
  { option: 'Mario', style: { backgroundColor: 'red'} },
  { option: 'Mushroom', style: { backgroundColor: 'black'} },
  { option: 'Flower', style: { backgroundColor: 'red' } },
  { option: 'Shell', style: { backgroundColor: 'black' } },
  { option: 'Star', style: { backgroundColor: 'red' } },
]

const Roulette2 = ({spin,prizenum,setSpin}) => {
  return (
    <div style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",}}>
    <Wheel
      mustStartSpinning={spin}
      prizeNumber={prizenum}
      data={data}
      onStopSpinning={() => {
        setSpin(false)
      }}
      backgroundColors={['#3e3e3e', '#df3428']}
      textColors={['#ffffff']}
    />
    </div>
  );
    
}

export default Roulette2;