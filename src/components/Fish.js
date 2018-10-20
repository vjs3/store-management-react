import React from "react";

class Fish extends React.Component {
  render() {
    return (
      <li className="menu-fish">
        <img src={this.props.details.image} alt={this.props.details.name} />
        <h3 className="fish-name">{this.props.details.name}
            <span className="name">{this.props.details.price}</span>
        </h3>
        <p>{this.props.details.desc}</p>
        <p>{this.props.details.price}</p>
        <p>{this.props.details.status}</p>
      </li>
    );
  }
}

export default Fish;
