//Handle all requires
const { Console } = require('console');
const express = require ('express');
const mongoose = require ("mongoose");
const morgan = require('morgan');
const path = require('path');


//open a port environment
const PORT = process.env.PORT || 3000;
// Create app for express for routing
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//add Routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

//add mrogan
app.use(logger("dev"));

//open mongoose server endpoint for database connections
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


//Go live and listen
app.listen(PORT, () =>{
  console.log (`App is running on ${PORT}!`);
});