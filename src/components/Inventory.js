import React from "react";
import firebase from "firebase";
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class Inventory extends React.Component {
  state = {
    uid: null,
    owner: null
  };

  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  };

  authHandler = async authData => {
    // console.log(authData);
    //1. Look up the current store in firebase database
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log(store);
    //2. Check if there is a store owner
    if (!store.owner) {
      //if not than claim it as your own
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    //3. Set the state of inventory component to reflect the current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  render() {
    //1. Check if user is logged in
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    //2. Check if the logged in user is owner of the store
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you are not the owner of the store!</p>
        </div>
      );
    }

    //If no objection then user must be the owner, hence render the inventory
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
