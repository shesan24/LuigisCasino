import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Roulette2 from './Roulette2'
import Result from './Result';

const PlayButton = (
{
userCoins, 
marioRedCoins,
marioBlackCoins,
bowserRedCoins,
bowserBlackCoins,
flowerRedCoins,
flowerBlackCoins,
shellRedCoins,
shellBlackCoins,
starRedCoins,
starBlackCoins,
mushroomRedCoins,
mushroomBlackCoins,
setUserCoins,
setMarioRedCoins,
setMarioBlackCoins,
setBowserRedCoins,
setBowserBlackCoins,
setFlowerRedCoins,
setFlowerBlackCoins,
setShellRedCoins,
setShellBlackCoins,
setStarRedCoins,
setStarBlackCoins,
setMushroomRedCoins,
setMushroomBlackCoins
}) => {

    const [prizenum, setPrizeNum] = useState(Math.floor(Math.random() * 12));
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [spin, setSpin] = useState(false);
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState('');

    const play = () => {

        setButtonDisabled(true)
        setSpin(true);
        let extraCoins = 0; 
        console.log("prizenum before", prizenum);
        // console.log("redcoins before", marioRedCoins);
        // console.log("usercoins before", userCoins);
        if (prizenum === 0) extraCoins += marioBlackCoins*3;
        else if (prizenum === 1) extraCoins += bowserRedCoins*3;
        else if (prizenum === 2) extraCoins += flowerBlackCoins*3;
        else if (prizenum === 3) extraCoins += shellRedCoins*3;
        else if (prizenum === 4) extraCoins += starBlackCoins*3;
        else if (prizenum === 5) extraCoins += mushroomRedCoins*3;
        else if (prizenum === 6) extraCoins += bowserBlackCoins*3;
        else if (prizenum === 7) extraCoins += marioRedCoins*3;
        else if (prizenum === 8) extraCoins += mushroomBlackCoins*3;
        else if (prizenum === 9) extraCoins += flowerRedCoins*3;
        else if (prizenum === 10) extraCoins += starBlackCoins*3;
        else if (prizenum === 11) extraCoins += starRedCoins*3;
        //userCoins += redCoins*2;
        
        setMarioRedCoins(0);
        setMarioBlackCoins(0);
        setBowserRedCoins(0);
        setBowserBlackCoins(0);
        setFlowerRedCoins(0);
        setFlowerBlackCoins(0);
        setShellRedCoins(0);
        setShellBlackCoins(0);
        setStarRedCoins(0);
        setStarBlackCoins(0);
        setMushroomRedCoins(0);
        setMushroomBlackCoins(0)

        setTimeout(function(){
            setMsg(`You won: ${extraCoins} coins!`)
            setShow(true); 
            setUserCoins(userCoins + extraCoins);
            setButtonDisabled(false);
            setPrizeNum((Math.floor(Math.random() * 12)));
        }, 12000);

        // console.log("prizenum after", prizenum);
        // console.log("redcoins after", marioRedCoins);
        // console.log("usercoins after", userCoins);
    }

    return(
        <div style={{display: "flex",
        justifyContent: "center",
        alignItems: "center",}}>
            <Container >
            <Roulette2 spin={spin} prizenum={prizenum} setSpin={setSpin}/>
            <Row className='m-5' style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",}}><Button disabled={
        (marioRedCoins <= 0 && 
         marioBlackCoins <= 0 &&
         bowserRedCoins <= 0 &&
         bowserBlackCoins <= 0 &&
         flowerRedCoins <= 0 &&
         flowerBlackCoins <= 0 &&
         shellRedCoins <= 0 &&
         shellBlackCoins <= 0 &&
         starRedCoins <= 0 &&
         starBlackCoins <= 0 &&
         mushroomRedCoins <= 0 &&
         mushroomBlackCoins <= 0               
         ) || buttonDisabled} variant="dark" onClick={play} >Play</Button></Row>
            
            <Result show={show} msg={msg} setShow={setShow} setMsg={setMsg}/>
            </Container>
        </div> 
    )
}

export default PlayButton;