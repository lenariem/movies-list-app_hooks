import React from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom";
import App from "./App"
import Catalog from "./Catalog"
import About from "./About"
import NotFound from "./NotFound"


const Routes = () => ( 
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={App} />
            <Route exact path ="/catalog" component ={Catalog} />
            <Route exact path ="/about" component ={About} />
            <Route component = {NotFound} /> 
        </Switch>
    </BrowserRouter>
)

export default Routes