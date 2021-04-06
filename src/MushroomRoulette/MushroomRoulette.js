import { useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import MarioRed from "./Components/Cards/MarioRed";
import MarioBlack from "./Components/Cards/MarioBlack";
import BowserBlack from "./Components/Cards/BowserBlack";
import BowserRed from "./Components/Cards/BowserRed";
import ShellBlack from "./Components/Cards/ShellBlack";
import ShellRed from "./Components/Cards/ShellRed";
import StarBlack from "./Components/Cards/StarBlack";
import StarRed from "./Components/Cards/StarRed";
import FlowerBlack from "./Components/Cards/FlowerBlack";
import FlowerRed from "./Components/Cards/FlowerRed";
import MushroomBlack from "./Components/Cards/MushroomBlack";
import MushroomRed from "./Components/Cards/MushroomRed";

import PlayButton from "./Components/PlayButton";
import User from "./Components/User";
import Back from "./Components/Back";
import Title from "./Components/Title";

const data = [
  { option: "Mario", style: { backgroundColor: "black" } },
  { option: "Bowser", style: { backgroundColor: "red" } },
  { option: "Flower", style: { backgroundColor: "black" } },
  { option: "Shell", style: { backgroundColor: "red" } },
  { option: "Star", style: { backgroundColor: "black" } },
  { option: "Mushroom", style: { backgroundColor: "red" } },
  { option: "Bowser", style: { backgroundColor: "black" } },
  { option: "Mario", style: { backgroundColor: "red" } },
  { option: "Mushroom", style: { backgroundColor: "black" } },
  { option: "Flower", style: { backgroundColor: "red" } },
  { option: "Shell", style: { backgroundColor: "black" } },
  { option: "Star", style: { backgroundColor: "red" } },
];

function MushroomRoulette({ username, userCoins, setUserCoins }) {
  const [marioRedCoins, setMarioRedCoins] = useState(0);
  const [marioBlackCoins, setMarioBlackCoins] = useState(0);
  const [bowserRedCoins, setBowserRedCoins] = useState(0);
  const [bowserBlackCoins, setBowserBlackCoins] = useState(0);
  const [flowerRedCoins, setFlowerRedCoins] = useState(0);
  const [flowerBlackCoins, setFlowerBlackCoins] = useState(0);
  const [shellRedCoins, setShellRedCoins] = useState(0);
  const [shellBlackCoins, setShellBlackCoins] = useState(0);
  const [starRedCoins, setStarRedCoins] = useState(0);
  const [starBlackCoins, setStarBlackCoins] = useState(0);
  const [mushroomRedCoins, setMushroomRedCoins] = useState(0);
  const [mushroomBlackCoins, setMushroomBlackCoins] = useState(0);

  return (
    <Container>
      <Back />
      <User username={username} coins={userCoins} />
      <Title />

      {/* <Roulette/> */}
      <PlayButton
        userCoins={userCoins}
        marioRedCoins={marioRedCoins}
        marioBlackCoins={marioBlackCoins}
        bowserRedCoins={bowserRedCoins}
        bowserBlackCoins={bowserBlackCoins}
        flowerRedCoins={flowerRedCoins}
        flowerBlackCoins={flowerBlackCoins}
        shellRedCoins={shellRedCoins}
        shellBlackCoins={shellBlackCoins}
        starRedCoins={starRedCoins}
        starBlackCoins={starBlackCoins}
        mushroomRedCoins={mushroomRedCoins}
        mushroomBlackCoins={mushroomBlackCoins}
        setUserCoins={setUserCoins}
        setMarioRedCoins={setMarioRedCoins}
        setMarioBlackCoins={setMarioBlackCoins}
        setBowserRedCoins={setBowserRedCoins}
        setBowserBlackCoins={setBowserBlackCoins}
        setFlowerRedCoins={setFlowerRedCoins}
        setFlowerBlackCoins={setFlowerBlackCoins}
        setShellRedCoins={setShellRedCoins}
        setShellBlackCoins={setShellBlackCoins}
        setStarRedCoins={setStarRedCoins}
        setStarBlackCoins={setStarBlackCoins}
        setMushroomRedCoins={setMushroomRedCoins}
        setMushroomBlackCoins={setMushroomBlackCoins}
      />
      <Row className="mx-5 mb-5">
        <CardGroup>
          <MarioRed
            thisCoins={marioRedCoins}
            userCoins={userCoins}
            setThisCoins={setMarioRedCoins}
            setUserCoins={setUserCoins}
          />
          <MushroomRed
            thisCoins={mushroomRedCoins}
            userCoins={userCoins}
            setThisCoins={setMushroomRedCoins}
            setUserCoins={setUserCoins}
          />
          <BowserRed
            thisCoins={bowserRedCoins}
            userCoins={userCoins}
            setThisCoins={setBowserRedCoins}
            setUserCoins={setUserCoins}
          />
          <StarRed
            thisCoins={starRedCoins}
            userCoins={userCoins}
            setThisCoins={setStarRedCoins}
            setUserCoins={setUserCoins}
          />
          <ShellRed
            thisCoins={shellRedCoins}
            userCoins={userCoins}
            setThisCoins={setShellRedCoins}
            setUserCoins={setUserCoins}
          />
          <FlowerRed
            thisCoins={flowerRedCoins}
            userCoins={userCoins}
            setThisCoins={setFlowerRedCoins}
            setUserCoins={setUserCoins}
          />
        </CardGroup>
        <CardGroup>
          <MarioBlack
            thisCoins={marioBlackCoins}
            userCoins={userCoins}
            setThisCoins={setMarioBlackCoins}
            setUserCoins={setUserCoins}
          />
          <MushroomBlack
            thisCoins={mushroomBlackCoins}
            userCoins={userCoins}
            setThisCoins={setMushroomBlackCoins}
            setUserCoins={setUserCoins}
          />
          <BowserBlack
            thisCoins={bowserBlackCoins}
            userCoins={userCoins}
            setThisCoins={setBowserBlackCoins}
            setUserCoins={setUserCoins}
          />
          <StarBlack
            thisCoins={starBlackCoins}
            userCoins={userCoins}
            setThisCoins={setStarBlackCoins}
            setUserCoins={setUserCoins}
          />
          <ShellBlack
            thisCoins={shellBlackCoins}
            userCoins={userCoins}
            setThisCoins={setShellBlackCoins}
            setUserCoins={setUserCoins}
          />
          <FlowerBlack
            thisCoins={flowerBlackCoins}
            userCoins={userCoins}
            setThisCoins={setFlowerBlackCoins}
            setUserCoins={setUserCoins}
          />
        </CardGroup>
        {/* <GameCard /> */}
        {/* <Test /> */}
        {/* <SimpleSlider /> */}
      </Row>
    </Container>
  );
}

export default MushroomRoulette;
