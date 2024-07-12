const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamps: { type: Number } }],
  },
  { timestamps: true }
);

const URL = mongoose.model("URL",urlSchema)

module.exports = URL