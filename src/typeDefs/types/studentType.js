const { gql } = require('apollo-server-express');

const studentType = gql`
  type Student {
    id: ID!
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    school: School!
    classesEnrolled: [Class!]
  }
`

module.exports = {
  studentType,
}
