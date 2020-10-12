const { Query } = require('./queryResolvers');
const { Mutation } = require('./mutationResolvers');
const { Address } = require('./addressResolvers');
const { School } = require('./schoolResolvers');
const { Class } = require('./classResolvers');

module.exports = {
  Query,
  Mutation,
  Address,
  School,
  Class,
};
