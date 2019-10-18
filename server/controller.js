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
  }
};
