const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const user = require("./routes/user");

const admin = require("./routes/admin");


app.use(admin);
app.use("/user",user);
app.set("view engine", "ejs");
app.use(bodyParser.json());

const homeRouter = require("./routes/home");
const sequelize = require("./configs/sequelize");
app.use(homeRouter);

app.listen(3000, () => {
  console.log("server started");
    sequelize.sync();

});
