import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (

      <Router>
        <Switch>
          <Route exact path="/">
            <Page1 />
          </Route>
          <Route path="/dashboard">
            <Page2 />
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
