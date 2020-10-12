const { gql } = require('apollo-server-express');

const Query = gql`
  type Query {
    getSchool(
      id: Int!
    ): School
    
    getSchools: [School!]
    
    getAddress(
      id: Int!
    ): Address!
    
    getAddresses: [Address!]
    
    getClass(
      id: Int!
    ): Class!
    
    getClasses: [Class!]
  }
`

module.exports = {
  Query,
}
