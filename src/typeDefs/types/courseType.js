const { gql } = require('apollo-server-express');

const courseType = gql`
  type Course {
    id: ID!
    courseCode: String!
    name: String!
    school: School!
    teacherAssigned: Teacher
    studentsAttending: [Student!]
  }
`

module.exports = {
  courseType,
}
