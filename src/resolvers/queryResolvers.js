const Query = {
  getSchool: async (_, args, context, info) =>
    await context.prisma.school.findOne({
      where: {
        id: args.id,
      }
    }),
  getSchools: async (_, args, context, info) =>
    await context.prisma.school.findMany() || [],
}


module.exports = {
  Query,
}
