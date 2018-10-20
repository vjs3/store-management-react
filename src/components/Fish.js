import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    const { image, name, price, description, status } = this.props.details;
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="name">{formatPrice(price)}</span>
        </h3>
        <p>{this.props.details.desc}</p>
        <p>{this.props.details.price}</p>
        <p>{this.props.details.status}</p>
      </li>
    );
  }
}

export default Fish;
