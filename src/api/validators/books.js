const yup = require('yup');

const bookCreationSchema = yup.object().shape({
    title: yup.string().required(),
    ispn: yup.string().required(),
    quantity: yup.number(),
    authorId: yup.number().positive(),
    shelfId: yup.number().positive(),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });


const bookUpdateSchema = yup.object().shape({
    title: yup.string(),
    ispn: yup.string(),
    quantity: yup.number(),
    authorId: yup.number().positive(),
    shelfId: yup.number().positive(),
    updatedOn: yup.date().default(function () {
      return new Date();
    }),
  });

module.exports = {bookCreationSchema, bookUpdateSchema}