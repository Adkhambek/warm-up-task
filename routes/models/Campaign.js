const mongoose = require("mongoose");
const { Schema } = mongoose;

const CampaignSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: String,
  supporters: Number,
  totalSupporters: Number,
  deadline: Date,
  fundedOf: Number,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Campaign", CampaignSchema);
