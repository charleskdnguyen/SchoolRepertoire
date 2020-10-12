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
    
    getCourse(
      id: Int!
    ): Course!
    
    getCourses: [Course!]
  }
`

module.exports = {
  Query,
}
