const { gql } = require('apollo-server-express');

const classType = gql`
  type Class {
    id: ID!
    course_code: String!
    name: String!
    school: School!
    teacherAssigned: Teacher!
    studentsAttending: [Student!]
  }
`

module.exports = {
  classType,
}
