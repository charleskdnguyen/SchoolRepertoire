const School = {
  address: async (parent, args, context, info) =>
    await context
      .prisma
      .school
      .findOne({
        where: {
          id: parent.id,
        },
      }).address(),
  courses: async (parent, args, context, info) =>
    await context
      .prisma
      .school
      .findOne({
        where: {
          id: parent.id,
        }
      }).courses() || [],
  teachersHired: async (parent, args, context, info) =>
    await context
      .prisma
      .school
      .findOne({
        where: {
          id: parent.id,
        }
      }).teachersHired() || [],
  studentsEnrolled: async (parent, args, context, info) =>
    await context
      .prisma
      .school
      .findOne({
        where: {
          id: parent.id,
        }
      }).studentsEnrolled() || []
};

module.exports = {
  School,
};
