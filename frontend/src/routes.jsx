import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanages from './pages/Orphanages';


function MainRoutes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} /> 
                <Route path="/app" component={OrphanagesMap} />
                <Route path="/createOrphanage" component={CreateOrphanage} />
                <Route path="/orphanage/:id" component={Orphanages} />
            </Switch>
        </BrowserRouter>
    );
}

export default MainRoutes;