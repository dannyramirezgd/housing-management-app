const { Admin, Unit } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
        },
        units: async () => {
            return Unit.find()
                .select('-__v -password')
                .populate('requests')
        },
        admins: async () => {
            return Admin.find()
                .select('-__v -password')
                .populate('requests')
                .populate('units')
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
        },
        login: async (parent, { email, password }) => {
        },
    }
};

module.exports = resolvers;