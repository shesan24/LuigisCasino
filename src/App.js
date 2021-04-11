import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Main/Main";
import Login from "./Login/Login";
import MushroomRoulette from "./MushroomRoulette/MushroomRoulette";
import PairAGone from "./PairAGone/PairAGone";
import { MemoryMatch } from './MemoryMatch/Components/MemoryMatch';

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
        <Route path="/login">
          <Login setUsername={setUsername} setUserCoins={setUserCoins} />
        </Route>
        <Route path="/">
          <Main username={username} userCoins={userCoins} />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
