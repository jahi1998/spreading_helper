const mongoose = require("mongoose");
const { Schema } = mongoose;

//create a new collection
const userSchema = new Schema({
  googleId: String,
});

mongoose.model("user", userSchema);
