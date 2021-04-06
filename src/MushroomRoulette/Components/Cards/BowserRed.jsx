import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bowser from '../../assets/bowser.png'; 

const BowserRed = ({thisCoins, userCoins, setThisCoins, setUserCoins}) => {

    const addCoins = () => {
        setThisCoins(thisCoins++);
        setUserCoins(userCoins--);
    };

    const subtractCoins = () => {
        setThisCoins(thisCoins--);
        setUserCoins(userCoins++);
    };

    return(
        <Card bg='danger' border="danger" style={{ width: '18rem' }}>
            <Card.Header>Bowser</Card.Header> 
            <Card.Img src={bowser}></Card.Img>
            <Card.Body>
            <Button disabled={userCoins <= 0} variant="dark" onClick={addCoins}>+</Button>{' '}
            <Button disabled={thisCoins <= 0} variant="dark" onClick={subtractCoins}>-</Button>{' '}       
            <Card.Text>Coins: {thisCoins}</Card.Text> 
            </Card.Body>
        </Card> 
    )
}

export default BowserRed;