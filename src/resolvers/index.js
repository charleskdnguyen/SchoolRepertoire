const { Query } = require('./queryResolvers');
const { Mutation } = require('./mutationResolvers');
const { Address } = require('./addressResolvers');
const { School } = require('./schoolResolvers');
const { Course } = require('./courseResolvers');
const { Student } = require('./studentResolvers')

module.exports = {
  Query,
  Mutation,
  Address,
  School,
  Course,
  Student,
};
