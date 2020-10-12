const { Query } = require('./queryResolvers');
const { Mutation } = require('./mutationResolvers');
const { Address } = require('./addressResolvers');
const { School } = require('./schoolResolvers');

module.exports = {
  Query,
  Mutation,
  Address,
  School,
};
