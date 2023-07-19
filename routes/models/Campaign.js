const mongoose = require("mongoose");
const { Schema } = mongoose;

const CampaignSchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  supporters: {
    type: Number,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  fundedOf: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
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
