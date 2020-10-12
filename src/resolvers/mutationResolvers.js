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
    const address = await context.prisma.address({
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
        number: args.number === number ? number : args.number,
        street: args.street === street ? street : args.street,
        zip: args.zip === zip ? zip : args.zip
      }
    })
  },
  addStudent: async (_, args, context, info) =>
    await context.prisma.student.create({
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
        classesEnrolled: args.classesEnrolled ? args.classesEnrolled : [],
      }
    }),
  deleteStudent: async (_, args, context, info) =>
    await context.prisma.student.delete({
      where: {
        id: args.id,
      }
    }),
  updateStudent: async (_, args, context, info) => {
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
        email: args.email === email ? email : args.email,
        password: args.password === password ? password : args.password,
        firstName: args.firstName === firstName ? firstName : args.firstName,
        lastName: args.lastName === lastName ? lastName : args.lastName,
        school: args.school === school ? school : args.school,
        classesEnrolled: args.classesEnrolled === classesEnrolled ? classesEnrolled : args.classesEnrolled,
      }
    })
  }
}

module.exports = {
  Mutation,
}
