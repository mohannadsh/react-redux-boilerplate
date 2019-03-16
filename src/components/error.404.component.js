import React, {Component} from "react";

import {connect} from "react-redux";

class Error404Component extends Component {
    render() {
        return (
            <div>
                <h1>The resource you're looking for was not found!</h1>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return state;
};

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Error404Component);
