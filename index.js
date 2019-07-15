const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const user = require("./routes/user");

app.use(user);
app.set("view engine", "ejs");
app.use(bodyParser.json());

const homeRouter = require("./routes/home");

app.use(homeRouter);

app.listen(3000, () => {
  console.log("server started");
});
