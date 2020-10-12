const { gql } = require('apollo-server-express');

const Query = gql`
  type Query {
    getSchool(
      id: Int!
    ): School
    
    getSchools: [School!]!
    
    getAddress(
      id: Int!
    ): Address!
    
    getAddresses: [Address!]!
    
    getStudent(
      id: Int!
    ): Student!
    
    getStudents: [Student!]!
  }
`

module.exports = {
  Query,
}
