import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./Register.css";
import { Helmet } from "react-helmet";
import LuigiIcon from "./LuigiIcon.jpeg";
function Register({ setUsername, setUserCoins }) {
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
    <div>
      <Helmet>
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      </Helmet>
      <h1
        class="wrapper fadeInDown"
        style={{
          fontFamily: "smb2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Luigi's Casino
      </h1>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <img src={LuigiIcon} style={{ height: "200px", width: "200px" }} />
          </div>

          <h1
            class="fadeIn first"
            style={{ fontFamily: "smb2", fontSize: "20px" }}
          >
            Register to play
          </h1>

          <form>
            <input
              type="text"
              value={localUsername}
              onChange={handleChange}
              class="fadeIn second"
              name="register"
              placeholder="username"
              style={{ fontFamily: "smb2", fontSize: "20px" }}
            ></input>
            <Link to="">
              <input
                type="submit"
                class="fadeIn fourth"
                value="Register"
                style={{ fontFamily: "smb2", fontSize: "20px" }}
                onClick={handleSubmit}
                disabled={localUsername === ""}
              ></input>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
