const { query } = require('./query')
const { mutation } = require('./mutation')
const { schoolType } = require('./types')
const { addressType } = require('./types')
const { studentType } = require('./types')
const { classType } = require('./types')
const { teacherType } = require('./types')

const typeDefs = [
  query,
  mutation,
  schoolType,
  addressType,
  studentType,
  classType,
  teacherType,
]

module.exports = {
  typeDefs,
}
