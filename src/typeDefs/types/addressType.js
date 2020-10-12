const { gql } = require('apollo-server-express');

const addressType = gql`
  type Address {
    id: ID!
    number: Int! 
    street: String!
    zip: String!
    school: School!
  }
`

module.exports = {
  addressType,
}
