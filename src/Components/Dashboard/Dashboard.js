import React, { Component } from "react";
import axios from "axios";
import Product from "../Product/Product";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      allProducts: []
    };
  }

  updateAllProducts = newArr => {
    this.setState({ allProducts: newArr });
  };

  componentDidMount() {
    axios
      .get("/api/inventory")
      .then(response => {
        console.log(response.data);
        this.setState({ allProducts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let mappedProducts = this.state.allProducts.map(element => {
      return (
        <Product element={element} updateAllProducts={this.updateAllProducts} />
      );
    });

    return <div>{mappedProducts}</div>;
  }
}

export default Dashboard;
