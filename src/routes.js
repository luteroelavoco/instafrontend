import React from "react";
import { Switch, Route } from "react-router-dom";
import Feed from "./Pages/Feed";
import News from "./Pages/News";

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/new" component component={News} />
        </Switch>
    );
} 

export default Routes;
