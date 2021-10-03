import Header from "./components/Header";
import Home from "./components/Home";
import Photo from "./components/Photo";
import TemporaryDrawer from "./components/TemporaryDrawer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ChanllengeOne from "./components/Challenge/ChanllengeOne";
import ChanllengeOnee from "./components/Challenge/ChanllengeOnee";
import Profile from "./components/Profile";
import Ranking from "./components/Ranking";

function App() {
  return (
    <Router>
      <TemporaryDrawer />
      <Switch>
        <Route path="/about">
          <Photo photo="https://apod.nasa.gov/apod/image/2110/M8-Pipe_APOD_GabrielSantos_LG.jpg" />
        </Route>
        <Route path="/Challenge/1">
          <ChanllengeOne />
        </Route>
        <Route path="/challenge">
          <ChanllengeOnee />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/rank">
          <Ranking />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      {/* <Photo photo="https://apod.nasa.gov/apod/image/2110/M8-Pipe_APOD_GabrielSantos_LG.jpg" /> */}
    </Router>
  );
}

export default App;
