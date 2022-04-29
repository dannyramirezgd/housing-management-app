const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const requestSchema = new Schema(
  {
    requestBody: {
      type: String,
      required: true,
      maxLength: 500,
    },
    unit: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    isComplete: {
      type: Boolean,
      default: false
    }
  },
  {
    toJSON: {
      getters: true,
    },
  },
);

module.exports = requestSchema;
