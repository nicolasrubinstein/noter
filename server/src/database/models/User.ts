const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  googleId: String,
  entries: [
    {
      title: { type: String, default: "" },
      text: String,
      createdAt: { type: Date, default: new Date() },
      isImportant: { type: Boolean, default: false },
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
export {};
