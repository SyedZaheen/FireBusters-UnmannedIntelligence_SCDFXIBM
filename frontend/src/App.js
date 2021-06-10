import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FadeIn from "react-fade-in";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <FadeIn transitionDuration="800">
            <Page1 />
          </FadeIn>
        </Route>
        <Route path="/dashboard">
          <FadeIn transitionDuration="800" delay={200}>
            <Page2 />
          </FadeIn>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
