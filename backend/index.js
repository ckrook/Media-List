const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
const cors = require("cors");

const routesHandler = require("./routes/handler.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", routesHandler);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
