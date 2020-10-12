const Teacher = {
  school: async (parent, args, context, info) =>
    await context.prisma.teacher.findOne({
      where: {
        id: parent.id,
      }
    }).school(),
  coursesTeaching: async (parent, args, context, info) =>
    await context.prisma.teacher.findOne({
      where: {
        id: parent.id,
      }
    }).coursesTeaching(),
}

module.exports = {
  Teacher,
}
