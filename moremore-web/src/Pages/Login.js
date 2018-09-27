import React, { Component } from "react";
import LoginForm from "../Components/LoginForm";
import {
  signInWithEmail,
  isLoggedIn,
  findProfileWithEmail
} from "../Actions/UserActions";
import { connect } from "react-redux";

const mapStatetoProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchtoProps = dispatch => ({
  signInWithEmail: (user, pass) => {
    dispatch(signInWithEmail(user, pass));
  },
  findProfileWithEmail: email => {
    dispatch(findProfileWithEmail(email));
  },
  isLoggedIn: () => {
    dispatch(isLoggedIn());
  }
});

class Login extends Component {
  componentDidMount() {
    this.props.isLoggedIn();
  }
  submit = values => {
    this.props.signInWithEmail(values.email, values.password);
    if (this.props.user.isAdmin === 0) {
      this.props.findProfileWithEmail(values.email);
    }
  };
  render() {
    if (this.props.user.isAdmin === 1) {
      this.props.history.push("/Admin");
    } else if (this.props.user.isLoggedIn === true) {
      this.props.history.push("/");
    }
    return (
      <div>
        <LoginForm onSubmit={this.submit} />
        <p>{this.props.user.message}</p>
      </div>
    );
  }
}

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Login);
