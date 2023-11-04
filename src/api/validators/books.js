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


const bookSearchSchema = yup.object().shape({
    title: yup.string().required()
  });

module.exports = {bookCreationSchema, bookSearchSchema}