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
      id: Int!
      number: Int
      street: String
      zip: String
    ): Address!
    
    addStudent(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      schoolid: Int!
      classesEnrolled: [String!]
    ): Student!
    
    deleteStudent(
      id: Int!
    ): Student!
    
    updateStudent(
      id: Int!
      email: String
      password: String
      firstName: String
      lastName: String
      schoolid: Int
      classesEnrolled: [String!]
    ): Student!
  }
`

module.exports = {
  Mutation
}
