import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mushroom from "../../assets/mushroom.png";

import Row from "react-bootstrap/Row";

const MushroomRed = ({ thisCoins, userCoins, setThisCoins, setUserCoins }) => {
  const addCoins = () => {
    setThisCoins(thisCoins++);
    setUserCoins(userCoins--);
  };

  const subtractCoins = () => {
    setThisCoins(thisCoins--);
    setUserCoins(userCoins++);
  };

  return (
    <Card
      className="p-2"
      bg="danger"
      border="danger"
      style={{
        width: "18rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card.Header>Mushroom</Card.Header>
      <Card.Img src={mushroom}></Card.Img>
      <Card.Body>
        <Row
          style={{
            width: "18rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="btn btn-sm col-6">
            <Button disabled={userCoins <= 0} variant="dark" onClick={addCoins}>
              +
            </Button>
          </div>
          <div className="btn btn-sm col-6">
            <Button
              disabled={thisCoins <= 0}
              variant="dark"
              onClick={subtractCoins}
            >
              -
            </Button>
          </div>
        </Row>
        <Card.Text
          className="mt-2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Coins: {thisCoins}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MushroomRed;
