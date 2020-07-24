import React from "react";
import Home from "./components/home";
import Nav from "./components/nav";
import Offer from "./components/offer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/offer" component={Offer} />
      </Switch>
    </Router>
  );
};

export default App;
