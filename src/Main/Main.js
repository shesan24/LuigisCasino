import { Link, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";

import GameCard1 from "./Components/Gamecard1";
import GameCard2 from "./Components/Gamecard2";
import GameCard3 from "./Components/Gamecard3";
import GameCard4 from "./Components/Gamecard4";
import GameCard5 from "./Components/Gamecard5";

function Main({ username, userCoins }) {
  if (username === "") {
    return <Redirect to="/login" />;
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
      {/* <Row>
        <Link to="/mushroomroulette">Mushroom Roulette</Link>
      </Row>
      <Row>
        <Link to="/memorymatch">Memory Match</Link>
      </Row>
      <Row>
        <Link to="/pairagone">Pair-A-Gone</Link>
      </Row>
      <Row>
        <Link to="/marioslot">Mario Slot</Link>
      </Row>
      <Row>
        <Link to="/picturepoker">Picture Poker</Link>
      </Row> */}
    </Container>
  );
}

export default Main;
