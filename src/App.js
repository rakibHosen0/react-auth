import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AvailableRide from "./component/AvailableRide/AvailableRide";
import CreateAccount from "./component/CreateAccount/CreateAccount";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/createAccount">
          <CreateAccount />
        </Route>
        <Route path="/availableRide">
          <AvailableRide />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
