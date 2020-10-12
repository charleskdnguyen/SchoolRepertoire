const Query = {
  getSchool: async (_, args, context, info) =>
    await context.prisma.school.findOne({
      where: {
        id: args.id,
      }
    }),

  getSchools: async (_, args, context, info) =>
    await context.prisma.school.findMany() || [],

  getAddress: async (_, args, context) =>
    await context.prisma.address.findOne({
      where: {
        id: args.id,
      }
    }),

  getAddresses: async (_, args, context, info) =>
    await context.prisma.address.findMany() || [],

  getCourse : async (_, args, context, info) =>
    await context.prisma.course.findOne({
      where: {
        id: args.id,
      }
    }),

  getCourses: async (_, args, context, info) =>
    await context.prisma.course.findMany() || [],
}


module.exports = {
  Query,
}
