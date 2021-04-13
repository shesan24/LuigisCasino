import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pairagone from "../assets/pairagone.png";
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
        Pair A Gone
      </Card.Header>
      <Card.Img src={pairagone}></Card.Img>
      <Card.Body
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/pairagone">
          <Button disabled={userCoins <= 0}>Play</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BowserBlack;
