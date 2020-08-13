import React from "react";
import Login from "./components/login";
import Nav from "./components/nav";
import Home from "./components/home";
import Offer from "./components/offer";
import Create from "./components/create";
import RouteDetail from "./components/routeDetail";

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
        <Route path="/detail/:id" component={RouteDetail} />
        <Route render ={function(){
          return <p>Page Not Found</p>
        }} />

      </Switch>
    </Router>
  );
};

export default App;
