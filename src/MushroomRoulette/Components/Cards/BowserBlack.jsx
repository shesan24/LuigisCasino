import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bowser from '../../assets/bowser.png'; 

const BowserBlack = ({thisCoins, userCoins, setThisCoins, setUserCoins}) => {

    const addCoins = () => {
        setThisCoins(thisCoins++);
        setUserCoins(userCoins--);
    };

    const subtractCoins = () => {
        setThisCoins(thisCoins--);
        setUserCoins(userCoins++);
    };

    return(
        <Card bg='dark' border="dark" style={{ width: '18rem' }}>
            <Card.Header style={{color:'white'}}>Bowser</Card.Header> 
            <Card.Img src={bowser}></Card.Img>
            <Card.Body>
            <Button disabled={userCoins <= 0} variant="light" onClick={addCoins}>+</Button>{' '}
            <Button disabled={thisCoins <= 0} variant="light" onClick={subtractCoins}>-</Button>{' '}       
            <Card.Text style={{color:'white'}}>Coins: {thisCoins}</Card.Text> 
            </Card.Body>
        </Card> 
    )
}

export default BowserBlack;