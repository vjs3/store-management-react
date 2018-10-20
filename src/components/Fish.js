import React from "react";

class Fish extends React.Component {
  render() {
    return (
      <li className="menu-fish">
        <img src={this.props.details.image} alt={this.props.details.name} />
      </li>
    );
  }
}

export default Fish;
