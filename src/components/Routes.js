import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Help from "./Help";
import About from "./About";
import NotFound from "./NotFound";
import Navigation from "./Navigation";

const Routes = () => (
    <HashRouter>
        <Navigation />
        <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/help" component={Help} />
        <Route component={NotFound} />
        </Switch>
    </HashRouter>
);

export default Routes;
