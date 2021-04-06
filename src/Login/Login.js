import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Login({ setUsername, setUserCoins }) {
  const [localUsername, setLocalUsername] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setLocalUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    setUsername(localUsername);
    setUserCoins(10);
  };

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
        <form>
          <label>
            Username:{" "}
            <input type="text" value={localUsername} onChange={handleChange} />
          </label>{" "}
          <Button variant="dark" onClick={handleSubmit}>
            <Link to="/">Submit</Link>
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Login;
