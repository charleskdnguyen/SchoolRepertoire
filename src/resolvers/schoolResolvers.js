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
};

module.exports = {
  School,
};
