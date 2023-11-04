const asyncHandler = require("express-async-handler");
const { bookCreationSchema, bookSearchSchema } = require('../validators/books.js');
const Sequelize = require('sequelize');

const Book = require('../models/models/book.js');
const { ValidationError } = require("yup");

const { getBookFunc } = require('../services/books.js');

const index = asyncHandler(async (req, res, next) => {
  try {
    let { page, size } = req.query; 
    if (!page || page <= 0) { 
      page = 1; 
    } 
    if (!size || size <= 0) { 
      size = 10; 
    } 
    var offset = (parseInt(page) - 1) * parseInt(size);
    const bookList = await Book.findAll({offset: offset, limit: parseInt(size)});
    res.status(200).json(bookList)
    return;
  }
  catch (err) { 
    res.sendStatus(500); 
  } 
});


const getOne = asyncHandler(async (req, res, next) => {

  try {

    if (req.params.id == null) {
      res
        .status(400)
        .json({ message: "Mandatory field: id is missing." })
        return;
    }

    // var book = await Book.findOne({ where: { id: req.params.id } });
    var book = await getBookFunc(req.params.id );

    if(book == null){  
      console.log("No books were found.");
      res
        .status(404)
        .json({ message: "No books were found." });
        return;
    }
    else {
      console.log("A book was found.");
      res
        .status(200)
        .send(book);
      return;
    }
  }
  catch (err) { 
    console.log("An error happened:" + err.message);
    res.sendStatus(500); 
  } 
});


const create = asyncHandler(async (req, res, next) => {
  try {

    await bookCreationSchema.validate(req.body, { abortEarly: false, stripUnknown: true });

    console.log("Creating a book.");

    var book = await Book.create({
      title: req.body.title,
      ispn: req.body.ispn,
      quantity: req.body.quantity || 0,
      authorId: req.body.authorId || null,
      shelfId: req.body.shelfId || null
    });
    console.log("A book was created.");
      res
        .status(201)
        .json(book);
    return;
  } 
  catch (err) { 
    if ( err instanceof ValidationError ) {
      console.log("An error happened during validation:" + err.message);
      res.status(400)
      .json({ message: "Validation failed", error: err.errors }); 
      return;
    }
    console.log("An error happened: " + err.message);
    res.sendStatus(500); 
  } 
});

const searchByTitle = asyncHandler(async (req, res, next) => {
  try {

    await bookSearchSchema.validate(req.query, { abortEarly: false, stripUnknown: true });

    console.log("Searching books...");

    const bookList = await Book.findAll({ where: {
      titleSearch: {
        [Sequelize.Op.match]: Sequelize.fn('to_tsquery', req.query.title)
      }
    }
    });
    console.log("found: " + bookList);
    res.status(200).json(bookList)
    return;
  } 
  catch (err) { 
    if ( err instanceof ValidationError ) {
      console.log("An error happened during validation:" + err.message);
      res.status(400)
      .json({ message: "Validation failed", error: err.errors }); 
      return;
    }
    console.log("An error happened: " + err.message);
    res.sendStatus(500); 
  } 
});


module.exports = {index, getOne, create, searchByTitle}