import { Link, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import { useState } from "react";

import GameCard1 from "./Components/Gamecard1";
import GameCard2 from "./Components/Gamecard2";
import GameCard3 from "./Components/Gamecard3";
import GameCard4 from "./Components/Gamecard4";
import GameCard5 from "./Components/Gamecard5";

function Main({ username, userCoins, setUserCoins}) {

  if (username === "") {
    return <Redirect to="/register" />;
  }

  const refillBalance = () => {
    setUserCoins(10)
  }

  return (
    <Container>
      <h1
        className="m-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "smb2",
        }}
      >
        Luigi's Casino
      </h1>
      <div
        className="m-5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 className="ml-5">
          Username: {username} | Coins: {userCoins}
        </h3>
        
        <button type="button" className="btn btn-primary" style={{marginLeft: '20px'}} disabled={userCoins != 0} onClick={refillBalance}>Refill Balance</button>
        <Link to="/register">
        <button type="button" className="btn btn-primary">Exit Session</button>
        </Link>
      </div>
      <Row className="mx-5 mb-5">
        <CardGroup>
          <GameCard1 userCoins={userCoins} />
          <GameCard2 userCoins={userCoins} />
          <GameCard3 userCoins={userCoins} />
          <GameCard4 userCoins={userCoins} />
          <GameCard5 userCoins={userCoins} />
        </CardGroup>
      </Row>
      
    </Container>
  );
}

export default Main;
