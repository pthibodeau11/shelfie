require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const express = require("express");
const massive = require("massive");

const controller = require("./controller");

const app = express();

//MASSIVE
massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance); // This saves dbInstance on app under the name of db
    console.log("Database Connected!");
  })
  .catch(err => {
    console.log(err);
  });

app.use(express.json());

// app.get / app.post / app.put / etc...
app.get("/api/inventory", controller.getInventory);
app.post("/api/product", controller.createProduct);
app.delete("/api/product/:id", controller.deleteProduct);
app.put("/api/product/:id", controller.updateProduct);

app.listen(4000, () => console.log(`Server is listening on port 4000`));
