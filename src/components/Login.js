import React from "react";

const Login = () => (
  <nav className="login">
    <h2>Inventory</h2>
    <p>SignIn page to access Inventory</p>
    <button
      className="github"
      onClick={() => this.props.authenticate("Github")}
    >
      Login with GitHub
    </button>
    <button
      className="twitter"
      onClick={() => this.props.authenticate("Twitter")}
    >
      Login with Twitter
    </button>
  </nav>
);

export default Login;
