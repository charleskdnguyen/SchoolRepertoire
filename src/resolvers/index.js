const { AddressResolvers } = require('./addressResolvers');
const { SchoolResolvers } = require('./schoolResolvers');
const { Query } = require('./queryResolvers');
const { Mutation } = require('./mutationResolvers');

module.exports = {
  Query,
  Mutation,
};
