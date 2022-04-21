const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
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