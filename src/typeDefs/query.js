const { gql } = require('apollo-server-express');

const query = gql`
  type Query {
    hello: String!
    goodbye: String!
  }
`

module.exports = {
  query,
}
