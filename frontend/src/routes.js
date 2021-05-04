import React from 'react'
import { Header } from './components/Header';
import { Login } from './pages/login/index';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
)

export default Routes
