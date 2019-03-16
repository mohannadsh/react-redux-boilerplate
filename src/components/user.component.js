import React, {Component} from "react";

import {connect} from "react-redux";

import {updateUser, getUser} from "../actions/user.actions";
import {bindActionCreators} from "redux";

class UserComponent extends Component {
    constructor(props) {
        super(props);

        this.onUpdateUser = this.onUpdateUser.bind(this);

        if (this.props.match) {
            this.userId = this.props.match.params.id;
        }

        console.log(this.userId)

    }

    onUpdateUser(event) {
        this.props.onUpdateUser(event.target.value);
    }

    componentDidMount() {
        this.props.onGetUser();
    }

    render() {
        return (
            <div className="user">
                This is the User Component ({this.props.user})
                <br/>

                <div>{this.props.user} <span hidden={!this.userId}>(ID: {this.userId})</span></div>
                <input onChange={this.onUpdateUser} value={this.props.user}/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        user: state.user
    }
};

const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators({
        onUpdateUser: updateUser,
        onGetUser: getUser
    }, dispatch)
};

export default connect(mapStateToProps, mapActionsToProps)(UserComponent);
