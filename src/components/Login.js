import React from "react";
import PropTypes from "prop-types";

const Login = props => (
  <nav className="login">
    <h2>Inventory</h2>
    <p>SignIn page to access Inventory</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Login with GitHub
    </button>
    <button className="twitter" onClick={() => props.authenticate("Twitter")}>
      Login with Twitter
    </button>
  </nav>
);

Login.proptypes = {
  authenticate: PropTypes.func
};
export default Login;
