import React, {Component} from "react";

import {connect} from "react-redux";

class LoginComponent extends Component {
    render() {
        return (
            <h1>Please Login First</h1>
        );
    }
}

const mapStateToProps = (state, props) => {
    return state;
};

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(LoginComponent);
