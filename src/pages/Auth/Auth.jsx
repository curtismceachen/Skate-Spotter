import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default class Auth extends React.Component {
  state = {
    showLogin: true,
  };

  render() {
    return (
      <main className="Auth">
        <div>
          <h3 onClick={() => this.setState({ showLogin: !this.state.showLogin })}>
            {this.state.showLogin ? "LOG IN" : "SIGN UP"}
          </h3>
        </div>
        {/* Another ternary operator! */}
        {/* If showLogin is true, show the login form. If false, show the signup form */}
        {this.state.showLogin ? (
          <SignUpForm setUserInState={this.props.setUserInState} />
          ) : (
          <LoginForm setUserInState={this.props.setUserInState} />
        )}
      </main>
    );
  }
}
