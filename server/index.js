require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const express = require("express");
const massive = require("massive");

const {} = require("./controller");

const app = express();

//MASSIVE
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance); // This saves dbInstance on app under the name of db
    console.log("Database Connected!");
  })
  .catch(err => {
    console.log(err);
  });

app.use(express.json());

// app.get / app.post / app.put / etc...

app.listen(4000, () => console.log(`Server is listening on port 4000`));
