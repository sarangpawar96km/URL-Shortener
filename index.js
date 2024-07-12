const express = require("express");
require('dotenv').config();
const path = require("path")
const { connectMongoDB } = require("./connection");
const URL = require("./models/url");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter")
const app = express();
const PORT = process.env.PORT

connectMongoDB(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Connection Failed: ", err);
  });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views") )

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/url", urlRoute);

app.use("/", staticRoute)

app.listen(PORT, () => {
  console.log("Server started at Port: ", PORT);
});
