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
    
    addCourse(
      courseCode: String!
      name: String!
      schoolid: Int!
      teacherid: Int
    ): Course!
    
    deleteCourse(
      id: Int!
    ): Course!
    
    updateCourse(
      id: Int!
      courseCode: String
      name: String
    ): Course!
  }
`

module.exports = {
  Mutation
}
