import React from 'react';
import Back from "./components/Back";
import Title from "./components/Title";
import User from "./components/User";
import SlotMachine from './container/SlotMachine';

const MarioSlot = ({ username, userCoins, setUserCoins }) => {
    return (
        <React.Fragment>
        <Back />
        <User username={username} userCoins={userCoins} />
        <Title />
        <SlotMachine userCoins={userCoins} setUserCoins={setUserCoins} />
        </React.Fragment>
    )
}

export default MarioSlot
