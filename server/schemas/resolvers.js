const { Admin, Unit } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signTokenAdmin, signTokenUnit } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.unit) {
        const unitData = await Unit.findOne({
          unitNumber: context.unit.unitNumber,
        });

        return unitData;
      }

      throw new AuthenticationError('Not loggedn in');
    },

    // dk testing.
    // get all Admins
    admins: async (parent, arg, context) => {
      if (context.admin) {
        const adminData = await Admin.find({})
          .select('-__v -password')
          .populate('units')
          .populate('requests');

        return adminData;
      }
      throw new AuthenticationError('Not an administrator!');
    },
  },
  Mutation: {
    addUnit: async (parent, args, context) => {
      if (context.admin.isAdmin) {
        const unit = await Unit.create(args);

        return unit;
      } else {
        throw new AuthenticationError('Not an Admin');
      }
    },
    loginUnit: async (parent, { email, password }) => {
      const unit = await Unit.findOne({ email });

      if (!unit) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await unit.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signTokenUnit(unit);

      return { token, unit };
    },
    loginAdmin: async (parent, { email, password }) => {
      const admin = await Admin.findOne({ email });

      if (!admin) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await admin.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signTokenAdmin(admin);

      return { token, admin };
    },
    addAdmin: async (parent, args) => {
      const admin = await Admin.create(args);
      const token = signTokenAdmin(admin);

      return { token, admin };
    },
    createRequest: async (parent, { requestBody }, context) => {
      if (context.admin) {
        const updatedUnit = await Unit.findOneAndUpdate(
          { _id: context.admin._id },
          {
            $push: {
              requests: { requestBody, unit: context.admin.unitNumber },
            },
          },
          { new: true, runValidators: true },
        );

        return updatedUnit;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
