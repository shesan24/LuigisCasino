import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import shell from '../../assets/shell.png'; 

const ShellRed = ({thisCoins, userCoins, setThisCoins, setUserCoins}) => {

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
            <Card.Header>Shell</Card.Header> 
            <Card.Img src={shell}></Card.Img>
            <Card.Body>
            <Button disabled={userCoins <= 0} variant="dark" onClick={addCoins}>+</Button>{' '}
            <Button disabled={thisCoins <= 0} variant="dark" onClick={subtractCoins}>-</Button>{' '}       
            <Card.Text>Coins: {thisCoins}</Card.Text> 
            </Card.Body>
        </Card> 
    )
}

export default ShellRed;