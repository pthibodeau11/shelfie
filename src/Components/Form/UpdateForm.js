import React, { Component } from "react";
import axios from "axios";

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <h1>Enter new info</h1>
          <span>image goes here</span>
          <input
            placeholder="Insert ImageURL"
            onChange={this.handleProductImageUrlChange}
            // value={this.props.product_image_url}
          ></input>
          <input
            placeholder="Insert Product Name"
            onChange={this.handleProductNameChange}
            // value={this.props.product_name}
          ></input>
          <input
            placeholder="Insert Product Price"
            onChange={this.handleProductPriceChange}
            // value={this.props.product_price}
          ></input>
          <button onClick={this.clearForm}>Cancel</button>
          <button>Save Changes</button>
        </div>
      </>
    );
  }
}

export default UpdateForm;
