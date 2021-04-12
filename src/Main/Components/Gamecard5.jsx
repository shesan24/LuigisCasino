import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import picturepoker from "../assets/picturepoker.png";
import { Link } from "react-router-dom";

const BowserBlack = ({ userCoins }) => {
  return (
    <Card className="mx-2" bg="dark" border="dark" style={{ width: "18rem" }}>
      <Card.Header
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Picture Poker
      </Card.Header>
      <Card.Img src={picturepoker}></Card.Img>
      <Card.Body
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/picturepoker">
          <Button disabled={userCoins <= 0}>Play</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BowserBlack;
