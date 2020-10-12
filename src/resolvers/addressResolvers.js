const Address = {
  school: async (parent, args, context, info) => {
    return context.prisma.address
      .findOne({
        where: {
          id: parent.id,
        }
      }).school();
  }
};
module.exports = {
  Address,
};
