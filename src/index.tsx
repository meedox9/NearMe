import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from './history';
import { store } from './store';
import * as serviceWorker from './serviceWorker';
import {
    SignIn,
    SignUp,
} from './pages';
import { toast, ToastContainer } from 'react-toastify';



import Callup from "./pages/callup/Callup"
import NotFound from "./pages/404";
import Menu from "./pages/menu/Menu";
import OpenHouse from "./pages/open-house/OpenHouse";
import GarageSale from "./pages/garage-sale/GarageSale";
import Info from "./pages/info/Info";
import Profile from "./pages/profile/profile";
import Contact from "./pages/contact/Contact"


import 'react-toastify/dist/ReactToastify.css';
import './css/App.css';


// Call it once in your app. At the root of your app is the best place
toast.configure();

ReactDOM.render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact={true} component={Menu} />
                    <Route path="/sign-in" exact={true} component={SignIn} />                    
                        <Route  exact path="/sign-up" component={SignUp} />
                        <Route  exact path="/callup" component={Callup} />
                        <Route  exact path="/open-house" component={OpenHouse} />
                        <Route  exact path="/garage-sale" component={GarageSale} />
                        <Route  exact path="/info" component={Info} />
                        <Route  exact path="/profile" component={Profile} />
                        <Route  exact path="/support" component={Contact} />
                        <Route  component={NotFound} />
                </Switch>
            </Router>
            <ToastContainer />
        </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

serviceWorker.unregister();


