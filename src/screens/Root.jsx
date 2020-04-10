import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App/App';
import ScreensUserForm from './User/Form';
import ScreensUserList from './User/List';

const ScreensRoot = () => (
    <Router>
        <Switch>
            <Route exact path="/user/create" component={App} />
            <Route exact path="/user/list" component={ScreensUserList} />
            <Route exact path="/" component={ScreensUserForm} />
            <Route exact path="/user/:id" component={ScreensUserForm} />
        </Switch>
    </Router>
);


export default ScreensRoot;