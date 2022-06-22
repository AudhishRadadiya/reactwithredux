import React from 'react';
import Home from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const Routes = () => {
  return (
    <>
    <Router>
        <Switch>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </Router>
    </>
  )
}
export default Routes;