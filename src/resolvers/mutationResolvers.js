const Mutation = {
  addSchool: async (_, args, context, info) => {
    const newSchool = await context.prisma.school.create({
      data: {
        name: args.name,
        rating: args.rating,
      }
    });

    return newSchool;
  },
  deleteSchool: async (_, args, context, info) =>
    await context.prisma.school.delete({
      where: {
        id: args.id,
      }
    }),
  updateSchool: async (_, args, context, info) => {
    const school = await context.prisma.school.findOne({
      where: {
        id: args.id,
      }
    });

    if (!school) throw new Error(`School with id ${args.id} is invalid.`)

    return await context.prisma.school.update({
      where: {
        id: args.id,
      },
      data: {
        name: args.name,
        rating: args.rating,
      }
    })
  }
}

module.exports = {
  Mutation,
}
