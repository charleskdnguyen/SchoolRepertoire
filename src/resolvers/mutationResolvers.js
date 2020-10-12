const Mutation = {
  addSchool: async (parent, args, context, info) => {
    const newSchool = await context.prisma.school.create({
      data: {
        name: args.name,
        rating: args.rating,
        address: {
          create: {
            number: args.number,
            street: args.street,
            zip: args.zip,
          }
        }
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
  },
  addAddress: async (_, args, context) => {
    const address = await context.prisma.address.create({
      data: {
        number: args.number,
        street: args.street,
        zip: args.zip,
        school: {
          connect: {
            id: args.schoolid,
          }
        }
      }
    });

    return address;
  },
  deleteAddress: async (_, args, context, info) =>
    await context.prisma.address.delete({
      where: {
        id: args.id,
      }
    }),
  updateAddress: async (_, args, context, info) => {
    const address = await context.prisma.address.findOne({
      where: {
        id: args.id,
      }
    })

    if (!address) throw new Error(`Address with id ${args.id} is invalid.`);
    return await context.prisma.address.update({
      where: {
        id: args.id,
      },
      data: {
        number: args.number,
        street: args.street,
        zip: args.zip
      }
    });
  },
  addCourse: async (_, args, context, info) =>
    await context.prisma.course.create({
      data: {
        courseCode: args.courseCode,
        name: args.name,
        school: {
          connect: {
            id: args.schoolid,
          }
        },
        teacherAssigned: args.teacherAssigned ? args.teacherAssigned : undefined,
        studentsAttending: [],
      }
    }),
  deleteCourse: async (_, args, context, info) =>
    await context.prisma.course.delete({
      where: {
        id: args.id,
      }
    }),
  updateCourse: async (_, args, context, info) => {
    const foundCourse = await context.prisma.course.findOne({
      where: {
        id: args.id,
      }
    });
    if (!foundCourse) throw new Error(`Course with id ${args.id} is invalid.`);

    return await context.prisma.course.update({
      where: {
        id: args.id,
      },
      data: {
        courseCode: args.courseCode,
        name: args.name,
      }
    })
  },
  addStudent: async (_, args, context, info) => {
    let courseIds = [];
    if (args.coursesEnrolled)
      courseIds = await args.coursesEnrolled.map(courseId => {
        return {
          id: courseId,
        }
      });

    return await context.prisma.student.create({
      data: {
        email: args.email,
        password: args.password,
        firstName: args.firstName,
        lastName: args.lastName,
        school: {
          connect: {
            id: args.schoolid,
          }
        },
        coursesEnrolled: {
          connect: courseIds
        }
      }
    })
  },
  deleteStudent: async (_, args, context, info) =>
    await context.prisma.student.delete({
      where: {
        id: args.id,
      }
    }),
  updateStudent: async (_, args, context, info) => {
    let courseIds = [];
    if (args.coursesEnrolled)
      courseIds = await args.coursesEnrolled.map(courseId => {
        return {
          id: courseId,
        }
      });

    const student = await context.prisma.student.findOne({
      where: {
        id: args.id,
      }
    });

    if (!student) throw new Error(`Student with id ${args.id} is invalid.`);

    return await context.prisma.student.update({
      where: {
        id: args.id,
      },
      data: {
        email: args.email === student.email ? student.email : args.email,
        password: args.password === student.password ? student.password : args.password,
        firstName: args.firstName === student.firstName ? student.firstName : args.firstName,
        lastName: args.lastName === student.lastName ? student.lastName : args.lastName,
        school: args.school === student.school ? student.school : args.school,
        coursesEnrolled: {
          connect: courseIds,
        }
      }
    })
  }
}

module.exports = {
  Mutation,
}
