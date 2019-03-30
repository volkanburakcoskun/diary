const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  //Account details
  userName: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  passWord: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },

  //Personal Details
  birthDate: { type: Date, default: Date.now() },
  gender: { type: String, default: "Not Specified" },

  //Location and Language details
  city: { type: String },
  lang: { type: String },

  //Social Media Details
  facebook: { type: String },
  youtube: { type: String },
  twitter: { type: String },
  instagram: { type: String }
});
const User = (module.exports = mongoose.model("User", UserSchema));
