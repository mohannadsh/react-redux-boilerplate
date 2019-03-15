import React, {Component} from "react";
import "../styles/app.scss";

import {connect} from "react-redux";
import UserComponent from './user.component'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Here is the start page of your app!
                    </p>
                    <p>
                        This environment is {process.env.REACT_APP_ENV}
                    </p>

                    <UserComponent/>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return state;
};

const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(App);
