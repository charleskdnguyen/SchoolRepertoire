const { gql } = require('apollo-server-express');

const schoolType = gql`
  type School {
    id: ID!
    name: String!
    rating: Int
    address: Address!
    studentsEnrolled: [Student!]
    teachersHired: [Teacher!]
    courses: [Course!]
  }
`

module.exports = {
  schoolType,
}
