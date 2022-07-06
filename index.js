const express = require("express");
const {connect} = require("./src/config/databseConfig")
const bodyParser = require("body-parser");
const passport = require("passport")
const app = express();
const apiRouter = require("./src/routes/index");
const authRouter = require("./src/routes/authRoute")
const User = require("./src/models/user")
require('./src/util/auth')

app.use(bodyParser.urlencoded({extended: false}));
app.use("/", authRouter);
app.use("/api",passport.authenticate('jwt', {session: false}),apiRouter);


app.listen(3000, async () => {
    // this callback will be executed everytime the server starts
    await connect();
    console.log("Mongo db connected successfully");
    console.log("Server Started Successsfully");
});
