const { gql } = require('apollo-server-express')

const Mutation = gql`
  type Mutation {
    addSchool(
      name: String!
      rating: Int
      number: Int
      street: String
      zip: String
    ): School!
    
    updateSchool(
      id: Int!
      name: String
      rating: Int
    ): School!
    
    deleteSchool(
      id: Int!
    ): School!
    
    addAddress(
      number: Int!
      street: String!
      zip: String!
      schoolid: Int!
    ): Address!
    
    deleteAddress(
      id: Int!
    ): Address!
    
    updateAddress(
      number: Int!
      street: String!
      zip: String!
    ): Address!
    
    addClass(
      courseCode: String!
      name: String!
      schoolid: Int!
      teacherid: Int
    ): Class!
    
    deleteClass(
      id: Int!
    ): Class!
    
    updateClass(
      id: Int!
      courseCode: String
      name: String
    ): Class!
  }
`

module.exports = {
  Mutation
}
