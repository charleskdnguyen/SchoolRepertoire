const { gql } = require('apollo-server-express')

const mutation = gql`
  type Mutation {
    addAddress(
      number: Int!
      street: String!
      zip: String!
      """
      Adding int manually to school until front-end available
      """
      schoolId: Int!
    ): Address

    addSchool(
      name: String!
      rating: Int
    ): School!
  }
`

module.exports = {
  mutation
}
