import React, { Component } from "react";

import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      product_image_url: "",
      product_name: "",
      product_price: ""
    };
    // prettier-ignore
    this.handleProductImageUrlChange = this.handleProductImageUrlChange.bind(this);
  }

  handleProductImageUrlChange(e) {
    console.log(e.target.value);
    this.setState({ product_image_url: e.target.value });
  }

  handleProductNameChange = e => {
    console.log(e.target.value);
    this.setState({ product_name: e.target.value });
  };

  handleProductPriceChange = e => {
    console.log(e.target.value);
    this.setState({ product_price: e.target.value });
  };

  handleClick = e => {
    const { product_name, product_image_url, product_price } = this.state;
    e.preventDefault();
    axios
      .post("/api/product", { product_name, product_image_url, product_price })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      product_name: "",
      product_image_url: "",
      product_price: ""
    });
  };

  clearForm = () => {
    this.setState({
      product_image_url: "",
      product_name: "",
      product_price: ""
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>Form</h1>
          <span>image goes here</span>
          <input
            placeholder="Insert ImageURL"
            onChange={this.handleProductImageUrlChange}
            value={this.state.product_image_url}
          ></input>
          <input
            placeholder="Insert Product Name"
            onChange={this.handleProductNameChange}
            value={this.state.product_name}
          ></input>
          <input
            placeholder="Insert Product Price"
            onChange={this.handleProductPriceChange}
            value={this.state.product_price}
          ></input>
          <button onClick={this.clearForm}>Cancel</button>
          <button onClick={this.handleClick}>Add to inv</button>
        </div>
      </>
    );
  }
}

export default Form;
