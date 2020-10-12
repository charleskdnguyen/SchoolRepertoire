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
      coursesEnrolled: [Int!]
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
      coursesEnrolled: [Int!]
    ): Student!
    
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
    
    addTeacher(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      schoolid: Int!
      coursesTeaching: [Int!]!
    ): Teacher!
    
    deleteTeacher(
      id: Int!
    ): Teacher
    
    updateTeacher(
      id: Int!
      email: String
      password: String
      firstName: String
      lastName: String
      schoolid: Int
      coursesTeaching: [Int!]!
    ): Teacher!
  }
`

module.exports = {
  Mutation
}
