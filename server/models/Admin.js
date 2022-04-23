const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    requests: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Request',
      },
    ],
    units: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Unit',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// set up pre-save middleware to create password
adminSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
adminSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

adminSchema.virtual('requestCount').get(function () {
  return this.requests.length;
});

adminSchema.virtual('unitCount').get(function () {
  return this.units.length;
});

const Admin = model('Admin', adminSchema);

module.exports = Admin;
