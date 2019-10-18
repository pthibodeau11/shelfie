module.exports = {
  getInventory: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_inventory()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oopsy Daisy - try again!" });
        console.log(err);
      });
  },

  createProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { product_name, product_image_url, product_price } = req.body;

    dbInstance
      .create_product([product_name, product_image_url, product_price])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oopsy Daisy - try again!" });
        console.log(err);
      });
  },

  deleteProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    console.log(id);

    dbInstance
      .delete_product(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Didn't work" });
        console.log(err);
      });
  },

  updateProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params, query, body } = req;
    console.log(req.params.id);

    dbInstance
      .update_product([
        +params.id,
        body.product_name,
        body.product_image_url,
        body.product_price
      ])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Whoops" });
        console.log(err);
      });
  }
};
