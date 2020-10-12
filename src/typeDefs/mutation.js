const { gql } = require('apollo-server-express')

const Mutation = gql`
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
    
    updateSchool(
      id: Int!
      name: String
      rating: Int
    ): School!
    
    deleteSchool(
      id: Int!
    ): School!
  }
`

module.exports = {
  Mutation
}
