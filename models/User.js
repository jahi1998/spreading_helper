const mongoose = require("mongoose");
const { Schema } = mongoose;

//create a new collection
const userSchema = new Schema({
  googleID: String,
});

mongoose.model("user", userSchema);
