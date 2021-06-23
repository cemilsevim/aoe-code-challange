import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import UnitsContainer from "../containers/units/Units";
import UnitsDetailContainer from "../containers/units/UnitsDetail";

function Units(): JSX.Element {
    return (
        <Switch>
            <Route exact path="/units" component={UnitsContainer}/>
            <Route path="/units/:unit_id" component={UnitsDetailContainer}/>
        </Switch>
    )
}

export default Units;