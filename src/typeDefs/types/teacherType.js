const { gql } = require('apollo-server-express');

const teacherType = gql`
  type Teacher {
    id: ID!
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    school: School!
    classesTeaching: [Class!]
  }
`

module.exports = {
  teacherType,
}
