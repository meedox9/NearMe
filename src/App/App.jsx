import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

import NotFound from "../pages/404";
import Menu from "../pages/menu/Menu";
import OpenHouse from "../pages/open-house/OpenHouse";
import GarageSale from "../pages/garage-sale/GarageSale";
import Info from "../pages/info/Info.jsx";
import Profile from "../pages/profile/profile.jsx";
import Callup from "../pages/callup/Callup";

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
                    <div className="App">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={Menu} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Route  exact path="/callup" component={Callup} />
                                <Route  exact path="/open-house" component={OpenHouse} />
                                <Route  exact path="/garage-sale" component={GarageSale} />
                                <Route  exact path="/info" component={Info} />
                                <Route  exact path="/profile" component={Profile} />
                                <Route  component={NotFound} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };