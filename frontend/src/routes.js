import React from 'react'
import { Header } from './components/Header';
import { Login } from './pages/login/index';
import { Signin } from './pages/signin/index';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registrar" component={Signin} />
        </Switch>
    </BrowserRouter>
)

export default Routes
