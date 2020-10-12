const Student = {
  school: async (parent, args, context, info) =>
    await context.prisma.student.findOne({
      where: {
        id: parent.id,
      }
    }).school(),
  coursesEnrolled: async (parent, args, context, info) =>
    await context.prisma.student.findOne({
      where: {
        id: parent.id,
      }
    }).coursesEnrolled()
}

module.exports = {
  Student,
}
