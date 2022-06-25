import React from 'react';
import Home from './Components/Home';
import About from "./Components/About";
import GraphPage from './Components/graphql/GraphPage';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const Routes = () => {
  console.log("Routes")
  return (
    <>
    <Router>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/about/:id/:name">
                <About/>
            </Route>
            <Route exact path="/graphql">
                <GraphPage/>
            </Route>
        </Switch>
    </Router>
    </>
  )
}
export default Routes;
