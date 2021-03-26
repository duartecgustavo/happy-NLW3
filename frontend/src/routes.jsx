import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function MainRoutes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} /> 
                <Route path="/app" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default MainRoutes;