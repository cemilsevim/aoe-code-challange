import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import HomeContainer from "../containers/Home";
import UnitRoute from "./Units";

function App(): JSX.Element {
    return (
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route component={UnitRoute} />
        </Switch>
    );
}

export default App;
