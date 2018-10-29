import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    // console.log(event.currentTarget.name);
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          name="price"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          type="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          name="image"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
      </div>
    );
  }
}

export default EditFishForm;
