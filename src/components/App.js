import React, {Component} from "react";
import "../styles/app.scss";

import {connect} from "react-redux";
import UserComponent from "./user.component";
import HomeComponent from "./home.component";
import Error404Component from "./error.404.component";
import LoginComponent from "./login.component";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

let isUserAuthenticated = true;

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        isUserAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login'/>
    )}/>);


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/user/:id" component={UserComponent}/>
                    <Route path="/home" component={HomeComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <PrivateRoute path="/private-home" component={HomeComponent}/>
                    <Redirect from="/" to="/home"/>


                    {/* 404*/}
                    <Route component={Error404Component}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state, props) => {
    return state;
};

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
