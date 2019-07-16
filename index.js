const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.json());

//const admin = require("./routes/admin");
const user = require("./routes/user");
const book = require("./routes/book");
const homeRouter = require("./routes/home");
const sequelize = require("./configs/sequelize");
//app.use("/admin",admin);
app.use("/user",user);
app.use("/", homeRouter);
app.use("/book",book)
app.listen(3000, () => {
  console.log("server started");
    sequelize.sync();
});
