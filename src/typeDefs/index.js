const { Query } = require('./query');
const { Mutation } = require('./mutation');
const {
  schoolType,
  addressType,
  studentType,
  courseType,
  teacherType
} = require('./types');

const typeDefs = [
  Query,
  Mutation,
  schoolType,
  addressType,
  studentType,
  courseType,
  teacherType,
];

module.exports = {
  typeDefs,
};
