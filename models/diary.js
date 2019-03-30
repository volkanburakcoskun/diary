const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  body: { type: String, required: true }
});
const Post = (module.exports = mongoose.model("Post", PostSchema));
