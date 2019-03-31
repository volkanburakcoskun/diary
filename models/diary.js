const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  body: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now() }
});
const Post = (module.exports = mongoose.model("Post", PostSchema));
