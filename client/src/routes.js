import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/hoc/PrivateRoute';

import Chat from './components/pages/Chat';
import Login from './components/pages/Login';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path='/chat' component={Chat} exact />
                <Route component={Login} />
            </Switch>
        </Router>
    )
};

export default AppRoutes