const { gql } = require('apollo-server-express');

const classType = gql`
  type Class {
    id: ID!
    courseCode: String!
    name: String!
    school: School!
    teacherAssigned: Teacher
    studentsAttending: [Student!]
  }
`

module.exports = {
  classType,
}
