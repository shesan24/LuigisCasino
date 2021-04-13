import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Main/Main";
import Register from "./Login/Register";
import MushroomRoulette from "./MushroomRoulette/MushroomRoulette";
import PairAGone from "./PairAGone/PairAGone";
import { MemoryMatch } from './MemoryMatch/Components/MemoryMatch';
import MarioSlot from './MarioSlot/MarioSlot'
import {PicturePoker} from './PicturePoker/PicturePoker'

function App() {
  const [userCoins, setUserCoins] = useState(1);
  const [username, setUsername] = useState("");

  return (
    <Router>
      <Switch>
        <Route path="/mushroomroulette">
          <MushroomRoulette
            username={username}
            userCoins={userCoins}
            setUserCoins={setUserCoins}
          />
        </Route>
        <Route path="/memorymatch">
          <MemoryMatch
            username={username}
            userCoins={userCoins}
            setUserCoins={setUserCoins}
          />
        </Route>
        <Route path="/pairagone">
          <PairAGone
            username={username}
            userCoins={userCoins}
            setUserCoins={setUserCoins}
          />
        </Route>
        <Route path="/marioslot">
          <MarioSlot
            username={username}
            userCoins={userCoins}
            setUserCoins={setUserCoins}
          />
        </Route>
        <Route path="/picturepoker">
          <PicturePoker
            userName={username}
            userCoins={userCoins}
            setUserCoins={setUserCoins}
          />
        </Route>
        <Route path="/register">
          <Register setUsername={setUsername} setUserCoins={setUserCoins} />
        </Route>
        <Route path="/">
          <Main username={username} userCoins={userCoins} setUserCoins={setUserCoins} />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
