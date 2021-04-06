import { Link, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Main({ username, userCoins }) {
  if (username === "") {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <div
        className="m-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Luigi's Casino
      </div>
      <div className="m-5" style={{ display: "flex", alignItems: "center" }}>
        <h3 className="ml-5">
          Username: {username} | Coins: {userCoins}
        </h3>
      </div>
      <Row>
        <Link to="/mushroomroulette">MushroomRoulette</Link>{" "}
      </Row>
      <Row>
        <Link>Game 2</Link>
      </Row>
      <Row>
        <Link>Game 3</Link>
      </Row>
    </Container>
  );
}

export default Main;
