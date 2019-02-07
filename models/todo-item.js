const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const ToDoSchema = new Schema({
  text: {
    type: String,
    required: "You must include something to do!"
  },
  complete: {
    type: Boolean,
    default: false
  }
});

// This creates our model from the above schema, using Mongoose's model method
var ToDo = mongoose.model('todo', ToDoSchema);

// Export the Tweet model
module.exports = ToDo;