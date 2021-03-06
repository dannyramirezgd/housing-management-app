const { Schema, model } = require('mongoose');
const requestSchema = require('./Request');
const bcrypt = require('bcrypt');

const unitSchema = new Schema(
  {
    unitNumber: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address'],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    requests: [requestSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

unitSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

unitSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

//some virtual?
unitSchema.virtual('requestCount').get(function () {
  return this.requests.length;
});

const Unit = model('Unit', unitSchema);

module.exports = Unit;
