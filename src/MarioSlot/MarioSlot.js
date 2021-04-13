import Back from './components/Back';
import Title from './components/Title';
import User from './components/User';
import SlotMachine from './container/SlotMachine';
import './css/MarioSlot.css'

const MarioSlot = ({ username, userCoins, setUserCoins }) => {
    return (
        <div className="mario-slot-container">
        <Back />
        <User username={username} userCoins={userCoins} />
        <Title />
        <SlotMachine userCoins={userCoins} setUserCoins={setUserCoins} />
        </div>
    )
}

export default MarioSlot
