'use strict';
const { DataTypes, Model, Sequelize } = require('sequelize');
const sequelize = require('../../../lib/db/index.js');

// export default function BookInit(sequelize, DataTypes) {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.hasOne(models.Author, { onDelete: 'SET NULL' });
      Book.hasOne(models.Shelf, { onDelete: 'SET NULL' });
      Book.hasMany(models.Borrower,{
            through: models.BorrowerCheckoutBooks,
            as: 'borrower',
            foreignKey: 'bookId'
      });
    }
  }

  Book.init({
    title: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    titleSearch: {
      type: DataTypes.TEXT,
    },
    ispn: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      unique: false,
      // allowNull: false,
      validate: {
        notEmpty: true
      },
    },
  }, 
  {
    sequelize,
    modelName: 'Book'
  });

  Book.beforeCreate(async (book, options) => {
    book.titleSearch = generateTitleSearch(book.title);
  });
  Book.beforeUpdate(async (book, options) => {
    book.titleSearch = generateTitleSearch(book.title);
  });
  Book.beforeBulkCreate((books, options) => {
    for (const book of books) {
      book.titleSearch = generateTitleSearch(book.title);
    }
  });

function generateTitleSearch(title) { 
  return Sequelize.fn('to_tsvector', title); 
} 
//   return Book;
// };

module.exports = Book;

// indexes: [
//   // Create a unique index on ispn
//   {
//     unique: true,
//     fields: ['ispn']
//   }
// ]