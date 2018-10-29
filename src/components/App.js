import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    //1. Take a copy of existing state
    const fishes = { ...this.state.fishes };
    //2. Add the new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //3. set the new fishes object to state
    this.setState({
      fishes: fishes // same  as {fish} in ES6
    });
  };

  updateFish = (key, updatedFish) => {
    //1. Take a copy of existing state
    const fishes = { ...this.state.fishes };
    //2. Add the new state to the exitsting state
    fishes[key] = updatedFish;
    //3. Update the state
    this.setState({ fishes });
  };

  deleteFish = key => {
    //1. Take a copy of existing state
    const fishes = { ...this.state.fishes };
    //2. remove the new state to the exitsting state
    fishes[key] = null;
    //3. Update the state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    //1. Take copy of current state
    const order = { ...this.state.order };
    //2. Either add to the order or update the number in our order
    order[key] = order[key] + 1 || 1;
    //3. Set the new state
    this.setState({ order });
  };

  deleteOrder = key => {
    const order = { ...this.state.order };
     delete order[key]; //since not mirroring to the firebase
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => {
              return (
                <Fish
                  key={key}
                  index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />
              );
            })}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} deleteOrder={this.deleteOrder}/>
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
