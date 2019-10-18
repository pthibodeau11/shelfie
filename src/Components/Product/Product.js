import React, { Component } from "react";
import { Link, HashRouter } from "react-router-dom";
import axios from "axios";

class Product extends Component {
  constructor() {
    super();
    this.state = {};
  }
  deleteProduct = () => {
    axios
      .delete(`/api/product/${this.props.element.product_id}`)
      .then(response => {
        console.log(response.data);
        // this.props.updateAllProducts();
      });
  };

  render() {
    const {
      product_id,
      product_image_url,
      product_name,
      product_price
    } = this.props.element;
    return (
      <>
        <div>
          <span>{product_image_url}</span>
          <span>{product_name}</span>
          <span>{product_price}</span>
          <button onClick={this.deleteProduct}>Delete</button>
          <HashRouter>
            <Link to="/updateproduct">
              <button>Edit</button>
            </Link>
          </HashRouter>
        </div>
      </>
    );
  }
}

export default Product;
