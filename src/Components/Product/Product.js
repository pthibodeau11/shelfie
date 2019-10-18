import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import UpdateForm from "../Form/UpdateForm";

class Product extends Component {
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
          <button>Delete</button>
          <Link to="/updateForm">
            <button>Edit</button>
          </Link>
        </div>

        <Switch>
          <Route
            path="/updateForm"
            component={UpdateForm}
            // id={product_id}
            // url={product_image_url}
            // name={product_name}
            // price={product_price}
          />
        </Switch>
      </>
    );
  }
}

export default Product;
