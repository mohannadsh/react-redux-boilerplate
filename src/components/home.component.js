import React, {Component} from "react";
import UserComponent from "./user.component";

import {connect} from "react-redux";

class HomeComponent extends Component {
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

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(HomeComponent);
