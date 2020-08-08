import React from "react";
import Login from "./components/login";
import Nav from "./components/nav";
import Home from "./components/home";
import Offer from "./components/offer";
import Create from "./components/create";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/offer" component={Offer} />
        <Route path="/create" component={Create} />

      </Switch>
    </Router>
  );
};

export default App;
