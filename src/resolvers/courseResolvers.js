const Course = {
  school: async (parent, __, context, info) =>
    await context.prisma.course.findOne({
      where: {
        id: parent.id
      }
    }).school(),

  teacherAssigned: async (parent, __, context, info) =>
    await context.prisma.course.findOne({
      where: {
        id: parent.id
      }
    }).teacherAssigned(),

  studentsAttending: async (parent, __, context, info) =>
    await context.prisma.course.findOne({
      where: {
        id: parent.id,
      }
    }).studentsAttending() || [],
};

module.exports = {
  Course
}
