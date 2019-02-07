const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client"));

require('./routes/api-routes.js')(app);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/todolist", {useNewUrlParser: true});
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});