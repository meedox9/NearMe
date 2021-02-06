import React from "react"
import './css/App.css';
import Callup from "./pages/callup/Callup"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from "./pages/404";
import Menu from "./pages/menu/Menu";
import OpenHouse from "./pages/open-house/OpenHouse";
import GarageSale from "./pages/garage-sale/GarageSale";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route  exact path="/" component={Menu} />
        <Route  exact path="/callup" component={Callup} />
        <Route  exact path="/open-house" component={OpenHouse} />
        <Route  exact path="/garage-sale" component={GarageSale} />
        <Route  component={NotFound} />
      </Switch>
    </Router>
    </div>

  );
}

export default App;
