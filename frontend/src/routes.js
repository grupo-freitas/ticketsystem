import { Login } from './pages/login/index';
import { Signin } from './pages/signin/index';
import { Home } from './pages/home';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registrar" component={Signin} />
        </Switch>
    </BrowserRouter>
)

export default Routes
