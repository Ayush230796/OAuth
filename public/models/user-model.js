const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define the Schema
const userSchema = new Schema ({
   username: String,
   googleId: String,
   thumbnail: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;
