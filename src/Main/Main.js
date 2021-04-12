import { Link, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Main({ username, userCoins }) {
  if (username === "") {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <div>
        Luigi's Casino
      </div>
      <div className="m-5" style={{ display: "flex", alignItems: "center" }}>
        <h3 className="ml-5">
          Username: {username} | Coins: {userCoins}
        </h3>
      </div>
      <Row>
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
      </Row>
    </Container>
  );
}

export default Main;
