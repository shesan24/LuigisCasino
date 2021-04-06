import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import star from '../../assets/star.png'; 

const StarBlack = ({thisCoins, userCoins, setThisCoins, setUserCoins}) => {

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
            <Card.Header style={{color:'white'}}>Star</Card.Header> 
            <Card.Img src={star}></Card.Img>
            <Card.Body>
            <Button disabled={userCoins <= 0} variant="light" onClick={addCoins}>+</Button>{' '}
            <Button disabled={thisCoins <= 0} variant="light" onClick={subtractCoins}>-</Button>{' '}       
            <Card.Text style={{color:'white'}}>Coins: {thisCoins}</Card.Text> 
            </Card.Body>
        </Card> 
    )
}

export default StarBlack;