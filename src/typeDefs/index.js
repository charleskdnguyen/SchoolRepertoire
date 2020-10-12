const { Query } = require('./query')
const { Mutation } = require('./mutation')
const { schoolType } = require('./types')
const { addressType } = require('./types')
const { studentType } = require('./types')
const { classType } = require('./types')
const { teacherType } = require('./types')

const typeDefs = [
  Query,
  Mutation,
  schoolType,
  addressType,
  studentType,
  classType,
  teacherType,
]

module.exports = {
  typeDefs,
}
