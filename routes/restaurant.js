const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const resuserSchema = mongoose.Schema({
  Resusername: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    default: [],
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

resuserSchema.plugin(plm);

module.exports = mongoose.model("restaurant", resuserSchema);
